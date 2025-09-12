# Theme Configuration Guide

This portfolio uses a configurable theme system that allows you to easily change colors throughout the entire application.

## 🎨 Available Themes

### 1. Cyber Theme (Default)

- **Primary**: Cyan/Blue tones
- **Secondary**: Slate grays
- **Accent**: Purple/Magenta
- **Style**: Tech-focused, modern

### 2. Warm Theme

- **Primary**: Orange/Red tones
- **Secondary**: Slate grays
- **Accent**: Yellow/Gold
- **Style**: Warm, energetic

### 3. Mystic Theme

- **Primary**: Purple/Violet tones
- **Secondary**: Slate grays
- **Accent**: Cyan/Blue
- **Style**: Mystical, creative

### 4. Nature Theme

- **Primary**: Green tones
- **Secondary**: Slate grays
- **Accent**: Yellow/Gold
- **Style**: Natural, organic

## 🔧 How to Change Themes

### Method 1: Change Active Theme (Recommended)

1. Open `src/constants/theme.ts`
2. Find the line: `export const ACTIVE_THEME = CYBER_THEME;`
3. Change it to your desired theme:
   ```typescript
   export const ACTIVE_THEME = WARM_THEME; // For warm theme
   export const ACTIVE_THEME = MYSTIC_THEME; // For mystic theme
   export const ACTIVE_THEME = NATURE_THEME; // For nature theme
   ```

### Method 2: Create Custom Theme

1. Open `src/constants/theme.ts`
2. Add your custom theme following the existing pattern:
   ```typescript
   export const CUSTOM_THEME = {
     primary: {
       50: '#your-color-50',
       100: '#your-color-100',
       // ... continue with all shades
       950: '#your-color-950',
     },
     secondary: THEME.secondary, // or define your own
     accent: {
       // ... define accent colors
     },
     neutral: THEME.neutral, // or define your own
   } as const;
   ```
3. Set it as active: `export const ACTIVE_THEME = CUSTOM_THEME;`

## 🎯 Theme Structure

Each theme follows this structure:

```typescript
{
  primary: {
    50: '#lightest-shade',
    100: '#very-light-shade',
    200: '#light-shade',
    300: '#medium-light-shade',
    400: '#medium-shade',
    500: '#base-color',
    600: '#medium-dark-shade',
    700: '#dark-shade',
    800: '#very-dark-shade',
    900: '#darkest-shade',
    950: '#ultra-dark-shade',
  },
  secondary: { /* same structure */ },
  accent: { /* same structure */ },
  neutral: { /* same structure */ },
}
```

## 🔄 How It Works

1. **Theme Constants**: All colors are defined in `src/constants/theme.ts`
2. **Tailwind Integration**: Colors are imported into `tailwind.config.js`
3. **CSS Variables**: ThemeProvider applies CSS custom properties
4. **Dynamic Updates**: Change `ACTIVE_THEME` and restart dev server
5. **UI Theme Switcher**: Interactive dropdown in navigation for runtime theme changes

## 🚀 Usage in Components

The theme system works automatically with Tailwind classes:

```tsx
// These classes will use the active theme colors
<div className="bg-primary-500 text-white">
<div className="border-accent-400 bg-secondary-800">
<div className="text-primary-300 hover:text-accent-400">
```

## 📝 Notes

- **Restart Required**: After changing `ACTIVE_THEME`, restart the development server
- **Fallback Colors**: CSS includes fallback colors for safety
- **Consistent Naming**: All themes use the same color scale (50-950)
- **Type Safety**: Themes are typed with `as const` for better TypeScript support

## 🎨 Color Guidelines

When creating custom themes:

- **Primary**: Main brand color (buttons, links, highlights)
- **Secondary**: Backgrounds, text, neutral elements
- **Accent**: Special highlights, hover states, call-to-actions
- **Neutral**: Pure grays for text and subtle elements

## 🎨 Theme Switcher UI

The portfolio includes a built-in theme switcher in the navigation bar:

### Features

- **Visual Preview**: Color dots showing primary and accent colors
- **Theme Names**: Clear labels for each theme
- **Descriptions**: Brief descriptions of each theme's style
- **Persistent Storage**: Theme preference saved in localStorage
- **Responsive Design**: Works on both desktop and mobile
- **Smooth Transitions**: Instant theme switching with CSS variables

### Usage

1. Click the theme switcher button in the navigation
2. Select your preferred theme from the dropdown
3. Theme changes instantly across the entire portfolio
4. Your preference is automatically saved

## 🔧 Advanced Customization

For more advanced theming:

1. Modify `getThemeCSSVars()` in `theme.ts` to add more CSS variables
2. Update `ThemeProvider.tsx` to handle additional theme logic
3. Add new themes to `THEME_MAP` and `THEME_OPTIONS` in `ThemeSwitcher.tsx`
4. Customize the theme switcher UI in `src/components/ThemeSwitcher.tsx`
