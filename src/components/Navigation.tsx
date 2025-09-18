import { navigationItems } from '../data/portfolio-data';
import ThemeSwitcher from './ThemeSwitcher';
import Logo from './Logo';
import { useState } from 'react';

interface NavigationProps {
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
  isProjectPage?: boolean;
}

/**
 * Modern navigation component with glassmorphism and smooth animations
 */
function Navigation({ activeSection, onSectionClick, isProjectPage = false }: NavigationProps): React.JSX.Element {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleHomeClick = (): void => {
    setIsMobileMenuOpen(false);
    if (isProjectPage) {
      // Navigate back to home page
      window.location.href = '/';
    } else {
      // Scroll to hero section
      onSectionClick('hero');
    }
  };

  const handleNavigationClick = (sectionId: string): void => {
    setIsMobileMenuOpen(false);
    if (isProjectPage) {
      // Navigate to home page with specific section
      window.location.href = `/#${sectionId}`;
    } else {
      // Scroll to section on current page
      onSectionClick(sectionId);
    }
  };

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-secondary-900/95 shadow-tech-glow'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='flex items-center justify-between h-20'>
          {/* Logo */}
          <button onClick={handleHomeClick} className='flex items-center space-x-3 hover:opacity-80 transition-opacity duration-300 group'>
            <Logo size='sm' showText={false} className='group-hover:scale-105 transition-transform duration-300' />
            <span className='text-xl font-bold text-white group-hover:text-primary-300 transition-colors duration-300'>Jiyun Bang</span>
          </button>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-4'>
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigationClick(item.id)}
                className={`relative px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-primary-300 bg-primary-500/20 border border-primary-400/30 shadow-neon'
                    : 'text-secondary-300 hover:text-primary-300 hover:bg-primary-500/10 hover:border hover:border-primary-400/20'
                }`}>
                {item.label}
                {activeSection === item.id && (
                  <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary-400 rounded-full animate-glow-pulse' />
                )}
              </button>
            ))}

            {/* Theme Switcher */}
            <ThemeSwitcher />
          </div>

          {/* Mobile Menu */}
          <div className='md:hidden flex items-center space-x-2'>
            <ThemeSwitcher className='scale-90' />
            <button
              onClick={toggleMobileMenu}
              className='p-2 rounded-xl text-secondary-300 hover:text-primary-300 hover:bg-primary-500/10 transition-colors duration-200'>
              <svg
                className={`w-6 h-6 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`}
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'>
                {isMobileMenuOpen ? (
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                ) : (
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className='md:hidden fixed inset-0 top-20 bg-secondary-900/98 backdrop-blur-sm z-40'>
          <div className='px-6 py-8'>
            <div className='space-y-6'>
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigationClick(item.id)}
                  className={`block w-full text-left px-6 py-4 rounded-xl font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-primary-300 bg-primary-500/20 border border-primary-400/30 shadow-neon'
                      : 'text-secondary-300 hover:text-primary-300 hover:bg-primary-500/10 hover:border hover:border-primary-400/20'
                  }`}>
                  {item.label}
                  {activeSection === item.id && (
                    <div className='inline-block ml-3 w-2 h-2 bg-primary-400 rounded-full animate-glow-pulse' />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
