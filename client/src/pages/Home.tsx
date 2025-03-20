import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductDetails from "@/components/ProductDetails";
import AboutSection from "@/components/AboutSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";
import { products } from "@/data/products";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <ProductDetails product={products[0]} id="product1" bgColor="bg-white" />
        <ProductDetails 
          product={products[1]} 
          id="product2" 
          bgColor="bg-emerald-50" 
          reversed={true} 
        />
        <AboutSection />
        <FeaturedProducts products={products} />
      </main>
      <Footer />
    </div>
  );
}
