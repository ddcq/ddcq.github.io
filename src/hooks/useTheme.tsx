'use client';
import daisyThemes from 'daisyui/src/theming/themes';
import { useEffect } from 'react';
import { useLocalStorage } from 'usehooks-ts';


export function useTheme() {
  const [savedTheme, saveTheme] = useLocalStorage('theme', 'dark');
  useEffect(() => {
    const el = document.documentElement;
    el.setAttribute('data-theme', savedTheme);
    const theme = daisyThemes[savedTheme as keyof typeof daisyThemes];
    if (theme && typeof theme === 'object' && 'color-scheme' in theme) {
      el.setAttribute('color-scheme', theme['color-scheme'] as string);
    }
  }, [savedTheme]);
  return [savedTheme, saveTheme] as const;
}
