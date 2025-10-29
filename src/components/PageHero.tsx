import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface PageHeroProps {
  title: string;
  description: string;
  imageUrl?: string;
}

export const PageHero = ({
  title,
  description,
  imageUrl = "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1920&h=1080&fit=crop"
}: PageHeroProps) => {
  const { ref: heroRef, isVisible: isHeroVisible } = useScrollAnimation(0);

  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${imageUrl}')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      
      <div 
        ref={heroRef}
        className={`relative z-10 container mx-auto px-4 text-center transition-all duration-700 ${
          isHeroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
          {description}
        </p>
      </div>
    </section>
  );
};