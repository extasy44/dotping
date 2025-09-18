import { usePortfolio } from '../hooks/usePortfolio';

/**
 * Example component demonstrating how to use the JSON portfolio data
 */
function PortfolioDataExample(): React.JSX.Element {
  const { data, loading, error, projects, navigationItems, logoInfo, contactInfo, skills } = usePortfolio();

  if (loading) {
    return (
      <div className='p-8 text-center'>
        <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto'></div>
        <p className='mt-4 text-gray-600'>Loading portfolio data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className='p-8 text-center'>
        <div className='text-red-500 text-lg font-semibold'>Error loading portfolio data</div>
        <p className='text-gray-600 mt-2'>{error}</p>
      </div>
    );
  }

  return (
    <div className='p-8 max-w-4xl mx-auto'>
      <h1 className='text-3xl font-bold text-gray-900 mb-8'>Portfolio Data from JSON</h1>

      {/* Logo Info */}
      {logoInfo && (
        <div className='mb-8 p-6 bg-gray-50 rounded-lg'>
          <h2 className='text-xl font-semibold mb-4'>Logo Information</h2>
          <div className='flex items-center space-x-4'>
            <img src={logoInfo.imageUrl} alt={logoInfo.alt} className='w-16 h-16 object-contain' />
            <div>
              <h3 className='font-semibold'>{logoInfo.title}</h3>
              <p className='text-gray-600'>{logoInfo.subtitle}</p>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Items */}
      <div className='mb-8 p-6 bg-gray-50 rounded-lg'>
        <h2 className='text-xl font-semibold mb-4'>Navigation Items</h2>
        <div className='flex space-x-4'>
          {navigationItems.map((item) => (
            <span key={item.id} className='px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm'>
              {item.label}
            </span>
          ))}
        </div>
      </div>

      {/* Contact Info */}
      {contactInfo && (
        <div className='mb-8 p-6 bg-gray-50 rounded-lg'>
          <h2 className='text-xl font-semibold mb-4'>Contact Information</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <strong>Email:</strong> {contactInfo.email}
            </div>
            <div>
              <strong>Phone:</strong> {contactInfo.phone}
            </div>
            <div>
              <strong>Location:</strong> {contactInfo.location}
            </div>
            <div>
              <strong>Availability:</strong> {contactInfo.availability}
            </div>
          </div>
        </div>
      )}

      {/* Skills */}
      <div className='mb-8 p-6 bg-gray-50 rounded-lg'>
        <h2 className='text-xl font-semibold mb-4'>Skills</h2>
        <div className='flex flex-wrap gap-2'>
          {skills.map((skill, index) => (
            <span key={index} className='px-3 py-1 bg-secondary-100 text-secondary-800 rounded-full text-sm'>
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div className='mb-8'>
        <h2 className='text-xl font-semibold mb-4'>Projects ({projects.length})</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {projects.slice(0, 6).map((project) => (
            <div key={project.id} className='bg-white rounded-lg shadow-md overflow-hidden'>
              {project.imageUrl && <img src={project.imageUrl} alt={project.title} className='w-full h-48 object-cover' />}
              <div className='p-4'>
                <h3 className='font-semibold text-lg mb-2'>{project.title}</h3>
                <p className='text-gray-600 text-sm mb-2'>{project.description}</p>
                <div className='flex flex-wrap gap-1'>
                  {project.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className='px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs'>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Raw Data Preview */}
      <details className='mt-8'>
        <summary className='cursor-pointer text-lg font-semibold mb-4'>Raw JSON Data Preview</summary>
        <pre className='bg-gray-100 p-4 rounded-lg overflow-auto text-sm'>{JSON.stringify(data, null, 2)}</pre>
      </details>
    </div>
  );
}

export default PortfolioDataExample;
