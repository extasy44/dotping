import { useState } from 'react';
import { Project } from '../types/portfolio.types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

/**
 * Modern ProjectCard component with advanced animations and micro-interactions
 */
function ProjectCard({ project, index }: ProjectCardProps): React.JSX.Element {
  const [isNavigating, setIsNavigating] = useState(false);
  const hasImage = typeof project.imageUrl === 'string' && project.imageUrl.trim().length > 0;

  const handleAnchorClick = (): void => {
    if (isNavigating) return;
    setIsNavigating(true);
  };

  return (
    <a
      data-project-slug={project.slug}
      href={`/project/${project.slug}`}
      onClick={handleAnchorClick}
      className={`group block relative bg-gradient-to-br from-secondary-900/50 to-secondary-800/30 backdrop-blur-sm rounded-2xl shadow-card-hover overflow-hidden transition-all duration-300 hover:shadow-tech-glow cursor-pointer border border-primary-500/20 ${
        isNavigating ? 'cursor-progress' : ''
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
      aria-busy={isNavigating}
      aria-label={`Open project ${project.title}`}>
      {/* Image Container */}
      <div className='relative overflow-hidden aspect-[4/3]'>
        {hasImage ? (
          <img
            src={project.imageUrl}
            alt={project.title}
            className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
            loading='lazy'
          />
        ) : (
          <div className='w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary-700 to-secondary-800 text-secondary-300'>
            <span className='px-4 text-center text-sm'>Image coming soon</span>
          </div>
        )}

        <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10' />

        <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20'>
          <div className='bg-primary-500/90 backdrop-blur-sm px-6 py-3 rounded-xl border border-primary-400/50 shadow-tech-glow text-white font-semibold select-none'>
            View Details
          </div>
        </div>
      </div>

      {/* Content */}
      <div className='p-6'>
        {/* Category Badge */}
        <div className='flex items-center justify-between mb-3'>
          <span className='text-sm font-semibold text-primary-300 bg-primary-500/20 border border-primary-400/30 px-3 py-1.5 rounded-full'>
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className='text-xl font-bold text-white mb-3 leading-tight'>{project.title}</h3>

        {/* Description */}
        <p className='text-secondary-300 leading-relaxed mb-4 line-clamp-3'>{project.description}</p>

        {/* Tags */}
        {project.tags && project.tags.length > 1 && (
          <div className='flex flex-wrap gap-2 mb-4'>
            {project.tags.slice(0, 3).map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className='text-xs font-medium text-secondary-400 bg-secondary-800/50 border border-secondary-700/50 px-2.5 py-1 rounded-lg'>
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className='text-xs font-medium text-secondary-500 bg-secondary-800/30 px-2.5 py-1 rounded-lg'>
                +{project.tags.length - 3} more
              </span>
            )}
          </div>
        )}

        {/* CTA */}
        <div className='flex items-center text-primary-400 font-semibold'>
          <span className='mr-2'>Explore Project</span>
          <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
          </svg>
        </div>
      </div>

      {/* Tech Glow Effect (doesn't block clicks) */}
      <div className='absolute inset-0 bg-gradient-to-r from-primary-500/5 via-transparent to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0' />

      {/* Loading Overlay when navigating */}
      {isNavigating && (
        <div className='absolute inset-0 z-30 bg-black/40 backdrop-blur-[2px] flex items-center justify-center'>
          <div className='w-8 h-8 border-2 border-primary-300 border-t-transparent rounded-full animate-spin' />
        </div>
      )}
    </a>
  );
}

export default ProjectCard;
