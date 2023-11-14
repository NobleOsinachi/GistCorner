import "./globals.css";
import type { Metadata } from "next";

import Header from "../components/Header";
import Footer from "@/components/Footer";
import Section1 from "@/components/Section1";

export const metadata: Metadata = {
  title: "GistCorner Blog",
  description: "Your one stop corner for breaking news and latest gists.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body data-class={"body-wrapper"}>
        <header>
          <Header />
        </header>

        <main>{children}</main>

        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
