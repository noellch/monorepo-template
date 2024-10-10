import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { Roboto } from "next/font/google";
import { ReactNode } from "react";

import GlobalCssPriority from "@/components/providers/GlobalCssPriority";
import theme from "@/designs/theme";

import type { Metadata } from "next";

import "./globals.css";

const inter = Roboto({ weight: ["400", "700", "900"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} id="__next">
        <CssBaseline />
        <GlobalCssPriority>
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
          </AppRouterCacheProvider>
        </GlobalCssPriority>
      </body>
    </html>
  );
}
