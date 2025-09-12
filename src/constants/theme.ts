/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Configurable theme constants for the portfolio
 * Change these values to customize the entire color scheme
 */

export const THEME = {
  // Primary brand colors
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
    950: '#082f49',
  },

  // Secondary/neutral colors
  secondary: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
    950: '#020617',
  },

  // Accent colors
  accent: {
    50: '#fdf4ff',
    100: '#fae8ff',
    200: '#f5d0fe',
    300: '#f0abfc',
    400: '#e879f9',
    500: '#d946ef',
    600: '#c026d3',
    700: '#a21caf',
    800: '#86198f',
    900: '#701a75',
    950: '#4a044e',
  },

  // Neutral grays
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    950: '#0a0a0a',
  },
} as const;

/**
 * Theme variants for different color schemes
 * Uncomment and modify these to create different themes
 */

// Cyber/Matrix Theme (current)
export const CYBER_THEME = THEME;

// Warm/Orange Theme - Eye-friendly warm neutrals
export const WARM_THEME = {
  primary: {
    50: '#fff7ed',
    100: '#ffedd5',
    200: '#fed7aa',
    300: '#fdba74',
    400: '#fb923c',
    500: '#f97316',
    600: '#ea580c',
    700: '#c2410c',
    800: '#9a3412',
    900: '#7c2d12',
    950: '#431407',
  },
  secondary: {
    50: '#fefdfb',
    100: '#fdf4e8',
    200: '#fae6c1',
    300: '#f6d095',
    400: '#f0b366',
    500: '#e8953a',
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
    950: '#451a03',
  },
  accent: {
    50: '#fef3c7',
    100: '#fde68a',
    200: '#fcd34d',
    300: '#fbbf24',
    400: '#f59e0b',
    500: '#d97706',
    600: '#b45309',
    700: '#92400e',
    800: '#78350f',
    900: '#451a03',
    950: '#292524',
  },
  neutral: THEME.neutral,
} as const;

// Purple/Mystic Theme - Soft, comfortable purples
export const MYSTIC_THEME = {
  primary: {
    50: '#faf5ff',
    100: '#f3e8ff',
    200: '#e9d5ff',
    300: '#d8b4fe',
    400: '#c084fc',
    500: '#a855f7',
    600: '#9333ea',
    700: '#7c3aed',
    800: '#6b21a8',
    900: '#581c87',
    950: '#3b0764',
  },
  secondary: {
    50: '#fafaf9',
    100: '#f5f5f4',
    200: '#e7e5e4',
    300: '#d6d3d1',
    400: '#a8a29e',
    500: '#78716c',
    600: '#57534e',
    700: '#44403c',
    800: '#292524',
    900: '#1c1917',
    950: '#0c0a09',
  },
  accent: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
    950: '#082f49',
  },
  neutral: THEME.neutral,
} as const;

// Green/Nature Theme - Calming, natural tones
export const NATURE_THEME = {
  primary: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
    950: '#052e16',
  },
  secondary: {
    50: '#f7f7f5',
    100: '#e7e5e0',
    200: '#d1cec7',
    300: '#b8b3a8',
    400: '#9c9688',
    500: '#807a6b',
    600: '#6b6557',
    700: '#575248',
    800: '#48433c',
    900: '#3d3932',
    950: '#1f1d1a',
  },
  accent: {
    50: '#fefce8',
    100: '#fef9c3',
    200: '#fef08a',
    300: '#fde047',
    400: '#facc15',
    500: '#eab308',
    600: '#ca8a04',
    700: '#a16207',
    800: '#854d0e',
    900: '#713f12',
    950: '#422006',
  },
  neutral: THEME.neutral,
} as const;

/**
 * Current active theme
 * Change this to switch between different themes
 */
export const ACTIVE_THEME = CYBER_THEME;

/**
 * Theme utility functions
 */
export const getThemeColor = (colorPath: string): string => {
  const keys = colorPath.split('.');
  let value: any = ACTIVE_THEME;

  for (const key of keys) {
    value = value[key];
    if (value === undefined) {
      console.warn(`Theme color not found: ${colorPath}`);
      return '#000000'; // fallback
    }
  }

  return value;
};

/**
 * CSS custom properties for dynamic theming
 */
export const getThemeCSSVars = (theme = ACTIVE_THEME) => {
  return {
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
};

/**
 * Theme mapping for easy access
 */
export const THEME_MAP = {
  cyber: CYBER_THEME,
  warm: WARM_THEME,
  mystic: MYSTIC_THEME,
  nature: NATURE_THEME,
} as const;

export type ThemeId = keyof typeof THEME_MAP;
