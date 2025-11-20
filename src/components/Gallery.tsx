import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { X } from "lucide-react";
import ourStoryImage from "@/assets/our-story.jpg";
import allImagesData from "@/data/gallery.json"

// Define the type for a project image
interface ProjectImage {
  url: string;
  title: string;
  category: "all" | "prestigious" | "site_progress";
}

// Name suggestion for 'Some Actual Site Photographs': Site Progress
const categories = [
  { key: "all", label: "All Projects" },
  { key: "prestigious", label: "Prestigious Projects" },
  { key: "site_progress", label: "On-Site Reality" },
];

const allImages: ProjectImage[] = allImagesData as ProjectImage[];

const Gallery = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<ProjectImage["category"]>("all");
  const [activeOverlay,setActiveOverlay] = useState<string | null>(null);

  // Filter the images based on the active category
  const filteredImages = allImages.filter((image) =>
    activeCategory === "all" ? true : image.category === activeCategory
  );

  // Animation variants for the images
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100, damping: 20 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } },
  };
  const isTouchDevice = () => 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  return (
    <div className="min-h-screen">
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={ourStoryImage}
            alt="Electrical Infrastructure"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/50 to-primary/80" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Gallery
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              One of the most reliable & eligible Electrical 'A' Grade License Holder MEP Contractors having ISO-9001:2015 Certified
            </p>
          </motion.div>
        </div>
      </section>
      
      <section id="gallery" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-4 block">
              Gallery
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Work in Action
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore our portfolio of completed projects showcasing excellence in electrical infrastructure development.
            </p>
          </motion.div>

          {/* Filtering Buttons */}
          <div className="flex justify-center flex-wrap gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.key}
                onClick={() => setActiveCategory(category.key as ProjectImage["category"])}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-300 ${
                  activeCategory === category.key
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.label}
              </motion.button>
            ))}
          </div>

          {/* Image Grid with AnimatePresence for Filtering Animation */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              { filteredImages.map((image) => {
                const isOverlayActive = activeOverlay === image.url;
                const handleImageClick = () => {
                  if (isTouchDevice()) {
                        if (isOverlayActive) {
                          setSelectedImage(image.url);
                            setActiveOverlay(null);
                            } else {
                            setActiveOverlay(image.url);
                        }
                        } else {
                        // Desktop/Non-touch: Always open lightbox on click
                        setSelectedImage(image.url);
                    }
                };
                return (
                  <motion.div
                    key={image.url}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    layout
                    className="group relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer shadow-medium hover:shadow-large transition-spring"
                    onClick={handleImageClick}
                    >
                      <img 
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent transition-smooth ${
                        isOverlayActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                          <div className="absolute bottom-0 left-0 right-0 p-6">
                            <h3 className="text-primary-foreground font-bold text-lg">
                              {image.title}
                            </h3>
                          </div>
                      </div>
                  </motion.div>

                );

              })}
            </AnimatePresence> 
          </motion.div>

          {/* Lightbox */}
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-primary/95 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button
                className="absolute top-4 right-4 w-12 h-12 rounded-full bg-accent flex items-center justify-center hover:scale-110 transition-spring shadow-glow"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-6 h-6 text-accent-foreground" />
              </button>
              <motion.img
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                src={selectedImage}
                alt="Gallery image"
                className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-large"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Gallery;