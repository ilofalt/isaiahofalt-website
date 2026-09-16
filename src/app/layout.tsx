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

const title = "Isaiah Ofalt — Senior Software Engineer";
const description =
  "Portfolio of Isaiah Ofalt, a senior full stack software engineer specializing in React, Next.js, Java, and PostgreSQL.";

export const metadata: Metadata = {
  metadataBase: new URL("https://isaiahofalt.com"),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://isaiahofalt.com",
    siteName: "Isaiah Ofalt",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
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
