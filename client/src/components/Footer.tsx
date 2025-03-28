export default function Footer() {
  return (
    <footer className="bg-neutral-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/images/freshseal-logo.png" 
                alt="FreshSeal Logo" 
                className="h-10 w-auto" 
              />
              <h2 className="text-xl font-semibold">FreshSeal</h2>
            </div>
            <p className="text-neutral-300 max-w-md">
              SEAL. STORE. ENJOY. 
            </p>
            <p className="text-neutral-300 max-w-md mt-2">
              Our vacuum-seal storage solutions help preserve food freshness for longer
              while reducing waste and saving you money.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Products</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#product1" className="text-neutral-300 hover:text-white transition">
                    Glass Containers
                  </a>
                </li>
                <li>
                  <a href="#product2" className="text-neutral-300 hover:text-white transition">
                    Storage Containers
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-neutral-300 hover:text-white transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-neutral-300 hover:text-white transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-neutral-300 hover:text-white transition">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-neutral-300 hover:text-white transition">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-neutral-300 hover:text-white transition">
                    Affiliate Disclosure
                  </a>
                </li>
              </ul>
            </div>

            <div className="manuals">
              <h3 className="text-lg font-semibold mb-2">Product Manuals</h3>
              <ul>
                <li>
                  <a href="/pages/fs0101-manual" className="text-neutral-300 hover:text-emerald-400 transition">
                    FS0101 Manual
                  </a>
                </li>
                <li>
                  <a href="/pages/fs0102-manual" className="text-neutral-300 hover:text-emerald-400 transition">
                    FS0102 Manual
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-neutral-700 pt-6 mt-6 text-center text-neutral-400 text-sm">
          <p>
            © {new Date().getFullYear()} FreshSeal. All rights reserved. 
            This site contains affiliate links to Amazon. We may earn a commission 
            for purchases made through these links.
          </p>
        </div>
      </div>
    </footer>
  );
}
