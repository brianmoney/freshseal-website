import { Leaf, ShoppingCart, HeartHandshake } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-6">About FreshSeal</h2>
        <p className="text-neutral-500 mb-8">
          At FreshSeal, we're passionate about helping you reduce food waste and save money 
          by keeping your food fresher for longer. Our premium food storage solutions are 
          designed with sustainability and functionality in mind. Each product is thoroughly 
          tested to ensure it delivers exceptional performance in preserving food freshness 
          and extending shelf life. As an affiliate partner with Amazon, we make it easy 
          for you to purchase our products with the security and convenience of 
          Amazon's trusted platform.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-green-50 rounded-lg">
            <Leaf className="h-10 w-10 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
            <p className="text-neutral-500">
              Our products help reduce food waste and use BPA-free, durable materials designed to last.
            </p>
          </div>
          
          <div className="p-6 bg-emerald-50 rounded-lg">
            <ShoppingCart className="h-10 w-10 text-emerald-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Secure Shopping</h3>
            <p className="text-neutral-500">
              Purchase with confidence through Amazon's secure and trusted platform.
            </p>
          </div>
          
          <div className="p-6 bg-teal-50 rounded-lg">
            <HeartHandshake className="h-10 w-10 text-teal-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Satisfaction Guaranteed</h3>
            <p className="text-neutral-500">
              We stand behind our products with excellent customer service and quality assurance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
