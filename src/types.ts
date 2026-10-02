export interface PropertyItem {
  id: string;
  title: string;
  category: string;
  location: string;
  status: string;
  image: string;
  description: string;
  features: string[];
  dimensions: string;
  orientation: string;
}

export interface ExpertiseItem {
  number: string;
  title: string;
  tagline: string;
  description: string;
  details: string[];
}
