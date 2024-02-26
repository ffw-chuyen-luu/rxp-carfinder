import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

import Header from "@/components/sitewide/Header";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Car Finder",
  description: "The NextJs demo app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
