/**
 * Portfolio data service for fetching JSON data
 */

export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  images: string[];
  category: string;
  year: string;
  tags: string[];
  client: string;
  role: string;
  duration: string;
  tools: string[];
  challenges: string;
  solutions: string;
  results: string;
}

export interface NavigationItem {
  id: string;
  label: string;
}

export interface LogoInfo {
  imageUrl: string;
  alt: string;
  title: string;
  subtitle: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  availability: string;
}

export interface PortfolioData {
  logoInfo: LogoInfo;
  projects: Project[];
  navigationItems: NavigationItem[];
  skills: string[];
  contactInfo: ContactInfo;
}

/**
 * Fetches portfolio data from JSON file
 */
export async function fetchPortfolioData(): Promise<PortfolioData> {
  try {
    const response = await fetch('/api/portfolio.json');
    if (!response.ok) {
      throw new Error(`Failed to fetch portfolio data: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching portfolio data:', error);
    throw error;
  }
}

/**
 * Gets a project by slug
 */
export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  const data = await fetchPortfolioData();
  return data.projects.find((project) => project.slug === slug);
}

/**
 * Gets related projects
 */
export async function getRelatedProjects(currentProjectId: number, limit = 3): Promise<Project[]> {
  const data = await fetchPortfolioData();
  return data.projects.filter((project) => project.id !== currentProjectId).slice(0, limit);
}

/**
 * Gets all projects
 */
export async function getAllProjects(): Promise<Project[]> {
  const data = await fetchPortfolioData();
  return data.projects;
}

/**
 * Gets navigation items
 */
export async function getNavigationItems(): Promise<NavigationItem[]> {
  const data = await fetchPortfolioData();
  return data.navigationItems;
}

/**
 * Gets logo information
 */
export async function getLogoInfo(): Promise<LogoInfo> {
  const data = await fetchPortfolioData();
  return data.logoInfo;
}

/**
 * Gets contact information
 */
export async function getContactInfo(): Promise<ContactInfo> {
  const data = await fetchPortfolioData();
  return data.contactInfo;
}

/**
 * Gets skills list
 */
export async function getSkills(): Promise<string[]> {
  const data = await fetchPortfolioData();
  return data.skills;
}

export default {
  fetchPortfolioData,
  getProjectBySlug,
  getRelatedProjects,
  getAllProjects,
  getNavigationItems,
  getLogoInfo,
  getContactInfo,
  getSkills,
};
