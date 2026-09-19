import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import EmailIcon from "@mui/icons-material/EmailOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const contactLinks = [
  { label: "Email", href: "mailto:ilofalt@gmail.com", icon: <EmailIcon /> },
];

const elsewhereLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/isaiah-ofalt/",
    icon: <LinkedInIcon />,
  },
  {
    label: "GitHub",
    href: "https://github.com/ilofalt",
    icon: <GitHubIcon />,
  },
];

function LinkButtons({ links }: { links: typeof contactLinks }) {
  return (
    <Stack direction="row" spacing={2} useFlexGap sx={{ mt: 3, flexWrap: "wrap" }}>
      {links.map((link) => (
        <Button
          key={link.label}
          href={link.href}
          target={link.href.startsWith("http") ? "_blank" : undefined}
          rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
          variant="outlined"
          startIcon={link.icon}
        >
          {link.label}
        </Button>
      ))}
    </Stack>
  );
}

export default function Contact() {
  return (
    <Container maxWidth="md" component="section" id="contact" sx={{ py: 3 }}>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, letterSpacing: -0.5 }}>
        Get in touch
      </Typography>
      <LinkButtons links={contactLinks} />

      <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, letterSpacing: -0.5, mt: 5 }}>
        Links
      </Typography>
      <LinkButtons links={elsewhereLinks} />
    </Container>
  );
}
