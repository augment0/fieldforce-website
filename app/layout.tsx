import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { LenisProvider } from "@/components/motion/lenis-provider";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { SkipLink } from "@/components/layout/skip-link";
import "./globals.css";

const faviconSvg =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">` +
      `<rect width="32" height="32" rx="7" fill="#08090C"/>` +
      `<path d="M6 12 Q16 4 26 12" fill="none" stroke="#aeadad" stroke-width="1.4" stroke-linecap="round"/>` +
      `<path d="M9 14 Q16 9 23 14" fill="none" stroke="#aeadad" stroke-width="1.4" stroke-linecap="round"/>` +
      `<circle cx="16" cy="20" r="3" fill="#147bb9"/>` +
    `</svg>`,
  );

export const metadata: Metadata = {
  metadataBase: new URL("https://fieldforce.com"),
  title: {
    default: "Fieldforce — The AI-native operating system for physical infrastructure",
    template: "%s · Fieldforce",
  },
  description:
    "Fieldforce is the AI-native platform for deploying and operating physical infrastructure — telecom today, EV and IoT next. Trusted by operators in 23 countries managing $10B+ of network assets.",
  applicationName: "Fieldforce",
  authors: [{ name: "Fieldforce" }],
  keywords: [
    "telecom deployment",
    "EV charging operations",
    "IoT fleet management",
    "infrastructure operations",
    "AI agents",
    "field service",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fieldforce.com",
    siteName: "Fieldforce",
    title: "Fieldforce — Run the networks of the future",
    description:
      "The AI-native operating system for physical infrastructure. Telecom today, EV and IoT next.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fieldforce — Run the networks of the future",
    description: "The AI-native operating system for physical infrastructure.",
  },
  robots: { index: true, follow: true },
  icons: { icon: [{ url: faviconSvg, type: "image/svg+xml" }] },
};

export const viewport: Viewport = {
  themeColor: "#08090C",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <SkipLink />
        <LenisProvider>
          <Nav />
          <main id="main">{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
