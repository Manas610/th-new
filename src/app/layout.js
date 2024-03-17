import { Inter } from "next/font/google";
import { ThemeModeScript } from 'flowbite-react';
import HeaderTH from "@/components/Header";
import FooterTH from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <ThemeModeScript />
      </head>
      <body className={inter.className}>
        <HeaderTH />
          {children}
        <FooterTH />
      </body>
    </html>
  );
}
