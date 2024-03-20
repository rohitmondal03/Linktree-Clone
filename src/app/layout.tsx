import { type Metadata } from "next";
import { Niramit as Montserrat,  } from "next/font/google";

import type { TLayout } from "types";
import { siteConfig } from "~/config/site";
import { ThemeProvider } from "~/components/providers/ThemeProvider";
import AuthProvider from "~/components/providers/AuthProvider";
import Navbar from "~/components/shared/navbar";
import "~/styles/globals.css";


const montserrat = Montserrat({
  subsets: ["vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
});


export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};


export default function RootLayout({ children }: TLayout) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        disableTransitionOnChange
        >
          <AuthProvider>
            <Navbar />
            <main>{children}</main>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
