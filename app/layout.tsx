import { PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Container, CssBaseline } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import ThemeModeProvider from '@/src/contexts/theme-mode-context';
import CartProvider from '@/src/contexts/cart-context';
import Header from '@/src/components/header';
import '@/src/globals.css';

// --------------------------------------------------------------------

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-commerce",
  description: "Generated by create next app",
};

// --------------------------------------------------------------------

export default function RootLayout(props: PropsWithChildren) {
  const children = props.children;

  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider options={{ key: 'css', enableCssLayer: true }}>
          <ThemeModeProvider>
            <CartProvider>
              <CssBaseline />
              <Container sx={{
                paddingBottom: {
                  xs: '16px',
                  md: '24px'
                }
              }}>
                <Header />
                {children}
              </Container>
            </CartProvider>
          </ThemeModeProvider>
        </AppRouterCacheProvider>  
      </body>
    </html>
  );
}
