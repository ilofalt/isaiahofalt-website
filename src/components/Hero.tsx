import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function Hero() {
  return (
    <Container maxWidth="md" component="section" id="about" sx={{ py: { xs: 8, sm: 12 } }}>
      <Typography variant="overline" color="primary" sx={{ display: "block", fontWeight: 600 }}>
        Hi, I&apos;m
      </Typography>
      <Typography variant="h2" gutterBottom sx={{ fontWeight: 600, letterSpacing: -1 }}>
        Isaiah Ofalt
      </Typography>
      <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 560, fontWeight: 400 }}>
        Senior Software Engineer | Full Stack Engineer
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
        Denver Metropolitan Area, CO
      </Typography>
      <Typography color="text.secondary" sx={{ mt: 3, maxWidth: 560, lineHeight: 1.7 }}>
        Software engineer with over 8 years of experience building full
        stack applications and scalable backend systems. Expertise in Java
        services, React and Next.js with TypeScript, REST APIs, and
        PostgreSQL. Strong focus on performance, maintainability, and
        end-to-end ownership in production environments.
      </Typography>
      <Stack direction="row" spacing={2} useFlexGap sx={{ mt: 4, flexWrap: "wrap" }}>
        <Button href="#contact" variant="outlined" size="large">
          Get in touch
        </Button>
        <Button href="/Isaiah-Ofalt-Resume.pdf" download variant="outlined" size="large">
          Download resume
        </Button>
      </Stack>
    </Container>
  );
}
