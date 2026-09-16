"use client";

import { useEffect, useState } from "react";
import { useColorScheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

export default function ColorModeToggle() {
  const { mode, systemMode, setMode } = useColorScheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <IconButton aria-label="Toggle color mode" sx={{ visibility: "hidden" }} />;
  }

  const resolvedMode = mode === "system" ? systemMode : mode;
  const isDark = resolvedMode === "dark";

  return (
    <IconButton
      aria-label="Toggle color mode"
      onClick={() => setMode(isDark ? "light" : "dark")}
      color="inherit"
    >
      {isDark ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
}
