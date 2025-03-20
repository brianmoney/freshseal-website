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
    name: "FreshSeal Food Storage Containers",
    shortDescription: "Premium airtight food storage container set with locking lids",
    description: "Keep your food fresher for longer with our premium FreshSeal Food Storage Containers. This 24-piece set (12 containers with 12 matching lids) features airtight, leakproof locking lids with silicone seals that maintain freshness, prevent spills, and keep food organized. Perfect for meal prep, leftovers, and pantry organization.",
    images: [
      "https://m.media-amazon.com/images/I/71+8uTMDRFL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71vHH5clGuL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71JPbPZmjrL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71eLQbXAyjL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81nD55d5M4L._AC_SL1500_.jpg"
    ],
    features: [
      "Airtight & Leakproof Design",
      "BPA-Free, Food-Safe Materials",
      "Stackable & Space-Saving",
      "Microwave, Freezer & Dishwasher Safe",
      "24-Piece Complete Set (12 containers + 12 lids)"
    ],
    price: "29.99",
    originalPrice: "39.99",
    rating: "4.8",
    reviewCount: 2547,
    amazonLink: "https://www.amazon.com/dp/B08CZGFDWL"
  },
  {
    name: "FreshSeal Vacuum Sealer Machine",
    shortDescription: "Professional-grade food vacuum sealer with multi-function options",
    description: "Preserve food up to 5x longer with the FreshSeal Vacuum Sealer Machine. This professional-grade sealer features multiple sealing modes for dry and moist foods, gentle sealing for delicate items, and a powerful vacuum system that removes air completely. Includes 10 vacuum bags to get you started immediately.",
    images: [
      "https://m.media-amazon.com/images/I/71DahWAkQ6L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71oyY0TrGVL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71O71farA+L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71q-PMOU87L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71vf8KKV99L._AC_SL1500_.jpg"
    ],
    features: [
      "Multiple Sealing Modes (Dry, Moist, Gentle)",
      "Easy One-Touch Operation",
      "Compact Design with Built-in Bag Cutter",
      "Compatible with Any Vacuum Sealer Bags",
      "Includes 10 Vacuum Bags (5 Quart & 5 Gallon Size)"
    ],
    price: "79.99",
    originalPrice: "99.99",
    rating: "4.7",
    reviewCount: 1823,
    amazonLink: "https://www.amazon.com/dp/B07VFFTDNC"
  }
];
