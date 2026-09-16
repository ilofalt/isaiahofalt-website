"use client";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <AppBar
      position="sticky"
      color="inherit"
      elevation={0}
      sx={{ borderBottom: 1, borderColor: "divider" }}
    >
      <Container maxWidth="md">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Typography
            component="a"
            href="#"
            variant="subtitle2"
            color="text.primary"
            sx={{ textDecoration: "none", fontWeight: 600 }}
          >
            Isaiah Ofalt
          </Typography>
          <Stack direction="row" spacing={3}>
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                underline="hover"
                color="text.secondary"
                variant="body2"
                sx={{ "&:hover": { color: "text.primary" } }}
              >
                {item.label}
              </Link>
            ))}
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
