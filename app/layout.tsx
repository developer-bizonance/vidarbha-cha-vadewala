import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

import VadaIntro from "./components/VadaIntro";

export const metadata: Metadata = {
  title: "Vidarbha Cha Vadewala | Only Vadas, Done Right",
  description:
    "Vidarbha Cha Vadewala — a Vidarbha startup specializing only in vadas: dahi vada, sabudana vada, medu vada and more. Home delivery available.",
  keywords: ["vada", "dahi vada", "Vidarbha", "Nagpur street food", "vadewala", "home delivery"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <VadaIntro />
       
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
