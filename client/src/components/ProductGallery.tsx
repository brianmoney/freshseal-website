import { useState } from "react";
import { cn } from "@/lib/utils";

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [mainImage, setMainImage] = useState(images[0]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleThumbnailClick = (image: string, index: number) => {
    setMainImage(image);
    setActiveIndex(index);
  };

  return (
    <div className="product-gallery relative">
      <div className="main-image-container overflow-hidden rounded-xl border border-gray-200 mb-4">
        <img 
          src={mainImage} 
          alt={`${productName} Main Image`} 
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="thumbnails-container flex space-x-2 overflow-x-auto py-2">
        {images.map((image, index) => (
          <div 
            key={index}
            className={cn(
              "thumbnail cursor-pointer border-2 rounded-md overflow-hidden transition-all duration-300",
              activeIndex === index 
                ? "border-primary opacity-100" 
                : "border-transparent opacity-70 hover:opacity-90"
            )}
            onClick={() => handleThumbnailClick(image, index)}
          >
            <img 
              src={image} 
              alt={`${productName} Thumbnail ${index + 1}`}
              className="w-16 h-16 object-cover" 
            />
          </div>
        ))}
      </div>
    </div>
  );
}
