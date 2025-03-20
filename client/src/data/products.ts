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
    name: "Glass Vacuum Sealable Container Set for Food Storage",
    shortDescription: "9 Pieces, 6 Sizes, with Hand Vacuum Pump and 10 Vacuum Sealable Bags",
    description: "Keep your food fresher for longer with FreshSeal Glass Vacuum Sealable Container Set. This 9-piece set features 6 different sizes of premium glass containers with vacuum-sealable lids, a hand vacuum pump, and 10 vacuum sealable bags. Perfect for meal prep, leftovers, and extending the shelf life of your food.",
    images: [
      "https://m.media-amazon.com/images/I/713qgNbv1kL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71HHpaOOzrL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81CDDk2vJLL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61pHdyKkViL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61WJ49RH7YL._AC_SL1500_.jpg"
    ],
    features: [
      "9-Piece Glass Container Set in 6 Different Sizes",
      "Vacuum-Sealed Technology for Extended Freshness",
      "BPA-Free, Food-Safe Materials",
      "Includes Hand Vacuum Pump & 10 Vacuum Bags",
      "Microwave, Freezer & Dishwasher Safe Glass Containers"
    ],
    price: "39.99",
    originalPrice: "49.99",
    rating: "4.8",
    reviewCount: 527,
    amazonLink: "https://www.amazon.com/dp/B0DPNCSC84"
  },
  {
    name: "Vacuum Food Storage Container Set",
    shortDescription: "23 Pieces, 6 Stackable Containers with Lids, Hand Pump and 10 Vacuum Sealable Bags",
    description: "Preserve food longer with the FreshSeal Vacuum Food Storage Container Set. This comprehensive 23-piece set includes 6 stackable containers with vacuum-seal lids, a convenient hand pump, and 10 vacuum sealable bags. The stackable design saves space while the vacuum technology keeps food fresh up to 5 times longer than conventional storage.",
    images: [
      "https://m.media-amazon.com/images/I/81zzW6ZJ+GL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81X9zd0LxEL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81NgUytUGwL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61GzAPHjxCL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61+Xsa8rYDL._AC_SL1500_.jpg"
    ],
    features: [
      "23-Piece Complete Set with 6 Stackable Containers",
      "Space-Saving Design with Vacuum-Seal Technology",
      "BPA-Free, Food-Safe Durable Materials",
      "Includes Hand Vacuum Pump & 10 Vacuum Bags",
      "Modular System for Organized Food Storage"
    ],
    price: "34.99",
    originalPrice: "44.99",
    rating: "4.7",
    reviewCount: 683,
    amazonLink: "https://www.amazon.com/dp/B0DPJC1VJP"
  }
];
