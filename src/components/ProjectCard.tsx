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
  const [, setIsHovered] = useState<boolean>(false);
  const hasImage = typeof project.imageUrl === 'string' && project.imageUrl.trim().length > 0;

  return (
    <div
      className='group relative bg-gradient-to-br from-secondary-900/50 to-secondary-800/30 backdrop-blur-sm rounded-2xl shadow-card-hover overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:shadow-tech-glow animate-fade-in-up cursor-pointer border border-primary-500/20'
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => (window.location.href = `/project/${project.slug}`)}>
      {/* Image Container */}
      <div className='relative overflow-hidden aspect-[4/3]'>
        {hasImage ? (
          <img
            src={project.imageUrl}
            alt={project.title}
            className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
            loading='lazy'
          />
        ) : (
          <div className='w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary-700 to-secondary-800 text-secondary-300'>
            <span className='px-4 text-center text-sm'>Image coming soon</span>
          </div>
        )}

        {/* Gradient Overlay */}
        <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

        {/* Year Badge */}
        {/* <div className='absolute top-4 right-4 bg-primary-500/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-semibold text-primary-300 border border-primary-400/30 shadow-neon'>
          {project.year}
        </div> */}

        {/* Hover Overlay Content */}
        <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0'>
          <div className='bg-primary-500/20 backdrop-blur-sm px-6 py-3 rounded-xl border border-primary-400/30 shadow-tech-glow'>
            <span className='text-primary-300 font-semibold'>View Details</span>
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
        <h3 className='text-xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors duration-300 leading-tight'>
          {project.title}
        </h3>

        {/* Description */}
        <p className='text-secondary-300 leading-relaxed mb-4 line-clamp-3'>{project.description}</p>

        {/* Tags */}
        {project.tags && project.tags.length > 1 && (
          <div className='flex flex-wrap gap-2 mb-4'>
            {project.tags.slice(0, 3).map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className='text-xs font-medium text-secondary-400 bg-secondary-800/50 border border-secondary-700/50 px-2.5 py-1 rounded-lg transition-colors duration-200 group-hover:bg-primary-500/20 group-hover:text-primary-300 group-hover:border-primary-400/30'>
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
        <div className='flex items-center text-primary-400 font-semibold group-hover:text-primary-300 transition-all duration-300'>
          <span className='mr-2'>Explore Project</span>
          <svg
            className='w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
          </svg>
        </div>
      </div>

      {/* Tech Glow Effect */}
      <div className='absolute inset-0 bg-gradient-to-r from-primary-500/5 via-transparent to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none' />
    </div>
  );
}

export default ProjectCard;
