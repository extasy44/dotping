import { useState, useEffect } from 'react';
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
  const [isImageTransitioning, setIsImageTransitioning] = useState<boolean>(false);
  const [isFullscreenOpen, setIsFullscreenOpen] = useState<boolean>(false);
  const [fullscreenImageIndex, setFullscreenImageIndex] = useState<number>(0);
  const relatedProjects = getRelatedProjects(project.id, 3);

  // Handle smooth image transitions
  const handleImageChange = (newIndex: number): void => {
    if (newIndex === selectedImageIndex || isImageTransitioning) return;

    setIsImageTransitioning(true);

    // Small delay to allow transition to start
    setTimeout(() => {
      setSelectedImageIndex(newIndex);
      setIsImageTransitioning(false);
    }, 150);
  };

  // Handle fullscreen image viewer
  const openFullscreen = (index: number): void => {
    setFullscreenImageIndex(index);
    setIsFullscreenOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeFullscreen = (): void => {
    setIsFullscreenOpen(false);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  const navigateFullscreen = (direction: 'prev' | 'next'): void => {
    const totalImages = project.images.length;
    if (direction === 'prev') {
      setFullscreenImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
    } else {
      setFullscreenImageIndex((prev) => (prev + 1) % totalImages);
    }
  };

  // Keyboard navigation for fullscreen
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      if (!isFullscreenOpen) return;

      switch (e.key) {
        case 'Escape':
          closeFullscreen();
          break;
        case 'ArrowLeft':
          navigateFullscreen('prev');
          break;
        case 'ArrowRight':
          navigateFullscreen('next');
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreenOpen]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

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
              <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-white'>{project.title}</h1>
              <p className='text-xl text-secondary-300 leading-relaxed mb-8'>{project.description}</p>

              {/* Project Meta */}
              <div className='grid grid-cols-2 gap-6 mb-8'>
                <div>
                  <h3 className='text-sm font-semibold text-primary-400 mb-2'>Client</h3>
                  <p className='text-secondary-300'>{project.client}</p>
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
                {project.imageUrl?.trim().length ? (
                  <img src={project.imageUrl} alt={project.title} className='w-full h-[500px] object-cover' loading='lazy' />
                ) : (
                  <div className='w-full h-[500px] flex items-center justify-center bg-secondary-800 text-secondary-300'>
                    <span className='px-4 text-center'>Hero image coming soon</span>
                  </div>
                )}
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
                    <span className='font-semibold text-white'>
                      {Array.isArray(project.category) ? project.category.join(', ') : project.category}
                    </span>
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
              <div
                className='relative overflow-hidden rounded-3xl shadow-tech-glow group cursor-pointer'
                onClick={() => openFullscreen(selectedImageIndex)}>
                {/* Image with smooth transition */}
                <div className='relative w-full h-[600px] overflow-hidden'>
                  {project.images?.[selectedImageIndex]?.trim().length ? (
                    <img
                      src={project.images[selectedImageIndex]}
                      alt={`${project.title} - Image ${selectedImageIndex + 1}`}
                      className={`w-full h-full object-cover transition-all duration-500 ease-in-out ${
                        isImageTransitioning ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
                      }`}
                      loading='lazy'
                    />
                  ) : (
                    <div
                      className={`w-full h-full flex items-center justify-center bg-secondary-800 text-secondary-300 transition-all duration-500 ${
                        isImageTransitioning ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
                      }`}>
                      <span className='px-4 text-center'>Gallery image coming soon</span>
                    </div>
                  )}

                  {/* Loading overlay during transition */}
                  {isImageTransitioning && (
                    <div className='absolute inset-0 bg-secondary-900/50 flex items-center justify-center'>
                      <div className='w-8 h-8 border-2 border-primary-400 border-t-transparent rounded-full animate-spin'></div>
                    </div>
                  )}
                </div>

                {/* Hover overlay with zoom icon */}
                <div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100'>
                  <div className='bg-primary-500/90 backdrop-blur-sm rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300'>
                    <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7'
                      />
                    </svg>
                  </div>
                </div>

                {/* Image counter */}
                <div className='absolute top-4 right-4 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1 text-sm text-white'>
                  {selectedImageIndex + 1} / {project.images.length}
                </div>
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
              {project.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => handleImageChange(index)}
                  disabled={isImageTransitioning}
                  className={`relative overflow-hidden rounded-xl transition-all duration-300 group ${
                    selectedImageIndex === index
                      ? 'ring-4 ring-primary-400 shadow-neon scale-105'
                      : 'hover:shadow-tech-glow hover:scale-105'
                  } ${isImageTransitioning ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}>
                  {image?.trim().length ? (
                    <img
                      src={image}
                      alt={`${project.title} - Thumbnail ${index + 1}`}
                      className='w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110'
                      loading='lazy'
                    />
                  ) : (
                    <div className='w-full h-32 flex items-center justify-center bg-secondary-800 text-secondary-300'>
                      <span className='px-2 text-xs'>Image soon</span>
                    </div>
                  )}

                  {/* Thumbnail overlay */}
                  <div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100'>
                    <div className='bg-white/90 backdrop-blur-sm rounded-full p-2'>
                      <svg className='w-4 h-4 text-gray-800' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7'
                        />
                      </svg>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Fullscreen Image Viewer */}
      {isFullscreenOpen && (
        <div className='fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center'>
          {/* Close button */}
          <button
            onClick={closeFullscreen}
            className='absolute top-6 right-6 z-10 bg-black/70 backdrop-blur-sm rounded-full p-3 text-white hover:bg-black/90 transition-all duration-300 group'>
            <svg
              className='w-6 h-6 group-hover:rotate-90 transition-transform duration-300'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
            </svg>
          </button>

          {/* Navigation buttons */}
          {project.images.length > 1 && (
            <>
              <button
                onClick={() => navigateFullscreen('prev')}
                className='absolute left-6 top-1/2 -translate-y-1/2 z-10 bg-black/70 backdrop-blur-sm rounded-full p-3 text-white hover:bg-black/90 transition-all duration-300 group'>
                <svg
                  className='w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
                </svg>
              </button>

              <button
                onClick={() => navigateFullscreen('next')}
                className='absolute right-6 top-1/2 -translate-y-1/2 z-10 bg-black/70 backdrop-blur-sm rounded-full p-3 text-white hover:bg-black/90 transition-all duration-300 group'>
                <svg
                  className='w-6 h-6 group-hover:translate-x-1 transition-transform duration-300'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                </svg>
              </button>
            </>
          )}

          {/* Main image with smooth transition */}
          <div className='relative w-full h-full flex items-center justify-center fullscreen-image-container'>
            <div className='relative w-full h-full flex items-center justify-center'>
              {project.images?.[fullscreenImageIndex]?.trim().length ? (
                <img
                  key={fullscreenImageIndex}
                  src={project.images[fullscreenImageIndex]}
                  alt={`${project.title} - Full size ${fullscreenImageIndex + 1}`}
                  className='fullscreen-image rounded-lg shadow-2xl transition-all duration-500 ease-in-out animate-fade-in'
                  style={{
                    maxWidth: '100vw',
                    maxHeight: '90vh',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    objectPosition: 'center',
                  }}
                />
              ) : (
                <div className='w-[80vw] h-[60vh] max-w-[100vw] max-h-[90vh] flex items-center justify-center bg-secondary-800 text-secondary-300 rounded-lg'>
                  <span className='px-4'>Full image coming soon</span>
                </div>
              )}
            </div>
          </div>

          {/* Image counter */}
          <div className='absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm rounded-full px-4 py-2 text-white'>
            {fullscreenImageIndex + 1} / {project.images.length}
          </div>

          {/* Thumbnail strip with custom scrollbar */}
          {project.images.length > 1 && (
            <div className='absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 max-w-md overflow-x-auto scrollbar-neon'>
              {project.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setFullscreenImageIndex(index)}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                    fullscreenImageIndex === index
                      ? 'ring-2 ring-primary-400 shadow-neon'
                      : 'hover:ring-2 hover:ring-white/50 hover:shadow-glow'
                  }`}>
                  {image?.trim().length ? (
                    <img src={image} alt={`Thumbnail ${index + 1}`} className='w-full h-full object-cover' loading='lazy' />
                  ) : (
                    <div className='w-full h-full flex items-center justify-center bg-secondary-800 text-secondary-300 text-[10px]'>
                      Soon
                    </div>
                  )}
                </button>
              ))}
            </div>
          )}

          {/* Keyboard hints */}
          <div className='absolute top-6 left-6 text-white/70 text-sm'>
            <div className='flex gap-4'>
              <span>← → Navigate</span>
              <span>ESC Close</span>
            </div>
          </div>
        </div>
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
