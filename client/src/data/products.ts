export interface Product {
  name: string;
  shortDescription: string;
  description: string;
  images: string[];
  features: string[];
  price: string;
  originalPrice?: string;
  rating: string;
  reviewCount: number;
  amazonLink: string;
}

export const products: Product[] = [
  {
    name: "Smart Wireless Earbuds Pro",
    shortDescription: "Premium wireless earbuds with active noise cancellation",
    description: "Experience crystal clear sound with our latest premium wireless earbuds, featuring active noise cancellation, water resistance, and up to 30 hours of battery life with the charging case.",
    images: [
      "https://m.media-amazon.com/images/I/713qgNbv1kL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71HHpaOOzrL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81CDDk2vJLL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61pHdyKkViL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61WJ49RH7YL._AC_SL1500_.jpg"
    ],
    features: [
      "Active Noise Cancellation",
      "IPX7 Water Resistance",
      "30 Hours Total Battery Life",
      "Touch Controls & Voice Assistant Support"
    ],
    price: "129.99",
    originalPrice: "149.99",
    rating: "4.9",
    reviewCount: 142,
    amazonLink: "https://www.amazon.com"
  },
  {
    name: "Ultra HD Smart Camera",
    shortDescription: "Professional-grade camera with 4K video recording",
    description: "Capture life's moments with stunning clarity using our Ultra HD Smart Camera featuring 4K video recording, advanced stabilization, Wi-Fi connectivity, and a versatile lens system for professional-quality results.",
    images: [
      "https://m.media-amazon.com/images/I/81zzW6ZJ+GL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81X9zd0LxEL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81NgUytUGwL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61GzAPHjxCL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61+Xsa8rYDL._AC_SL1500_.jpg"
    ],
    features: [
      "4K Ultra HD Video Recording",
      "Advanced Image Stabilization",
      "Wi-Fi & Bluetooth Connectivity",
      "3\" Touchscreen Display"
    ],
    price: "349.99",
    originalPrice: "399.99",
    rating: "4.8",
    reviewCount: 98,
    amazonLink: "https://www.amazon.com"
  }
];
