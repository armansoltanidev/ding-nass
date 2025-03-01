import "@/styles/app.css";

import Providers from "@/components/providers";
import { siteConfig } from "@/config/site";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import localFont from "next/font/local";

const yekanSansX = localFont({ src: "./../fonts/IRANYekanXVF.woff2" });

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s - ${siteConfig.title}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <head>
        <link rel="theme-color" href="#000000" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </head>
      <body className={yekanSansX.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
