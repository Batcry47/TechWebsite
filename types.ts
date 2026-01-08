export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  fullDescription: string;
  category: ProductCategory;
  images: string[];
  features: string[];
  specs: Record<string, string>;
  inBox: string[];
  isFeatured?: boolean;
  isDeal?: boolean;
}

export enum ProductCategory {
  ACCESSORIES = "Phone Accessories",
  AUDIO = "Audio Devices",
  CHARGING = "Charging Solutions",
  SMART = "Smart Devices",
  CABLES = "Cables & Adapters",
  PROTECTION = "Screen Protection",
  KIDS = "Kids Tech"
}

export interface Service {
  id: string;
  title: string;
  description: string;
  priceRange: string;
  iconName: string;
}

export type ViewState = 'HOME' | 'PRODUCT_DETAIL';