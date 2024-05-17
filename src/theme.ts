'use client';
import { Roboto } from 'next/font/google';
import { Theme, createTheme } from '@mui/material';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap'
});

const defaultTheme: Theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  }
});

export const lightTheme: Theme = createTheme({
  ...defaultTheme,
  palette: {
    mode: 'light'
  }
});

export const darkTheme: Theme = createTheme({
  ...defaultTheme,
  palette: {
    mode: 'dark'
  }
});
