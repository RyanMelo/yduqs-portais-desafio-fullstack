import type { Metadata } from "next";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import "./globals.css";

import { Inter } from 'next/font/google';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import MainHeader from "@/components/MainHeader";

const roboto = Inter({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: "YDUQS - Teste",
  description: "Aplicação para teste fullstack YDUQS",
};

export default function RootLayout({
 children,
}: Readonly<{
children: React.ReactNode;
}>) {
  return (
  <html lang="pt-br">
    <body className={roboto.variable}>
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <>
          <MainHeader />
          {children}
        </>
      </ThemeProvider>
    </AppRouterCacheProvider>
    </body>
  </html>
)}
