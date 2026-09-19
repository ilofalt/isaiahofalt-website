import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";

const skillCategories = [
  { label: "Languages", skills: ["Java", "JavaScript", "TypeScript", "Python", "SQL"] },
  { label: "Frontend", skills: ["ReactJS", "Next.js", "React Query"] },
  { label: "Backend", skills: ["Node.js", "REST APIs", "Swagger", "Microservices"] },
  { label: "Data", skills: ["PostgreSQL", "MySQL", "ElasticSearch", "Hadoop"] },
  { label: "DevOps", skills: ["Docker", "Kubernetes", "Ansible", "Terraform", "AWS"] },
  { label: "Systems", skills: ["Linux", "CentOS", "RHEL"] },
  { label: "AI Tools", skills: ["Claude", "CodeRabbit", "Copilot Autofix"] },
  { label: "Testing", skills: ["Jest", "React Testing Library", "Playwright", "JUnit", "SonarQube"] },
  { label: "Security", skills: ["Dependabot", "CodeQL", "Secret Scanning"] },
];

export default function Skills() {
  return (
    <Container maxWidth="md" component="section" id="skills" sx={{ py: 5 }}>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, letterSpacing: -0.5 }}>
        Core Technologies
      </Typography>
      <Grid container spacing={3} sx={{ mt: 1 }}>
        {skillCategories.map((category) => (
          <Grid key={category.label} size={{ xs: 12, sm: 6, md: 4 }}>
            <Paper variant="outlined" sx={{ p: 3, height: "100%" }}>
              <Typography
                variant="subtitle2"
                color="primary"
                gutterBottom
                sx={{ fontWeight: 600 }}
              >
                {category.label}
              </Typography>
              <Stack direction="row" spacing={1} useFlexGap sx={{ mt: 1, flexWrap: "wrap" }}>
                {category.skills.map((skill) => (
                  <Chip key={skill} label={skill} size="small" variant="outlined" />
                ))}
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
