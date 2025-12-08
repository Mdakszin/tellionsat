import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryCarouselProps {
    images: {
        src: string;
        title: string;
        description: string;
    }[];
}

export const GalleryCarousel = ({ images }: GalleryCarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Auto-advance
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length, isAutoPlaying]);

    const nextSlide = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="relative w-full h-[600px] overflow-hidden rounded-xl shadow-xl group">
            {/* Images with Fade Transition */}
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                >
                    <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-full object-cover"
                    />
                    {/* Caption Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent">
                        <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform transition-transform duration-500">
                            <h3 className="text-3xl font-heading mb-2">{image.title}</h3>
                            <p className="text-lg font-sans opacity-90">{image.description}</p>
                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation Buttons */}
            <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white hover:bg-black/20 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={prevSlide}
            >
                <ChevronLeft size={48} />
            </Button>

            <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white hover:bg-black/20 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={nextSlide}
            >
                <ChevronRight size={48} />
            </Button>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setIsAutoPlaying(false);
                            setCurrentIndex(index);
                        }}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                ? "bg-white w-8"
                                : "bg-white/50 hover:bg-white/80"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};
