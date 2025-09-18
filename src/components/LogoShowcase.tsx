import Logo from './Logo';

/**
 * Logo showcase component demonstrating different sizes and configurations
 */
function LogoShowcase(): React.JSX.Element {
  return (
    <div className='p-8 bg-gray-100 dark:bg-gray-900 rounded-lg'>
      <h2 className='text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200'>Logo Variations</h2>

      <div className='space-y-6'>
        {/* Small Logo */}
        <div className='flex items-center gap-4'>
          <span className='text-sm font-medium text-gray-600 dark:text-gray-400 w-20'>Small:</span>
          <Logo size='sm' showText={true} />
        </div>

        {/* Medium Logo */}
        <div className='flex items-center gap-4'>
          <span className='text-sm font-medium text-gray-600 dark:text-gray-400 w-20'>Medium:</span>
          <Logo size='md' showText={true} />
        </div>

        {/* Large Logo */}
        <div className='flex items-center gap-4'>
          <span className='text-sm font-medium text-gray-600 dark:text-gray-400 w-20'>Large:</span>
          <Logo size='lg' showText={true} />
        </div>

        {/* Extra Large Logo */}
        <div className='flex items-center gap-4'>
          <span className='text-sm font-medium text-gray-600 dark:text-gray-400 w-20'>XL:</span>
          <Logo size='xl' showText={true} />
        </div>

        {/* Logo Only */}
        <div className='flex items-center gap-4'>
          <span className='text-sm font-medium text-gray-600 dark:text-gray-400 w-20'>Icon Only:</span>
          <Logo size='md' showText={false} />
        </div>
      </div>
    </div>
  );
}

export default LogoShowcase;
