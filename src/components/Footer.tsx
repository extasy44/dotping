import { navigationItems, contactInfo } from '../data/portfolio-data';
import Logo from './Logo';

interface FooterProps {
  onSectionClick: (sectionId: string) => void;
}

/**
 * Modern Footer component with enhanced design and social links
 */
function Footer({ onSectionClick }: FooterProps): React.JSX.Element {
  return (
    <footer className='py-16 bg-gradient-to-br from-secondary-950 via-secondary-900 to-primary-950 text-white relative overflow-hidden'>
      {/* Tech Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%230ea5e9%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
      <div className='absolute top-10 right-10 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl animate-glow-pulse' />
      <div
        className='absolute bottom-10 left-10 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl animate-glow-pulse'
        style={{ animationDelay: '2s' }}
      />

      <div className='max-w-7xl mx-auto px-6 relative z-10'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-12'>
          {/* Brand Section */}
          <div className='md:col-span-2'>
            <div className='mb-6'>
              <Logo size='md' showText={true} />
            </div>
            <p className='text-secondary-300 text-lg leading-relaxed mb-8 max-w-md'>
              Senior Designer creating comprehensive brand experiences and visual solutions that connect with audiences across all
              touchpoints.
            </p>

            {/* Social Links */}
            {/* <div className='flex space-x-4'>
              <a
                href='#'
                className='group w-12 h-12 bg-secondary-800/50 border border-secondary-700/50 rounded-2xl flex items-center justify-center hover:bg-primary-500/20 hover:border-primary-400/30 transition-all duration-300 transform hover:scale-110 hover:shadow-neon'>
                <svg
                  className='w-6 h-6 text-secondary-400 group-hover:text-primary-300 transition-colors duration-300'
                  fill='currentColor'
                  viewBox='0 0 24 24'>
                  <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
                </svg>
              </a>
              <a
                href='#'
                className='group w-12 h-12 bg-secondary-800/50 border border-secondary-700/50 rounded-2xl flex items-center justify-center hover:bg-primary-500/20 hover:border-primary-400/30 transition-all duration-300 transform hover:scale-110 hover:shadow-neon'>
                <svg
                  className='w-6 h-6 text-secondary-400 group-hover:text-primary-300 transition-colors duration-300'
                  fill='currentColor'
                  viewBox='0 0 24 24'>
                  <path d='M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' />
                </svg>
              </a>
              <a
                href='#'
                className='group w-12 h-12 bg-secondary-800/50 border border-secondary-700/50 rounded-2xl flex items-center justify-center hover:bg-primary-500/20 hover:border-primary-400/30 transition-all duration-300 transform hover:scale-110 hover:shadow-neon'>
                <svg
                  className='w-6 h-6 text-secondary-400 group-hover:text-primary-300 transition-colors duration-300'
                  fill='currentColor'
                  viewBox='0 0 24 24'>
                  <path d='M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z' />
                </svg>
              </a>
              <a
                href='#'
                className='group w-12 h-12 bg-secondary-800/50 border border-secondary-700/50 rounded-2xl flex items-center justify-center hover:bg-primary-500/20 hover:border-primary-400/30 transition-all duration-300 transform hover:scale-110 hover:shadow-neon'>
                <svg
                  className='w-6 h-6 text-secondary-400 group-hover:text-primary-300 transition-colors duration-300'
                  fill='currentColor'
                  viewBox='0 0 24 24'>
                  <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
                </svg>
              </a> 
            </div>*/}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='text-xl font-bold mb-6 text-white'>Quick Links</h4>
            <div className='space-y-3'>
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onSectionClick(item.id)}
                  className='block text-secondary-300 hover:text-primary-400 transition-colors duration-300 text-left hover:translate-x-1 transform'>
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className='text-xl font-bold mb-6 text-white'>Get In Touch</h4>
            <div className='space-y-4'>
              <div className='flex items-start'>
                <svg className='w-5 h-5 text-primary-400 mr-3 mt-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                  />
                </svg>
                <span className='text-secondary-300'>{contactInfo.email}</span>
              </div>
              <div className='flex items-start'>
                <svg className='w-5 h-5 text-primary-400 mr-3 mt-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                  />
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
                </svg>
                <span className='text-secondary-300'>{contactInfo.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='border-t border-secondary-700/50 mt-12 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <p className='text-secondary-400 text-sm mb-4 md:mb-0'>&copy; 2025 Jiyun Bang. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
