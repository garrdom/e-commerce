'use client';
import { type PropsWithChildren, createContext, useContext, useState, useEffect } from 'react';
import { Theme, useMediaQuery } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme, lightTheme } from '@/src/theme';
import { ThemeMode } from '@/src/typings';

// --------------------------------------------------------------------

type Context = {
  themeMode: ThemeMode;
  switchThemeMode: (mode: ThemeMode) => void;
};

const ThemeModeContext = createContext<Context>({
  themeMode: ThemeMode.SYSTEM,
  switchThemeMode() {}
});

// --------------------------------------------------------------------

export default function ThemeModeProvider(props: PropsWithChildren) {
  const children = props.children;
  const [ themeMode, setThemeMode ] = useState<ThemeMode>(ThemeMode.SYSTEM);
  const [ theme, setTheme ] = useState<Theme>(darkTheme);

  const systemTheme: Exclude<ThemeMode, ThemeMode.SYSTEM> = useMediaQuery('(prefers-color-scheme: dark)') ? ThemeMode.DARK : ThemeMode.LIGHT;

  useEffect(() => {
    const mode = _getThemeModeFromLocalStorage();
    setThemeMode(mode);
  }, []);

  useEffect(() => {
    switch (themeMode) {
      case ThemeMode.LIGHT:
        setTheme(lightTheme);
        break;
      case ThemeMode.DARK:
        setTheme(darkTheme);
        break;
      case ThemeMode.SYSTEM:
        switch (systemTheme) {
          case ThemeMode.LIGHT:
            setTheme(lightTheme);
            break;
          case ThemeMode.DARK:
            setTheme(darkTheme);
            break;    
        }
        break;
    }
  }, [ systemTheme, themeMode ]);

  const _getThemeModeFromLocalStorage = () => {
    const mode = localStorage.getItem('themeMode') as ThemeMode;

    if (mode) {
      return mode;
    }

    return ThemeMode.SYSTEM;
  };

  const _setThemeModeToLocalStorage = (mode: ThemeMode) => {
    localStorage.setItem('themeMode', mode);
  };

  const switchThemeMode = (mode: ThemeMode) => {
    setThemeMode(mode);
    _setThemeModeToLocalStorage(mode);
  };

  return (
    <ThemeModeContext.Provider value={{ themeMode, switchThemeMode }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}

export function useThemeModeContext() {
  const context = useContext(ThemeModeContext);

  if (context === null) {
    throw new Error('useThemeModeContext must be used within an ThemeModeProvider');
  }

  return context;
}
