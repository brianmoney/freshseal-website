import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function FS0101Manual() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 bg-white">
        <h1 className="text-3xl font-bold mb-6">FS0101 Product Manual</h1>
        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold mt-6">Using Your Hand-Pumped Vacuum-Sealed Food Storage Containers</h2>
          <ol className="list-decimal list-inside mt-4 space-y-2">
            <li>Center the pump on top of the valve located on the container’s lid. Ensure it is flat and fully covers the valve.</li>
            <li>Gently raise and lower the pump handle to evacuate the air. Continue until you feel resistance.</li>
            <li>Check the seal by lightly lifting the lid to ensure it’s firmly in place. If loose, repeat the process.</li>
            <li>If the seal remains loose, inspect the valve for cleanliness and proper positioning.</li>
            <li>To open, release the vacuum by pressing the valve until you hear the air escape, then lift the lid.</li>
            <li>For vacuum bags, seal the zipper with the provided white clips. If liquid is present, elevate the bag valve before pumping.</li>
            <li>If liquid enters the pump, rinse and air dry before reuse.</li>
          </ol>

          <h2 className="text-2xl font-semibold mt-6">Care and Use Instructions</h2>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>Handle with care; glass can break if dropped.</li>
            <li>Do not use containers in the oven, on the stovetop, or over an open flame.</li>
            <li>The glass container is dishwasher safe; hand wash the lid. If dishwashing, remove the food dial and wash it separately.</li>
            <li>Allow food to cool before sealing to maintain a strong vacuum.</li>
            <li>For foods with high liquid content, ensure the liquid stays below the valve before using the pump to avoid spills.</li>
            <li>Store sealed containers in the refrigerator or freezer for freshness.</li>
            <li>Use the food dial to track freshness.</li>
            <li>Store clean, dry containers, bags, and the pump in a dry location.</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}
