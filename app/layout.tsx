import type { Metadata, Viewport } from "next";
import { Archivo, IBM_Plex_Mono, Public_Sans } from "next/font/google";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import SmoothScroll from "../components/SmoothScroll";
import "./globals.css";

const display = Archivo({ subsets: ["latin"], axes: ["wdth"], variable: "--font-display", display: "swap" });
const body = Public_Sans({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://ashraya-architects.com"),
  title: {
    default: "Ashraya Architects | Architecture & Design Practice",
    template: "%s | Ashraya Architects"
  },
  description:
    "Ashraya Architects is a multidisciplinary architecture and design practice delivering architecture, interiors, urban thinking, visualization and execution-oriented documentation from concept to built reality.",
  openGraph: {
    title: "Ashraya Architects",
    description: "Multidisciplinary architecture and design practice in Surat.",
    url: "https://ashraya-architects.com",
    siteName: "Ashraya Architects",
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashraya Architects",
    description: "Multidisciplinary architecture and design practice in Surat."
  }
};

export const viewport: Viewport = {
  themeColor: "#ffffff"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <SmoothScroll />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
