import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-green-50 to-teal-50 py-12 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-neutral-800 mb-4">
          Keep Food <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-500">Fresher</span> for Longer
        </h1>
        <p className="text-lg text-neutral-500 max-w-2xl mx-auto mb-8">
          Discover FreshSeal's premium food storage solutions, designed to preserve freshness and reduce waste. Available for purchase on Amazon.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="inline-flex items-center bg-green-600 hover:bg-green-700"
          >
            <a href="#product1">
              View Storage Containers
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
              View Vacuum Sealer
              <ChevronRight className="h-5 w-5 ml-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
