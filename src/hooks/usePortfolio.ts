import { useState, useEffect } from 'react';
import { debounce } from '../utils/helpers';

/**
 * Custom hook for managing active section based on scroll position
 */
export function useActiveSection(sections: string[] = ['hero', 'projects', 'about', 'contact']): string {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const handleScroll = debounce(() => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    }, 100);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return activeSection;
}

/**
 * Custom hook for managing scroll state
 */
export function useScrolling(): boolean {
  const [isScrolling, setIsScrolling] = useState<boolean>(false);

  const handleScrollStart = (): void => setIsScrolling(true);
  const handleScrollEnd = debounce((): void => setIsScrolling(false), 150);

  useEffect(() => {
    window.addEventListener('scroll', handleScrollStart);
    window.addEventListener('scroll', handleScrollEnd);

    return () => {
      window.removeEventListener('scroll', handleScrollStart);
      window.removeEventListener('scroll', handleScrollEnd);
    };
  }, [handleScrollEnd]);

  return isScrolling;
}

interface FormValues {
  [key: string]: string;
}

interface FormErrors {
  [key: string]: string;
}

interface FormHandlers {
  values: FormValues;
  errors: FormErrors;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (onSubmit: (values: FormValues) => void) => (e: React.FormEvent) => void;
  reset: () => void;
  setErrors: React.Dispatch<React.SetStateAction<FormErrors>>;
}

/**
 * Custom hook for managing form state
 */
export function useForm(initialValues: FormValues = {}): FormHandlers {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit =
    (onSubmit: (values: FormValues) => void) =>
    (e: React.FormEvent): void => {
      e.preventDefault();
      onSubmit(values);
    };

  const reset = (): void => {
    setValues(initialValues);
    setErrors({});
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    reset,
    setErrors,
  };
}
