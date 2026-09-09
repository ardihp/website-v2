import type { Metadata } from "next";
import { Fredoka, Manrope } from "next/font/google";
import LayoutSection from "@/components/layouts";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { TooltipProvider } from "@/components/ui/tooltip";

const fredoka = Fredoka({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-fredoka",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ardihp.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ardi • Portfolio",
    template: "%s • Ardi Hp",
  },
  description:
    "Personal portfolio of Ardi — a software engineer showcasing projects, works, and writing on web development.",
  keywords: [
    "Ardi Hp",
    "portfolio",
    "software engineer",
    "web developer",
    "frontend developer",
    "React",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Ardi Hp", url: siteUrl }],
  creator: "Ardi Hp",
  publisher: "Ardi Hp",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: new URL(siteUrl),
    siteName: "Ardi Hp",
    title: "Ardi Hp • Portfolio",
    description:
      "Personal portfolio of Ardi — a software engineer showcasing projects, works, and writing on web development.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ardi Hp • Portfolio",
    description:
      "Personal portfolio of Ardi — a software engineer showcasing projects, works, and writing on web development.",
  },
  icons: {
    icon: [
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/favicon/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} ${fredoka.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          disableTransitionOnChange
        >
          <TooltipProvider>
            <LayoutSection>{children}</LayoutSection>
          </TooltipProvider>
        </ThemeProvider>

        <Script
          async
          src="https://cloud.umami.is/script.js"
          data-website-id="a0b93b20-e464-4845-b021-1d0c1e59459e"
        />
        <Analytics />
      </body>
    </html>
  );
}
