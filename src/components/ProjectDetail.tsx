import { useState } from 'react';
import { Project } from '../types/portfolio.types';
import { getRelatedProjects } from '../data/portfolio-data';
import ProjectCard from './ProjectCard';

interface ProjectDetailProps {
  project: Project;
}

/**
 * Detailed project page component with comprehensive project information
 */
function ProjectDetail({ project }: ProjectDetailProps): React.JSX.Element {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const relatedProjects = getRelatedProjects(project.id, 3);

  return (
    <div className='min-h-screen bg-gradient-to-br from-secondary-950 via-secondary-900 to-primary-950'>
      {/* Hero Section */}
      <section className='relative py-24 bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-950 text-white overflow-hidden'>
        {/* Tech Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%230ea5e9%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />

        {/* Floating Tech Elements */}
        <div className='absolute top-20 right-20 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl animate-glow-pulse' />
        <div
          className='absolute bottom-20 left-20 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl animate-glow-pulse'
          style={{ animationDelay: '2s' }}
        />

        <div className='max-w-7xl mx-auto px-6 relative z-10'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
            {/* Project Info */}
            <div className='animate-fade-in-left'>
              <div className='inline-flex items-center px-6 py-3 mb-6 bg-primary-500/10 border border-primary-400/30 rounded-full text-sm font-semibold text-primary-300 shadow-neon'>
                <span className='w-2 h-2 bg-primary-400 rounded-full mr-3 animate-glow-pulse'></span>
                {project.category}
              </div>

              <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-white'>{project.title}</h1>

              <p className='text-xl text-secondary-300 leading-relaxed mb-8'>{project.description}</p>

              {/* Project Meta */}
              <div className='grid grid-cols-2 gap-6 mb-8'>
                <div>
                  <h3 className='text-sm font-semibold text-primary-400 mb-2'>Client</h3>
                  <p className='text-secondary-300'>{project.client}</p>
                </div>
                <div>
                  <h3 className='text-sm font-semibold text-primary-400 mb-2'>Year</h3>
                  <p className='text-secondary-300'>{project.year}</p>
                </div>
                <div>
                  <h3 className='text-sm font-semibold text-primary-400 mb-2'>Duration</h3>
                  <p className='text-secondary-300'>{project.duration}</p>
                </div>
                <div>
                  <h3 className='text-sm font-semibold text-primary-400 mb-2'>Role</h3>
                  <p className='text-secondary-300'>{project.role}</p>
                </div>
              </div>

              {/* Tags */}
              <div className='flex flex-wrap gap-2'>
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className='px-3 py-1 bg-primary-500/20 border border-primary-400/30 text-primary-300 rounded-lg text-sm font-medium'>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Main Image */}
            <div className='animate-fade-in-right'>
              <div className='relative overflow-hidden rounded-3xl shadow-large'>
                <img src={project.imageUrl} alt={project.title} className='w-full h-[500px] object-cover' />
                <div className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl' />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className='py-24 bg-gradient-to-br from-secondary-800 via-secondary-900 to-primary-950'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-16'>
            {/* Main Content */}
            <div className='lg:col-span-2'>
              <h2 className='text-4xl font-bold text-white mb-8'>Project Overview</h2>
              <div className='prose prose-lg max-w-none'>
                <p className='text-secondary-300 leading-relaxed mb-8'>{project.longDescription}</p>
              </div>

              {/* Challenge & Solution */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'>
                <div className='bg-secondary-800/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-8 shadow-tech-glow'>
                  <h3 className='text-xl font-bold text-white mb-4'>Challenge</h3>
                  <p className='text-secondary-300'>{project.challenges}</p>
                </div>
                <div className='bg-secondary-800/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-8 shadow-tech-glow'>
                  <h3 className='text-xl font-bold text-white mb-4'>Solution</h3>
                  <p className='text-secondary-300'>{project.solutions}</p>
                </div>
              </div>

              {/* Results */}
              <div className='bg-gradient-to-r from-primary-500/20 to-accent-500/20 border border-primary-400/30 rounded-2xl p-8 mb-12 shadow-neon'>
                <h3 className='text-xl font-bold text-white mb-4'>Results</h3>
                <p className='text-secondary-300'>{project.results}</p>
              </div>
            </div>

            {/* Sidebar */}
            <div className='space-y-8'>
              {/* Tools Used */}
              <div className='bg-secondary-800/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-8 shadow-tech-glow'>
                <h3 className='text-xl font-bold text-white mb-6'>Tools Used</h3>
                <div className='flex flex-wrap gap-2'>
                  {project.tools.map((tool, index) => (
                    <span
                      key={index}
                      className='px-3 py-2 bg-primary-500/20 border border-primary-400/30 text-primary-300 rounded-lg text-sm font-medium'>
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Stats */}
              <div className='bg-secondary-800/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-8 shadow-tech-glow'>
                <h3 className='text-xl font-bold text-white mb-6'>Project Stats</h3>
                <div className='space-y-4'>
                  <div className='flex justify-between'>
                    <span className='text-secondary-300'>Duration</span>
                    <span className='font-semibold text-white'>{project.duration}</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-secondary-300'>Category</span>
                    <span className='font-semibold text-white'>{project.category}</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-secondary-300'>Year</span>
                    <span className='font-semibold text-white'>{project.year}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      {project.images.length > 1 && (
        <section className='py-24 bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-950'>
          <div className='max-w-7xl mx-auto px-6'>
            <h2 className='text-4xl font-bold text-white mb-12 text-center'>Project Gallery</h2>

            {/* Main Image Display */}
            <div className='mb-8'>
              <div className='relative overflow-hidden rounded-3xl shadow-tech-glow'>
                <img
                  src={project.images[selectedImageIndex]}
                  alt={`${project.title} - Image ${selectedImageIndex + 1}`}
                  className='w-full h-[600px] object-cover'
                />
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
              {project.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`relative overflow-hidden rounded-xl transition-all duration-300 ${
                    selectedImageIndex === index ? 'ring-4 ring-primary-400 shadow-neon' : 'hover:shadow-tech-glow'
                  }`}>
                  <img src={image} alt={`${project.title} - Thumbnail ${index + 1}`} className='w-full h-32 object-cover' />
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className='py-24 bg-gradient-to-br from-secondary-800 via-secondary-900 to-primary-950'>
          <div className='max-w-7xl mx-auto px-6'>
            <h2 className='text-4xl font-bold text-white mb-12 text-center'>Related Projects</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
              {relatedProjects.map((relatedProject, index) => (
                <ProjectCard key={relatedProject.id} project={relatedProject} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default ProjectDetail;
