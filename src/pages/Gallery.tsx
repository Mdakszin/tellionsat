import { useState } from "react";
import classroomImg from "@/assets/gallery-classroom.jpg";
import playgroundImg from "@/assets/gallery-playground.jpg";
import artroomImg from "@/assets/gallery-artroom.jpg";
import outdoorImg from "@/assets/gallery-outdoor.jpg";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = [
    {
      src: classroomImg,
      title: "Bright Classroom",
      description: "Modern, colorful learning spaces designed for young minds",
    },
    {
      src: playgroundImg,
      title: "Outdoor Playground",
      description: "Safe and fun outdoor play equipment for active learning",
    },
    {
      src: artroomImg,
      title: "Creative Art Activities",
      description: "Hands-on creative expression and artistic exploration",
    },
    {
      src: outdoorImg,
      title: "Outdoor Learning",
      description: "Nature exploration and garden learning spaces",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-warm py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 animate-fade-in">
            Our Facilities
          </h1>
          <p className="text-xl text-center text-foreground/80 max-w-2xl mx-auto">
            Take a virtual tour of our beautiful daycare spaces designed with love and care
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-soft hover:shadow-elegant transition-all duration-300 cursor-pointer animate-fade-in hover-scale"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedImage(item.src)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-white/90">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-cool">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Want to See More?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-foreground/80">
            Schedule a visit to experience our wonderful facilities in person and meet our caring team
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-all shadow-soft hover:shadow-elegant hover-scale"
          >
            Schedule a Tour
          </a>
        </div>
      </section>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 z-10 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition-colors"
          >
            <X size={24} />
          </button>
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Gallery image"
              className="w-full h-auto"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;
