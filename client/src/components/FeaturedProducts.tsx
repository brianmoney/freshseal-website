import { ChevronRight } from "lucide-react";
import { type Product } from "@/data/products";

interface FeaturedProductsProps {
  products: Product[];
}

export default function FeaturedProducts({ products }: FeaturedProductsProps) {
  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">FreshSeal Products</h2>
        <p className="text-neutral-500 max-w-2xl mx-auto mb-10">
          Our innovative food storage solutions help you preserve freshness, reduce waste, and save money.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {products.map((product, index) => (
            <a key={index} href={`#product${index + 1}`} className="group">
              <div className="bg-white rounded-xl shadow-md overflow-hidden transition transform hover:-translate-y-1 hover:shadow-lg">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={product.images[0]} 
                    alt={`${product.name} Featured Image`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition">
                    {product.name}
                  </h3>
                  <p className="text-neutral-500 mb-4">{product.shortDescription}</p>
                  <span className="text-primary font-medium inline-flex items-center">
                    View Details
                    <ChevronRight className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
