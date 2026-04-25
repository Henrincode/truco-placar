import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Sancreek } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

const sancreek = Sancreek({
  variable: "--font-sancreek",
  weight: ["400"]
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Truco placar",
  description: "Um aplicativo criado para contar pontos no truco",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${poppins.className} ${poppins.variable} ${sancreek.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased overscroll-contai`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
