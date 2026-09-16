import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

type Job = {
  role: string;
  company: string;
  dates: string;
  bullets: string[];
};

const jobs: Job[] = [
  {
    role: "Senior Software Engineer",
    company: "Intelligenesis LLC / Ennoble First",
    dates: "Oct 2023 – Present",
    bullets: [
      "Led development on a front end from scratch for a legacy application, servicing hundreds of customers with live data, using React, Next.js, React Query, and TypeScript",
      "Owned backend architecture including Java services, PostgreSQL data layer, and all REST API design and implementation",
      "Integrated Swagger based API documentation and improved developer experience across teams",
      "Built scalable services using Docker and Kubernetes in production environments",
    ],
  },
  {
    role: "Software Engineer",
    company: "Captivation Software",
    dates: "Oct 2020 – Oct 2023",
    bullets: [
      "Built full stack applications using ReactJS, Java, and JavaScript",
      "Developed REST APIs and integrated MySQL data services",
      "Containerized applications with Docker and deployed through Ansible",
    ],
  },
  {
    role: "Software Engineer",
    company: "Boeing Intelligence and Analytics",
    dates: "Mar 2019 – Oct 2020",
    bullets: [
      "Developed Java based Hadoop analytics pipelines processing millions of records per day",
      "Worked within Linux environments using Jupyter notebooks",
    ],
  },
  {
    role: "Software Developer Associate",
    company: "General Dynamics Information Technology",
    dates: "Dec 2017 – Mar 2019",
    bullets: [
      "Maintained JavaScript user interface components",
      "Developed billing and customer database systems using SQL and Python",
    ],
  },
];

export default function Experience() {
  return (
    <Container maxWidth="md" component="section" id="experience" sx={{ py: 8 }}>
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, letterSpacing: -0.5 }}>
        Experience
      </Typography>
      <Stack spacing={4} sx={{ mt: 3 }}>
        {jobs.map((job) => (
          <Box
            key={`${job.company}-${job.dates}`}
            sx={{ borderLeft: 2, borderColor: "divider", pl: 3 }}
          >
            <Stack
              direction="row"
              spacing={1}
              sx={{ justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap" }}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                {job.role}
              </Typography>
              <Typography variant="caption" color="text.secondary" sx={{ whiteSpace: "nowrap" }}>
                {job.dates}
              </Typography>
            </Stack>
            <Typography variant="body2" color="primary" sx={{ mt: 0.25 }}>
              {job.company}
            </Typography>
            <Stack component="ul" spacing={0.5} sx={{ mt: 1.5, pl: 2.5, color: "text.secondary" }}>
              {job.bullets.map((bullet) => (
                <Typography key={bullet} component="li" variant="body2" sx={{ lineHeight: 1.6 }}>
                  {bullet}
                </Typography>
              ))}
            </Stack>
          </Box>
        ))}
      </Stack>

      <Divider sx={{ mt: 5, mb: 3 }} />

      <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, letterSpacing: -0.5 }}>
        Education
      </Typography>
      <Typography variant="body1" sx={{ fontWeight: 500 }}>
        Liberty University
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Bachelor of Science in Information Technology, Data Networking and
        Security — 2018
      </Typography>
    </Container>
  );
}
