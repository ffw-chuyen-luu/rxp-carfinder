import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

import Header from "@/components/sitewide/Header";
import Footer from "@/components/sitewide/Footer";

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
        <div className="flex min-h-screen flex-col justify-between">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
