'use client';
import daisyThemes from 'daisyui/src/theming/themes';
import { useEffect } from 'react';
import { useLocalStorage } from 'usehooks-ts';


export function useTheme() {
  const [savedTheme, saveTheme] = useLocalStorage('theme', 'dark');
  useEffect(() => {
    const el = document.documentElement;
    el.setAttribute('data-theme', savedTheme);
    el.setAttribute('color-scheme', daisyThemes[savedTheme]['color-scheme']);
  }, [savedTheme]);
  return [savedTheme, saveTheme];
}
