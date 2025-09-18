import { useEffect } from 'react';
import { useActiveSection } from './hooks/useActiveSection';
import { scrollToSection } from './utils/helpers';
import { Navigation, Hero, Projects, About, Contact, Footer, ProjectDetail } from './components';
import { getProjectBySlug } from './data/portfolio-data';
import ThemeProvider from './components/ThemeProvider';

/**
 * Main App component for the portfolio website
 * Uses custom hooks and utility functions for clean separation of concerns
 */
function App(): React.JSX.Element {
  const [activeSection, setActiveSection] = useActiveSection();

  // Check if we're on a project detail page
  const currentPath = window.location.pathname;
  const isProjectPage = currentPath.startsWith('/project/');
  const projectSlug = isProjectPage ? currentPath.split('/project/')[1] : null;
  const project = projectSlug ? getProjectBySlug(projectSlug) : null;

  // Redirect to home if project not found
  useEffect(() => {
    if (isProjectPage && !project) {
      console.warn(`Project not found for slug: ${projectSlug}`);
      window.location.href = '/';
    }
  }, [isProjectPage, project, projectSlug]);

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
    setActiveSection(sectionId);
    scrollToSection(sectionId, 80); // Account for fixed header
  };

  const handleProjectsClick = (): void => handleSectionClick('projects');
  const handleContactClick = (): void => handleSectionClick('contact');

  // If we're on a project detail page, show the project detail component
  if (isProjectPage) {
    if (!project) {
      return (
        <ThemeProvider>
          <div className='font-sans text-white bg-gradient-to-br from-secondary-950 via-secondary-900 to-primary-950 min-h-screen flex items-center justify-center'>
            <div className='text-center'>
              <h1 className='text-2xl font-bold text-primary-400 mb-4'>Project Not Found</h1>
              <p className='text-secondary-300 mb-6'>The project you're looking for doesn't exist.</p>
              <button
                onClick={() => (window.location.href = '/')}
                className='px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-400 transition-colors'>
                Back to Home
              </button>
            </div>
          </div>
        </ThemeProvider>
      );
    }

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
