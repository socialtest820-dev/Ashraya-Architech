import type { Metadata } from "next";
import MotionArchitecture from "../components/MotionArchitecture";
import "./globals.css";
import "./sections.css";

export const metadata: Metadata = {
  title: "Ashraya Architects | Architecture & Design Practice",
  description:
    "Ashraya Architects is a multidisciplinary architecture and design practice delivering architecture, interiors, urban thinking, visualization and execution-oriented documentation from concept to built reality."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
