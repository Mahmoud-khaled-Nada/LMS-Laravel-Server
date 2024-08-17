import React, { useState, useEffect, useRef, useLayoutEffect, useMemo, ReactNode } from 'react';

// Define the type for the `usePrevious` hook
function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

// Define the type for the `useStorageTheme` hook
function useStorageTheme(key: string): [string, React.Dispatch<React.SetStateAction<string>>] {
  const userPreference = !!window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  const [theme, setTheme] = useState<string>(localStorage.getItem(key) || (userPreference ? 'dark' : 'light'));

  // Update stored theme
  useEffect(() => {
    // localStorage.setItem(key, theme);
  }, [theme, key]);

  return [theme, setTheme];
}

// Define the shape of the context value
interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

// Create context with a default value of undefined
export const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined);

// Define the props for the ThemeProvider
interface ThemeProviderProps {
  children: ReactNode;
}

// Create context provider
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useStorageTheme('theme');

  // Update root element class on theme change
  const oldTheme = usePrevious(theme);
  useLayoutEffect(() => {
    if (oldTheme) {
      document.documentElement.classList.remove(`theme-${oldTheme}`);
    }
    document.documentElement.classList.add(`theme-${theme}`);
  }, [theme, oldTheme]);

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  const value = useMemo<ThemeContextType>(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
