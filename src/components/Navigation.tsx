import { navigationItems } from '../data/portfolio-data';
import ThemeSwitcher from './ThemeSwitcher';

interface NavigationProps {
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
  isProjectPage?: boolean;
}

/**
 * Modern navigation component with glassmorphism and smooth animations
 */
function Navigation({ activeSection, onSectionClick, isProjectPage = false }: NavigationProps): React.JSX.Element {
  const handleHomeClick = (): void => {
    if (isProjectPage) {
      // Navigate back to home page
      window.location.href = '/';
    } else {
      // Scroll to hero section
      onSectionClick('hero');
    }
  };

  const handleNavigationClick = (sectionId: string): void => {
    if (isProjectPage) {
      // Navigate to home page with specific section
      window.location.href = `/#${sectionId}`;
    } else {
      // Scroll to section on current page
      onSectionClick(sectionId);
    }
  };
  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-secondary-900/95 shadow-tech-glow'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='flex items-center justify-between h-20'>
          {/* Logo */}
          <button onClick={handleHomeClick} className='flex items-center space-x-3 hover:opacity-80 transition-opacity duration-300 group'>
            <div className='w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center shadow-neon group-hover:shadow-glow-lg transition-all duration-300'>
              <span className='text-white font-bold text-lg'>AB</span>
            </div>
            <span className='text-xl font-bold text-white group-hover:text-primary-300 transition-colors duration-300'>Anna Bang</span>
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
            <button className='p-2 rounded-xl text-secondary-300 hover:text-primary-300 hover:bg-primary-500/10 transition-colors duration-200'>
              <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
