// Modern design system constants following senior UI/UX best practices
export const ANIMATION_DELAYS = {
  PROJECT_CARD_STAGGER: 100, // ms
  SCROLL_DURATION: 1000, // ms
  MICRO_INTERACTION: 200, // ms
  PAGE_TRANSITION: 300, // ms
};

export const BREAKPOINTS = {
  MOBILE: 'sm', // 640px
  TABLET: 'md', // 768px
  DESKTOP: 'lg', // 1024px
  LARGE_DESKTOP: 'xl', // 1280px
  EXTRA_LARGE: '2xl', // 1536px
};

// Modern color palette with semantic naming
export const COLORS = {
  // Primary brand colors
  PRIMARY: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6', // Main primary
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
    950: '#172554',
  },
  // Neutral grays
  NEUTRAL: {
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
  // Semantic colors
  SUCCESS: '#10b981',
  WARNING: '#f59e0b',
  ERROR: '#ef4444',
  INFO: '#06b6d4',
};

// Typography scale following 1.25 ratio (Major Third)
export const TYPOGRAPHY = {
  FONT_FAMILIES: {
    SANS: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
    DISPLAY: ['Inter', 'system-ui', 'sans-serif'],
    MONO: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
  },
  FONT_SIZES: {
    XS: '0.75rem',    // 12px
    SM: '0.875rem',   // 14px
    BASE: '1rem',     // 16px
    LG: '1.125rem',   // 18px
    XL: '1.25rem',    // 20px
    '2XL': '1.5rem',  // 24px
    '3XL': '1.875rem', // 30px
    '4XL': '2.25rem', // 36px
    '5XL': '3rem',    // 48px
    '6XL': '3.75rem', // 60px
    '7XL': '4.5rem',  // 72px
    '8XL': '6rem',    // 96px
    '9XL': '8rem',    // 128px
  },
  LINE_HEIGHTS: {
    TIGHT: '1.25',
    SNUG: '1.375',
    NORMAL: '1.5',
    RELAXED: '1.625',
    LOOSE: '2',
  },
  FONT_WEIGHTS: {
    THIN: '100',
    LIGHT: '300',
    NORMAL: '400',
    MEDIUM: '500',
    SEMIBOLD: '600',
    BOLD: '700',
    EXTRABOLD: '800',
    BLACK: '900',
  },
};

// Spacing scale following 8px grid system
export const SPACING = {
  0: '0',
  1: '0.25rem',  // 4px
  2: '0.5rem',   // 8px
  3: '0.75rem',  // 12px
  4: '1rem',     // 16px
  5: '1.25rem',  // 20px
  6: '1.5rem',   // 24px
  8: '2rem',     // 32px
  10: '2.5rem',  // 40px
  12: '3rem',    // 48px
  16: '4rem',    // 64px
  20: '5rem',    // 80px
  24: '6rem',    // 96px
  32: '8rem',    // 128px
  40: '10rem',   // 160px
  48: '12rem',   // 192px
  56: '14rem',   // 224px
  64: '16rem',   // 256px
};

// Border radius scale
export const BORDER_RADIUS = {
  NONE: '0',
  SM: '0.125rem',   // 2px
  DEFAULT: '0.25rem', // 4px
  MD: '0.375rem',   // 6px
  LG: '0.5rem',     // 8px
  XL: '0.75rem',    // 12px
  '2XL': '1rem',    // 16px
  '3XL': '1.5rem',  // 24px
  FULL: '9999px',
};

// Shadow system
export const SHADOWS = {
  SM: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  MD: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  LG: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  XL: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2XL': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  INNER: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
  NONE: '0 0 #0000',
};

export const SECTIONS = {
  HERO: 'hero',
  PROJECTS: 'projects',
  ABOUT: 'about',
  CONTACT: 'contact',
};
