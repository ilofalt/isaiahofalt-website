variable "github_repo" {
  description = "GitHub repo allowed to assume the deploy role, as owner/name"
  type        = string
  default     = "ilofalt/isaiahofalt-website"
}

# GitHub now issues OIDC tokens with an "immutable ID" subject claim —
# repo:{owner_login}@{owner_id}/{repo_name}@{repo_id}:ref:... — instead of
# the classic repo:{owner}/{repo}:ref:... format, so the numeric IDs are
# required here too. Confirmed via `gh api repos/ilofalt/isaiahofalt-website
# --jq '{owner_id: .owner.id, repo_id: .id}'`.
variable "github_owner_id" {
  description = "Numeric GitHub owner (user) ID, part of GitHub's immutable OIDC subject claim"
  type        = string
  default     = "118030664"
}

variable "github_repo_id" {
  description = "Numeric GitHub repo ID, part of GitHub's immutable OIDC subject claim"
  type        = string
  default     = "1373641886"
}

data "tls_certificate" "github_actions" {
  url = "https://token.actions.githubusercontent.com/.well-known/openid-configuration"
}

resource "aws_iam_openid_connect_provider" "github_actions" {
  url             = "https://token.actions.githubusercontent.com"
  client_id_list  = ["sts.amazonaws.com"]
  thumbprint_list = [data.tls_certificate.github_actions.certificates[0].sha1_fingerprint]
}

# Trusts GitHub's OIDC token, but only when it was issued for a workflow run
# on this repo's main branch — no long-lived AWS keys stored in GitHub.
data "aws_iam_policy_document" "github_actions_trust" {
  statement {
    effect  = "Allow"
    actions = ["sts:AssumeRoleWithWebIdentity"]

    principals {
      type        = "Federated"
      identifiers = [aws_iam_openid_connect_provider.github_actions.arn]
    }

    condition {
      test     = "StringEquals"
      variable = "token.actions.githubusercontent.com:aud"
      values   = ["sts.amazonaws.com"]
    }

    condition {
      test     = "StringEquals"
      variable = "token.actions.githubusercontent.com:sub"
      values = [
        "repo:${split("/", var.github_repo)[0]}@${var.github_owner_id}/${split("/", var.github_repo)[1]}@${var.github_repo_id}:ref:refs/heads/main"
      ]
    }
  }
}

resource "aws_iam_role" "github_actions_deploy" {
  name               = "isaiahofalt-website-deploy"
  assume_role_policy = data.aws_iam_policy_document.github_actions_trust.json
}

# Least-privilege: only what the deploy script actually does — sync the
# built site to this one bucket and invalidate this one distribution.
data "aws_iam_policy_document" "github_actions_deploy" {
  statement {
    effect = "Allow"
    actions = [
      "s3:ListBucket",
    ]
    resources = [aws_s3_bucket.site.arn]
  }

  statement {
    effect = "Allow"
    actions = [
      "s3:PutObject",
      "s3:DeleteObject",
      "s3:GetObject",
    ]
    resources = ["${aws_s3_bucket.site.arn}/*"]
  }

  statement {
    effect    = "Allow"
    actions   = ["cloudfront:CreateInvalidation"]
    resources = [aws_cloudfront_distribution.site.arn]
  }
}

resource "aws_iam_role_policy" "github_actions_deploy" {
  name   = "deploy-site"
  role   = aws_iam_role.github_actions_deploy.id
  policy = data.aws_iam_policy_document.github_actions_deploy.json
}

output "github_actions_role_arn" {
  description = "IAM role ARN for the GitHub Actions deploy workflow"
  value       = aws_iam_role.github_actions_deploy.arn
}
