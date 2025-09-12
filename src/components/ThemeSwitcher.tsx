import { useState, useEffect } from 'react';
import { THEME_MAP, ThemeId } from '../constants/theme';

interface ThemeSwitcherProps {
  className?: string;
}

interface ThemeOption {
  id: string;
  name: string;
  description: string;
  colors: {
    primary: string;
    accent: string;
  };
  theme: (typeof THEME_MAP)[keyof typeof THEME_MAP];
}

const THEME_OPTIONS: ThemeOption[] = [
  {
    id: 'cyber',
    name: 'Cyber',
    description: 'Tech-focused cyan & purple',
    colors: {
      primary: THEME_MAP.cyber.primary[500],
      accent: THEME_MAP.cyber.accent[500],
    },
    theme: THEME_MAP.cyber,
  },
  {
    id: 'warm',
    name: 'Warm',
    description: 'Energetic orange & yellow',
    colors: {
      primary: THEME_MAP.warm.primary[500],
      accent: THEME_MAP.warm.accent[500],
    },
    theme: THEME_MAP.warm,
  },
  {
    id: 'mystic',
    name: 'Mystic',
    description: 'Creative purple & cyan',
    colors: {
      primary: THEME_MAP.mystic.primary[500],
      accent: THEME_MAP.mystic.accent[500],
    },
    theme: THEME_MAP.mystic,
  },
  {
    id: 'nature',
    name: 'Nature',
    description: 'Organic green & yellow',
    colors: {
      primary: THEME_MAP.nature.primary[500],
      accent: THEME_MAP.nature.accent[500],
    },
    theme: THEME_MAP.nature,
  },
];

function ThemeSwitcher({ className = '' }: ThemeSwitcherProps): React.JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<ThemeId>('cyber');

  // Handle theme selection
  const handleThemeSelect = (themeOption: ThemeOption): void => {
    // Dispatch custom event to notify ThemeProvider
    const event = new CustomEvent('theme-change', {
      detail: { themeId: themeOption.id },
    });
    window.dispatchEvent(event);

    setCurrentTheme(themeOption.id as ThemeId);
    setIsOpen(false);

    // Store theme preference in localStorage
    localStorage.setItem('portfolio-theme', themeOption.id);
  };

  // Load saved theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme') as ThemeId;
    if (savedTheme && THEME_MAP[savedTheme]) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  const currentThemeOption = THEME_OPTIONS.find((option) => option.id === currentTheme) || THEME_OPTIONS[0];

  return (
    <div className={`relative ${className}`}>
      {/* Theme Switcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='flex items-center gap-3 px-4 py-2 bg-secondary-800/50 backdrop-blur-sm border border-primary-500/20 rounded-xl text-white hover:bg-secondary-700/50 hover:border-primary-400/30 transition-all duration-300 shadow-tech-glow'
        aria-label='Theme switcher'>
        {/* Color Preview */}
        <div className='flex gap-1'>
          <div className='w-3 h-3 rounded-full border border-white/20' style={{ backgroundColor: currentThemeOption.colors.primary }} />
          <div className='w-3 h-3 rounded-full border border-white/20' style={{ backgroundColor: currentThemeOption.colors.accent }} />
        </div>

        {/* Theme Name */}
        <span className='text-sm font-medium'>{currentThemeOption.name}</span>

        {/* Dropdown Arrow */}
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div className='fixed inset-0 z-40' onClick={() => setIsOpen(false)} />

          {/* Menu */}
          <div className='absolute top-full right-0 mt-2 w-64 bg-secondary-800/95 backdrop-blur-md border border-primary-500/20 rounded-2xl shadow-tech-glow z-50 overflow-hidden'>
            {/* Header */}
            <div className='px-4 py-3 border-b border-primary-500/20'>
              <h3 className='text-sm font-semibold text-white'>Choose Theme</h3>
              <p className='text-xs text-secondary-300 mt-1'>Select your preferred color scheme</p>
            </div>

            {/* Theme Options */}
            <div className='py-2'>
              {THEME_OPTIONS.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleThemeSelect(option)}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-secondary-700/50 transition-colors duration-200 ${
                    currentTheme === option.id ? 'bg-primary-500/10 border-r-2 border-primary-400' : ''
                  }`}>
                  {/* Color Preview */}
                  <div className='flex gap-1'>
                    <div className='w-4 h-4 rounded-full border border-white/20' style={{ backgroundColor: option.colors.primary }} />
                    <div className='w-4 h-4 rounded-full border border-white/20' style={{ backgroundColor: option.colors.accent }} />
                  </div>

                  {/* Theme Info */}
                  <div className='flex-1'>
                    <div className='text-sm font-medium text-white'>{option.name}</div>
                    <div className='text-xs text-secondary-300'>{option.description}</div>
                  </div>

                  {/* Selected Indicator */}
                  {currentTheme === option.id && (
                    <svg className='w-4 h-4 text-primary-400' fill='currentColor' viewBox='0 0 20 20'>
                      <path
                        fillRule='evenodd'
                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        clipRule='evenodd'
                      />
                    </svg>
                  )}
                </button>
              ))}
            </div>

            {/* Footer */}
            <div className='px-4 py-3 border-t border-primary-500/20 bg-secondary-900/50'>
              <p className='text-xs text-secondary-400'>Theme preference is saved locally</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ThemeSwitcher;
