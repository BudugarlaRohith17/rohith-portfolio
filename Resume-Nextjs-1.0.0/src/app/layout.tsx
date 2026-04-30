import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rohith Budugarla | Software Developer Portfolio",
  description: "AI/ML Engineer & Software Developer portfolio showcasing projects in machine learning, data engineering, and full-stack development",
  keywords: ["Rohith Budugarla", "Software Developer", "AI/ML Engineer", "Portfolio"],
  authors: [{ name: "Rohith Budugarla" }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={bricolageGrotesque.className}>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
