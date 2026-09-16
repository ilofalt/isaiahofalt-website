import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import ThemeRegistry from "@/components/ThemeRegistry";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Isaiah Ofalt — Senior Software Engineer",
  description:
    "Portfolio of Isaiah Ofalt, a senior full stack software engineer specializing in React, Next.js, Java, and PostgreSQL.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.variable} suppressHydrationWarning>
      <body>
        <InitColorSchemeScript />
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
