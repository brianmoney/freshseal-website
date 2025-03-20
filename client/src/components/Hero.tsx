import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-12 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
          Premium Products for Your Needs
        </h1>
        <p className="text-lg text-neutral-500 max-w-2xl mx-auto mb-8">
          Discover our carefully selected line of high-quality products, available for purchase on Amazon.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="inline-flex items-center"
          >
            <a href="#product1">
              View Product 1
              <ChevronRight className="h-5 w-5 ml-1" />
            </a>
          </Button>
          <Button 
            asChild
            size="lg"
            variant="outline"
            className="inline-flex items-center"
          >
            <a href="#product2">
              View Product 2
              <ChevronRight className="h-5 w-5 ml-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
