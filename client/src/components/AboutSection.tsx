import { Shield, ShoppingCart, Clock } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-6">About Our Products</h2>
        <p className="text-neutral-500 mb-8">
          We carefully select premium products that meet our high standards for quality, 
          performance, and value. Each item is thoroughly tested to ensure it delivers 
          an exceptional experience. As an affiliate partner with Amazon, we make it easy 
          for you to purchase products you love with the security and convenience of 
          Amazon's trusted platform.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-blue-50 rounded-lg">
            <Shield className="h-10 w-10 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Quality Guaranteed</h3>
            <p className="text-neutral-500">
              All products are selected for their exceptional quality and reliability.
            </p>
          </div>
          
          <div className="p-6 bg-green-50 rounded-lg">
            <ShoppingCart className="h-10 w-10 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Secure Shopping</h3>
            <p className="text-neutral-500">
              Purchase with confidence through Amazon's secure and trusted platform.
            </p>
          </div>
          
          <div className="p-6 bg-indigo-50 rounded-lg">
            <Clock className="h-10 w-10 text-indigo-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p className="text-neutral-500">
              Enjoy Amazon's quick and reliable shipping options on all purchases.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
