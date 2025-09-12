import { skills } from '../data/portfolio-data';

/**
 * Modern About section with enhanced visual design and animations
 */
function About(): React.JSX.Element {
  return (
    <section id='about' className='py-24 bg-gradient-to-br from-secondary-800 via-secondary-900 to-primary-950 relative overflow-hidden'>
      {/* Tech Background Elements */}
      <div className='absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-glow-pulse' />
      <div
        className='absolute bottom-0 left-0 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl animate-glow-pulse'
        style={{ animationDelay: '2s' }}
      />

      <div className='max-w-7xl mx-auto px-6 relative z-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
          {/* Content */}
          <div className='order-2 lg:order-1 animate-fade-in-left'>
            {/* Section Badge */}
            <div className='inline-flex items-center px-6 py-3 mb-6 bg-primary-500/10 border border-primary-400/30 rounded-full text-sm font-semibold text-primary-300 shadow-neon'>
              <span className='w-2 h-2 bg-primary-400 rounded-full mr-3 animate-glow-pulse'></span>
              About the Designer
            </div>

            <h2 className='text-5xl md:text-6xl font-bold text-white mb-8 leading-tight'>
              Meet
              <span className='block bg-gradient-to-r from-primary-400 via-primary-300 to-accent-400 bg-clip-text text-transparent animate-tech-shimmer'>
                Anna Bang
              </span>
            </h2>

            <div className='space-y-6 text-lg text-secondary-300 leading-relaxed'>
              <p className='font-light'>
                I'm Anna Bang, a Senior Designer with extensive experience in{' '}
                <span className='font-medium text-primary-400'>brand identity</span>,{' '}
                <span className='font-medium text-accent-400'>UX/UI design</span>, and comprehensive design solutions. My work spans across
                multiple industries, creating memorable brand experiences that connect with audiences.
              </p>
              <p className='font-light'>
                I specialize in brand identity, web design, print design, packaging, photography, and signage. My approach combines
                strategic thinking with creative execution to deliver{' '}
                <span className='font-medium text-primary-300'>cohesive brand experiences</span> across all touchpoints.
              </p>
              <p className='font-light'>
                Based in Melbourne, Australia, I work with clients ranging from startups to established corporations, helping them build
                strong visual identities and engaging digital experiences.
              </p>
            </div>

            {/* Skills */}
            <div className='mt-10'>
              <h3 className='text-xl font-semibold text-white mb-4'>Core Expertise</h3>
              <div className='flex flex-wrap gap-3'>
                {skills.map((skill, index) => (
                  <span
                    key={skill}
                    className='px-4 py-2 bg-secondary-800/50 border border-secondary-700/50 text-secondary-300 rounded-xl text-sm font-medium shadow-soft hover:shadow-tech-glow hover:border-primary-400/30 hover:text-primary-300 transition-all duration-300'
                    style={{ animationDelay: `${index * 50}ms` }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className='order-1 lg:order-2 animate-fade-in-right'>
            <div className='relative group'>
              {/* Main Image */}
              <div className='relative overflow-hidden rounded-3xl shadow-large'>
                <img
                  src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=face'
                  alt='Dot Ping Design'
                  className='w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl' />
              </div>

              {/* Floating Elements */}
              <div className='absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl shadow-neon flex items-center justify-center transform rotate-12 group-hover:rotate-6 transition-transform duration-500'>
                <span className='text-white font-bold text-2xl'>AB</span>
              </div>

              <div className='absolute -bottom-6 -left-6 w-32 h-32 bg-secondary-800/80 backdrop-blur-sm rounded-2xl shadow-tech-glow flex items-center justify-center border border-primary-400/30'>
                <div className='text-center'>
                  <div className='text-2xl font-bold text-primary-400'>8+</div>
                  <div className='text-sm text-secondary-300 font-medium'>Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
