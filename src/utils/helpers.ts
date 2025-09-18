/* eslint-disable @typescript-eslint/no-explicit-any */
// Utility functions for the portfolio application

// Re-export S3 utilities
export * from './s3-utils';

/**
 * Smoothly scrolls to a section by ID
 */
export function scrollToSection(sectionId: string, offset: number = 0): void {
  const element = document.getElementById(sectionId);

  if (element) {
    const elementPosition = element.offsetTop - offset;
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth',
    });
  } else {
    console.error('Element not found with ID:', sectionId);
  }
}

/**
 * Debounce function to limit the rate of function execution
 */
export function debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout>;
  return function executedFunction(...args: Parameters<T>): void {
    const later = (): void => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle function to limit the rate of function execution
 */
export function throttle<T extends (...args: any[]) => any>(func: T, limit: number): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return function executedFunction(...args: Parameters<T>): void {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Formats a year string for display
 */
export function formatYear(year: string): string {
  return year || 'Present';
}

/**
 * Generates a unique ID for components
 */
export function generateId(): string {
  return Math.random().toString(36).substr(2, 9);
}
