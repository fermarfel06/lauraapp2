export interface NavLinkItem {
  name: string;
  path: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  icon?: React.ReactNode; // For services overview on home page
  image?: string; // For detailed service page
  ctaText: string;
  ctaLink: string; // Could be a path or an anchor
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role?: string; // e.g., "Client for 2 years"
}

export interface ProgressEntry {
  id: string;
  beforeImage: string;
  afterImage: string;
  clientName?: string; // e.g., "Alex R." or "Client ID #123"
  summary: string; // e.g., "Achieved 20lb weight loss..."
}

export interface CarouselSlide {
  id: string;
  image: string;
  headline: string;
  ctaText: string;
  ctaLink: string;
}
