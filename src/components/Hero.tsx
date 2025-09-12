interface HeroProps {
  onProjectsClick: () => void;
  onContactClick: () => void;
}

/**
 * Hero section component with modern design and micro-interactions
 */
function Hero({ onProjectsClick, onContactClick }: HeroProps): React.JSX.Element {
  return (
    <section
      id='hero'
      className='relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary-950 via-secondary-900 to-primary-950'>
      {/* Tech Background Elements */}
      <div className='absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%230ea5e9" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")] opacity-60' />

      {/* Cyber Grid Overlay */}
      <div className='absolute inset-0 bg-gradient-to-r from-transparent via-primary-500/5 to-transparent animate-cyber-grid' />

      {/* Floating Tech Elements */}
      <div className='absolute top-20 left-10 w-20 h-20 bg-primary-500/20 rounded-full blur-xl animate-glow-pulse' />
      <div
        className='absolute bottom-20 right-10 w-32 h-32 bg-accent-500/20 rounded-full blur-xl animate-glow-pulse'
        style={{ animationDelay: '2s' }}
      />
      <div className='absolute top-1/2 left-1/4 w-16 h-16 bg-primary-400/30 rounded-full blur-lg animate-tech-shimmer' />

      {/* Matrix Rain Effect */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary-400/30 to-transparent animate-matrix-rain' />
        <div
          className='absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-accent-400/30 to-transparent animate-matrix-rain'
          style={{ animationDelay: '10s' }}
        />
      </div>

      {/* Main Content */}
      <div className='relative z-10 max-w-7xl mx-auto px-6 text-center'>
        <div className='mb-12 animate-fade-in-up'>
          {/* Badge */}
          <div className='inline-flex items-center px-6 py-3 mt-24 sm:mt-20 md:mt-16 mb-8 bg-primary-500/10 backdrop-blur-sm border border-primary-400/30 rounded-full text-sm font-medium text-primary-300 shadow-neon'>
            <span className='w-2 h-2 bg-primary-400 rounded-full mr-3 animate-glow-pulse'></span>
            Senior Designer • Available for Projects
          </div>

          {/* Main Heading */}
          <h1 className='text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 leading-tight tracking-tight'>
            <span className='block animate-hologram'>Anna Bang</span>
            <span className='block bg-gradient-to-r from-primary-400 via-primary-300 to-accent-400 bg-clip-text text-transparent animate-tech-shimmer'>
              Creative Technologist
            </span>
          </h1>

          {/* Subtitle */}
          <p className='text-xl md:text-2xl lg:text-3xl text-secondary-300 max-w-4xl mx-auto leading-relaxed font-light mb-12'>
            Senior Designer specializing in <span className='font-medium text-primary-400'>brand identity</span>,{' '}
            <span className='font-medium text-accent-400'>UX/UI design</span>, and{' '}
            <span className='font-medium text-primary-300'>digital innovation</span> that transforms ideas into exceptional experiences.
          </p>

          {/* CTA Buttons */}
          <div className='flex flex-col sm:flex-row gap-6 justify-center items-center'>
            <button
              onClick={onProjectsClick}
              className='group relative px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold rounded-2xl hover:from-primary-500 hover:to-primary-400 transition-all duration-300 transform hover:scale-105 shadow-tech-glow hover:shadow-glow-lg'>
              <span className='relative z-10 flex items-center'>
                View My Work
                <svg
                  className='w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                </svg>
              </span>
              <div className='absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
            </button>

            <button
              onClick={onContactClick}
              className='group px-8 py-4 border-2 border-primary-400/50 text-primary-300 font-semibold rounded-2xl hover:border-primary-300 hover:text-primary-200 transition-all duration-300 transform hover:scale-105 bg-primary-500/5 backdrop-blur-sm hover:bg-primary-500/10 hover:shadow-neon'>
              <span className='flex items-center'>
                Get In Touch
                <svg
                  className='w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className='absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 animate-bounce'>
          <div className='flex flex-col items-center text-primary-400'>
            <span className='text-sm font-medium mb-2'>Scroll to explore</span>
            <div className='w-6 h-10 border-2 border-primary-400/50 rounded-full flex justify-center'>
              <div className='w-1 h-3 bg-primary-400 rounded-full mt-2 animate-pulse'></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
