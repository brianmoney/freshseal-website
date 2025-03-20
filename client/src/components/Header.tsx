import { useState } from "react";
import { Link } from "wouter";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img 
            src="/images/freshseal-logo.png" 
            alt="FreshSeal Logo" 
            className="h-12 w-auto" 
          />
          <h1 className="text-xl font-semibold text-neutral-800">FreshSeal</h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#product1" className="text-neutral-500 hover:text-primary transition">
            Product 1
          </a>
          <a href="#product2" className="text-neutral-500 hover:text-primary transition">
            Product 2
          </a>
          <a href="#about" className="text-neutral-500 hover:text-primary transition">
            About
          </a>
        </nav>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 py-2 bg-white border-t border-gray-100">
          <a
            href="#product1"
            className="block py-2 text-neutral-500 hover:text-primary"
            onClick={() => setMobileMenuOpen(false)}
          >
            Product 1
          </a>
          <a
            href="#product2"
            className="block py-2 text-neutral-500 hover:text-primary"
            onClick={() => setMobileMenuOpen(false)}
          >
            Product 2
          </a>
          <a
            href="#about"
            className="block py-2 text-neutral-500 hover:text-primary"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </a>
        </div>
      )}
    </header>
  );
}
