import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function FS0101Manual() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">FS0101 Product Manual</h1>
        <div className="prose max-w-none">
          {/* Add manual content here */}
          <p>Manual content for FS0101 product...</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
