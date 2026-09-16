# isaiahofalt.com

Personal portfolio site for Isaiah Ofalt. Live at [isaiahofalt.com](https://isaiahofalt.com).

## Stack

- [Next.js](https://nextjs.org) (App Router), built as a static export (`output: "export"` in `next.config.mjs`) — no server, just static HTML/CSS/JS
- [Material UI](https://mui.com) for components and theming (light/dark mode follows system preference, with a manual toggle in the header)
- TypeScript

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

- `npm run build` — production build, outputs static files to `out/`
- `npm run start` — serve the built `out/` folder locally (static export doesn't support `next start`)
- `npm run lint` — ESLint
- `npm run deploy` — build, sync to S3, invalidate CloudFront (manual fallback; normally CI does this)

## Infrastructure

Hosting is AWS: S3 (private bucket) behind CloudFront (CDN + HTTPS), with Route 53 for DNS and ACM for the TLS certificate. Everything is defined as Terraform in [`infra/`](infra/), with state stored remotely in S3 (not committed locally).

The domain is registered at Namecheap; DNS is delegated to the Route 53 hosted zone via custom nameservers.

## Deployment

Pushing to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml): build → sync `out/` to S3 → invalidate the CloudFront cache. Authentication to AWS uses OIDC federation (GitHub issues a short-lived signed token, AWS trades it for temporary credentials scoped to a single least-privilege deploy role) — no AWS keys are stored in GitHub.

**Branch workflow:** all changes are committed to `dev` first. Nothing goes live until `dev` is merged into `main` and pushed.

```bash
git checkout dev
# make changes, commit
git checkout main
git merge dev
git push origin main dev
```
