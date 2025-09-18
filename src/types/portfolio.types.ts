// TypeScript type definitions for portfolio data
export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  images: string[];
  category: string | string[];
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

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  availability: string;
}

export interface FormData {
  name: string;
  email: string;
  message: string;
}
