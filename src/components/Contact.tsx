import { contactInfo } from '../data/portfolio-data';
import { useForm } from '../hooks/useActiveSection';

/**
 * Modern Contact section with enhanced form design and visual elements
 */
function Contact(): React.JSX.Element {
  const { values, handleChange, handleSubmit } = useForm({
    name: '',
    email: '',
    message: '',
  });

  const onSubmit = async (formValues: { name: string; email: string; message: string }): Promise<void> => {
    console.log('Form submitted:', formValues);
    // Create mailto link for email
    const subject = encodeURIComponent(`Portfolio Contact from ${formValues.name}`);
    const body = encodeURIComponent(`Name: ${formValues.name}\nEmail: ${formValues.email}\n\nMessage:\n${formValues.message}`);
    const mailtoLink = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;

    // Open email client
    window.open(mailtoLink);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    handleSubmit(onSubmit);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    handleChange(name as keyof typeof values, value);
  };

  return (
    <section id='contact' className='py-24 bg-gradient-to-br from-primary-950 via-secondary-900 to-secondary-800 relative overflow-hidden'>
      {/* Tech Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%230ea5e9%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40" />
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
            Get In Touch
          </div>

          <h2 className='text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight'>
            Let's Work
            <span className='block bg-gradient-to-r from-primary-400 via-primary-300 to-accent-400 bg-clip-text text-transparent animate-tech-shimmer'>
              Together
            </span>
          </h2>

          <p className='text-xl md:text-2xl text-secondary-300 max-w-3xl mx-auto leading-relaxed font-light'>
            Have a project in mind? I'd love to hear about it.{' '}
            <span className='font-medium text-primary-400'>Let's create something amazing together</span>.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-start'>
          {/* Contact Information */}
          <div className='animate-fade-in-left'>
            <h3 className='text-3xl font-bold text-neutral-900 mb-10'>Contact Information</h3>
            <div className='space-y-8'>
              <div className='group flex items-start p-6 bg-white rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 border border-neutral-200/50'>
                <div className='w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center mr-6 group-hover:bg-primary-200 transition-colors duration-300'>
                  <svg className='w-7 h-7 text-primary-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                    />
                  </svg>
                </div>
                <div>
                  <p className='font-semibold text-neutral-900 text-lg mb-1'>Email</p>
                  <p className='text-neutral-600'>{contactInfo.email}</p>
                </div>
              </div>

              <div className='group flex items-start p-6 bg-white rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 border border-neutral-200/50'>
                <div className='w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center mr-6 group-hover:bg-primary-200 transition-colors duration-300'>
                  <svg className='w-7 h-7 text-primary-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                    />
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
                  </svg>
                </div>
                <div>
                  <p className='font-semibold text-neutral-900 text-lg mb-1'>Location</p>
                  <p className='text-neutral-600'>{contactInfo.location}</p>
                </div>
              </div>

              <div className='group flex items-start p-6 bg-white rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 border border-neutral-200/50'>
                <div className='w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center mr-6 group-hover:bg-primary-200 transition-colors duration-300'>
                  <svg className='w-7 h-7 text-primary-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9'
                    />
                  </svg>
                </div>
                <div>
                  <p className='font-semibold text-neutral-900 text-lg mb-1'>Available</p>
                  <p className='text-neutral-600'>{contactInfo.availability}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className='animate-fade-in-right'>
            <form onSubmit={handleFormSubmit} className='space-y-6'>
              <div>
                <label htmlFor='name' className='block text-sm font-semibold text-neutral-700 mb-3'>
                  Full Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={values.name}
                  onChange={handleInputChange}
                  className='w-full px-4 py-4 border border-neutral-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white shadow-soft hover:shadow-medium'
                  placeholder='Your full name'
                  required
                />
              </div>

              <div>
                <label htmlFor='email' className='block text-sm font-semibold text-neutral-700 mb-3'>
                  Email Address
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={values.email}
                  onChange={handleInputChange}
                  className='w-full px-4 py-4 border border-neutral-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 bg-white shadow-soft hover:shadow-medium'
                  placeholder='your.email@example.com'
                  required
                />
              </div>

              <div>
                <label htmlFor='message' className='block text-sm font-semibold text-neutral-700 mb-3'>
                  Project Details
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={values.message}
                  onChange={handleInputChange}
                  rows={6}
                  className='w-full px-4 py-4 border border-neutral-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none bg-white shadow-soft hover:shadow-medium'
                  placeholder='Tell me about your project, timeline, and any specific requirements...'
                  required
                />
              </div>

              <button
                type='submit'
                className='group w-full px-8 py-4 bg-primary-600 text-white font-semibold rounded-2xl hover:bg-primary-700 transition-all duration-300 transform hover:scale-[1.02] shadow-medium hover:shadow-large hover:shadow-primary-500/25'>
                <span className='flex items-center justify-center'>
                  Send Message
                  <svg
                    className='w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8' />
                  </svg>
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
