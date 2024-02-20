import { type Metadata } from "next";
import { Montserrat } from "next/font/google";

import type { TLayout } from "types";
import { siteConfig } from "~/config/site";
import { ThemeProvider } from "~/components/providers/ThemeProvider";
import Navbar from "~/components/ui/nav-bar";
import "~/styles/globals.css";


const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};


export default function RootLayout({ children }: TLayout) {
  return (
    <html lang="en">
      <body className={`font-sans ${montserrat.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
