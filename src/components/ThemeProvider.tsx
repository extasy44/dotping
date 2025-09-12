import { useEffect } from 'react';
import { THEME_MAP, ThemeId } from '../constants/theme';

interface ThemeProviderProps {
  children: React.ReactNode;
}

/**
 * Theme provider component that applies theme classes directly to the document
 * This approach works better with Tailwind CSS v4
 */
function ThemeProvider({ children }: ThemeProviderProps): React.JSX.Element {
  // Apply theme to document
  const applyTheme = (themeId: ThemeId): void => {
    const root = document.documentElement;

    // Remove existing theme classes
    root.classList.remove('theme-cyber', 'theme-warm', 'theme-mystic', 'theme-nature');

    // Add new theme class
    root.classList.add(`theme-${themeId}`);

    // Also apply CSS variables as backup
    const theme = THEME_MAP[themeId];
    const cssVars = {
      '--color-primary-50': theme.primary[50],
      '--color-primary-100': theme.primary[100],
      '--color-primary-200': theme.primary[200],
      '--color-primary-300': theme.primary[300],
      '--color-primary-400': theme.primary[400],
      '--color-primary-500': theme.primary[500],
      '--color-primary-600': theme.primary[600],
      '--color-primary-700': theme.primary[700],
      '--color-primary-800': theme.primary[800],
      '--color-primary-900': theme.primary[900],
      '--color-primary-950': theme.primary[950],
      '--color-secondary-50': theme.secondary[50],
      '--color-secondary-100': theme.secondary[100],
      '--color-secondary-200': theme.secondary[200],
      '--color-secondary-300': theme.secondary[300],
      '--color-secondary-400': theme.secondary[400],
      '--color-secondary-500': theme.secondary[500],
      '--color-secondary-600': theme.secondary[600],
      '--color-secondary-700': theme.secondary[700],
      '--color-secondary-800': theme.secondary[800],
      '--color-secondary-900': theme.secondary[900],
      '--color-secondary-950': theme.secondary[950],
      '--color-accent-50': theme.accent[50],
      '--color-accent-100': theme.accent[100],
      '--color-accent-200': theme.accent[200],
      '--color-accent-300': theme.accent[300],
      '--color-accent-400': theme.accent[400],
      '--color-accent-500': theme.accent[500],
      '--color-accent-600': theme.accent[600],
      '--color-accent-700': theme.accent[700],
      '--color-accent-800': theme.accent[800],
      '--color-accent-900': theme.accent[900],
      '--color-accent-950': theme.accent[950],
    };

    Object.entries(cssVars).forEach(([property, value]) => {
      root.style.setProperty(property, value);
    });
  };

  // Load saved theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme') as ThemeId;
    if (savedTheme && THEME_MAP[savedTheme]) {
      applyTheme(savedTheme);
    } else {
      // Apply default theme
      applyTheme('cyber');
    }
  }, []);

  // Listen for theme changes from other components
  useEffect(() => {
    const handleThemeChange = (event: CustomEvent) => {
      const themeId = event.detail.themeId as ThemeId;
      if (THEME_MAP[themeId]) {
        applyTheme(themeId);
      }
    };

    window.addEventListener('theme-change', handleThemeChange as EventListener);

    return () => {
      window.removeEventListener('theme-change', handleThemeChange as EventListener);
    };
  }, []);

  return <>{children}</>;
}

export default ThemeProvider;
