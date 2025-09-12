import { useEffect } from 'react';
import { useActiveSection } from './hooks/usePortfolio';
import { scrollToSection } from './utils/helpers';
import { Navigation, Hero, Projects, About, Contact, Footer, ProjectDetail } from './components';
import { getProjectBySlug } from './data/portfolio-data';
import ThemeProvider from './components/ThemeProvider';

/**
 * Main App component for the portfolio website
 * Uses custom hooks and utility functions for clean separation of concerns
 */
function App(): React.JSX.Element {
  const activeSection = useActiveSection();

  // Check if we're on a project detail page
  const currentPath = window.location.pathname;
  const isProjectPage = currentPath.startsWith('/project/');
  const projectSlug = isProjectPage ? currentPath.split('/project/')[1] : null;
  const project = projectSlug ? getProjectBySlug(projectSlug) : null;

  // Handle hash navigation when coming from project pages
  useEffect(() => {
    if (!isProjectPage && window.location.hash) {
      const sectionId = window.location.hash.substring(1);
      setTimeout(() => {
        scrollToSection(sectionId, 80);
      }, 100); // Small delay to ensure page is loaded
    }
  }, [isProjectPage]);

  // Event handlers for smooth scrolling
  const handleSectionClick = (sectionId: string): void => {
    scrollToSection(sectionId, 80); // Account for fixed header
  };

  const handleProjectsClick = (): void => handleSectionClick('projects');
  const handleContactClick = (): void => handleSectionClick('contact');

  // If we're on a project detail page, show the project detail component
  if (isProjectPage && project) {
    return (
      <ThemeProvider>
        <div className='font-sans text-white bg-gradient-to-br from-secondary-950 via-secondary-900 to-primary-950 min-h-screen'>
          <Navigation activeSection={activeSection} onSectionClick={handleSectionClick} isProjectPage={true} />
          <ProjectDetail project={project} />
          <Footer onSectionClick={handleSectionClick} />
        </div>
      </ThemeProvider>
    );
  }

  // Default portfolio homepage
  return (
    <ThemeProvider>
      <div className='font-sans text-white bg-gradient-to-br from-secondary-950 via-secondary-900 to-primary-950 min-h-screen'>
        <Navigation activeSection={activeSection} onSectionClick={handleSectionClick} isProjectPage={false} />

        {/* Theme Test Element - Remove this after testing */}
        <div className='fixed top-20 right-4 z-50 bg-secondary-800 p-4 rounded-lg border border-primary-500'>
          <div className='text-xs text-white mb-2'>Theme Test:</div>
          <div className='flex gap-2 mb-2'>
            <div className='w-6 h-6 bg-primary-500 rounded border'></div>
            <div className='w-6 h-6 bg-accent-500 rounded border'></div>
          </div>
          <div className='text-xs text-secondary-300'>Backgrounds & Text:</div>
          <div className='flex gap-2'>
            <div className='w-6 h-6 bg-secondary-800 rounded border border-secondary-600'></div>
            <div className='w-6 h-6 bg-secondary-900 rounded border border-secondary-700'></div>
            <div className='w-6 h-6 bg-primary-300 rounded border'></div>
          </div>
        </div>

        <Hero onProjectsClick={handleProjectsClick} onContactClick={handleContactClick} />

        <Projects />

        <About />

        <Contact />

        <Footer onSectionClick={handleSectionClick} />
      </div>
    </ThemeProvider>
  );
}

export default App;
