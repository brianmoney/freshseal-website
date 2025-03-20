import ProductGallery from "./ProductGallery";
import { ShoppingCart, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { type Product } from "@/data/products";

interface ProductDetailsProps {
  product: Product;
  id: string;
  bgColor: string;
  reversed?: boolean;
}

export default function ProductDetails({ 
  product, 
  id, 
  bgColor, 
  reversed = false 
}: ProductDetailsProps) {
  const {
    name,
    images,
    rating,
    reviewCount,
    description,
    features,
    price,
    originalPrice,
    amazonLink
  } = product;

  return (
    <section id={id} className={`py-16 ${bgColor}`}>
      <div className="container mx-auto px-4">
        <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8`}>
          {/* Product Gallery */}
          <div className="lg:w-1/2">
            <ProductGallery images={images} productName={name} />
          </div>

          {/* Product Info */}
          <div className="lg:w-1/2">
            <span className="text-primary font-medium">Premium Selection</span>
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mt-2 mb-4">
              {name}
            </h2>
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-neutral-500">{rating} ({reviewCount} reviews)</span>
            </div>
            <p className="text-neutral-500 mb-6">{description}</p>
            
            {/* Features */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3">Key Features</h3>
              <ul className="space-y-2">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Price */}
            <div className="mb-6">
              <span className="text-3xl font-bold text-neutral-800">${price}</span>
              {originalPrice && (
                <span className="text-lg text-neutral-500 line-through ml-2">${originalPrice}</span>
              )}
            </div>
            
            {/* CTA */}
            <Button 
              asChild
              size="lg"
              className="w-full md:w-auto bg-green-600 hover:bg-green-700"
            >
              <a 
                href={amazonLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Buy on Amazon
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
