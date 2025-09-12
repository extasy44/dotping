import { useState } from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/portfolio-data';

/**
 * Modern Projects section with enhanced layout and animations
 */
function Projects(): React.JSX.Element {
  const [showAllProjects, setShowAllProjects] = useState<boolean>(false);

  const projectsToShow = 12;
  const displayedProjects = showAllProjects ? projects : projects.slice(0, projectsToShow);
  const hasMoreProjects = projects.length > projectsToShow;

  const toggleShowAll = (): void => {
    setShowAllProjects(!showAllProjects);
  };

  return (
    <section
      id='projects'
      className='py-24 bg-gradient-to-b from-secondary-950 via-secondary-900 to-secondary-800 relative overflow-hidden'>
      {/* Tech Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%230ea5e9%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221.5%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40" />

      {/* Cyber Grid Lines */}
      <div className='absolute inset-0 bg-gradient-to-r from-transparent via-primary-500/5 to-transparent animate-cyber-grid' />

      {/* Floating Tech Elements */}
      <div className='absolute top-20 right-20 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl animate-glow-pulse' />
      <div
        className='absolute bottom-20 left-20 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl animate-glow-pulse'
        style={{ animationDelay: '2s' }}
      />

      <div className='max-w-7xl mx-auto px-6 relative z-10'>
        {/* Section Header */}
        <div className='text-center mb-20 animate-fade-in-up'>
          <div className='inline-flex items-center px-6 py-3 mb-6 bg-primary-500/10 border border-primary-400/30 rounded-full text-sm font-semibold text-primary-300 shadow-neon'>
            <span className='w-2 h-2 bg-primary-400 rounded-full mr-3 animate-glow-pulse'></span>
            Portfolio Showcase
          </div>

          <h2 className='text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight'>
            Featured
            <span className='block bg-gradient-to-r from-primary-400 via-primary-300 to-accent-400 bg-clip-text text-transparent animate-tech-shimmer'>
              Projects
            </span>
          </h2>

          <p className='text-xl md:text-2xl text-secondary-300 max-w-4xl mx-auto leading-relaxed font-light'>
            A curated collection of projects that showcase expertise in{' '}
            <span className='font-medium text-primary-400'>user experience design</span>,{' '}
            <span className='font-medium text-accent-400'>brand identity</span>, and{' '}
            <span className='font-medium text-primary-300'>digital innovation</span>.
          </p>
        </div>

        {/* Projects Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10'>
          {displayedProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View All Projects Button */}
        {hasMoreProjects && (
          <div className='text-center mt-16 animate-fade-in-up' style={{ animationDelay: '600ms' }}>
            <button
              onClick={toggleShowAll}
              className='group inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold rounded-2xl hover:from-primary-500 hover:to-primary-400 transition-all duration-300 transform hover:scale-105 shadow-tech-glow hover:shadow-glow-lg'>
              <span className='relative z-10 flex items-center'>
                {showAllProjects ? 'Show Less Projects' : `View All ${projects.length} Projects`}
                <svg
                  className={`w-5 h-5 ml-2 transform transition-transform duration-300 ${showAllProjects ? 'rotate-180' : 'rotate-0'}`}
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                </svg>
              </span>
              <div className='absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
            </button>

            {!showAllProjects && <p className='text-secondary-400 text-sm mt-4'>Showing 6 of {projects.length} projects</p>}
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
