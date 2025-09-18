import { useState, useEffect } from 'react';
import { PortfolioData, Project, NavigationItem, LogoInfo, ContactInfo } from '../services/portfolio-service';
import { fetchPortfolioData } from '../services/portfolio-service';

interface UsePortfolioReturn {
  data: PortfolioData | null;
  loading: boolean;
  error: string | null;
  projects: Project[];
  navigationItems: NavigationItem[];
  logoInfo: LogoInfo | null;
  contactInfo: ContactInfo | null;
  skills: string[];
}

/**
 * Custom hook for managing portfolio data
 */
export function usePortfolio(): UsePortfolioReturn {
  const [data, setData] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPortfolioData = async (): Promise<void> => {
      try {
        setLoading(true);
        setError(null);
        const portfolioData = await fetchPortfolioData();
        setData(portfolioData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load portfolio data');
        console.error('Error loading portfolio data:', err);
      } finally {
        setLoading(false);
      }
    };

    loadPortfolioData();
  }, []);

  return {
    data,
    loading,
    error,
    projects: data?.projects || [],
    navigationItems: data?.navigationItems || [],
    logoInfo: data?.logoInfo || null,
    contactInfo: data?.contactInfo || null,
    skills: data?.skills || [],
  };
}

export default usePortfolio;
