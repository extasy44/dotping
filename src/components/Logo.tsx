import { logoInfo } from '../data/portfolio-data';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export function Logo({ className = '', size = 'md', showText = true }: LogoProps): React.JSX.Element {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-12 w-12',
    lg: 'h-16 w-16',
    xl: 'h-20 w-20',
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img src='/assets/JB.png' alt={logoInfo.alt} className={`${sizeClasses[size]} object-contain`} />
      {showText && <div className={`font-semibold text-gray-800 dark:text-gray-200 ${textSizeClasses[size]}`}>Creative Designer</div>}
    </div>
  );
}

export default Logo;
