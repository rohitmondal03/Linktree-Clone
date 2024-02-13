import { type Metadata } from "next";
import { Inter } from "next/font/google";

import type { TLayout } from "types";
import "@/~/styles/globals.css";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};


export default function RootLayout({ children }: TLayout) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
