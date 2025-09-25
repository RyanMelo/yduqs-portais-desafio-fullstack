import type { Metadata } from "next";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import "./globals.css";

import { Inter, Montserrat } from 'next/font/google';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import MainHeader from "@/components/ui/MainHeader";

const inter = Inter({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-montserrat',
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
  <html lang="pt-BR" className={`${inter.variable} ${montserrat.variable}`}>
    <body>
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
