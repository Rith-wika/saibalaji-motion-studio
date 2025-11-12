import React from 'react';

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: 'Sarah Chen',
    title: 'CTO, TechInnovate',
    photo: 'https://i.pravatar.cc/150?img=1', // Placeholder image
    quote: "Game-changer! Their platform is fast, reliable, and incredibly intuitive.",
    rating: 5,
    detailedFeedback: "We've seen a 40% increase in efficiency since implementing their solution. The support team is also top-notch, always responding within minutes. A truly indispensable partner for our growth.",
  },
  {
    id: 2,
    name: 'Mark Davis',
    title: 'Marketing Director, GlobalReach',
    photo: 'https://i.pravatar.cc/150?img=5', // Placeholder image
    quote: "Exceptional design and seamless user experience. Highly recommend their services.",
    rating: 4.8,
    detailedFeedback: "The rebranding project they managed was delivered on time and exceeded our expectations. Our customers immediately noticed the improved, modern look and feel. They are truly masters of modern UI/UX.",
  },
  {
    id: 3,
    name: 'Aisha Khan',
    title: 'Founder, EcoStart',
    photo: 'https://i.pravatar.cc/150?img=3', // Placeholder image
    quote: "The personalized attention to detail made all the difference. Fantastic results!",
    rating: 5,
    detailedFeedback: "As a startup, we needed a flexible partner, and they delivered. They took the time to understand our mission and built a bespoke solution that perfectly aligns with our eco-friendly values. Five stars across the board!",
  },
];

// Helper component for star rating
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex text-accent-foreground">
      {/* Full Stars */}
      {[...Array(fullStars)].map((_, i) => (
        <span key={`full-${i}`} className="text-xl">★</span>
      ))}
      {/* Half Star */}
      {hasHalfStar && <span className="text-xl">½</span>}
      {/* Empty Stars */}
      {[...Array(emptyStars)].map((_, i) => (
        <span key={`empty-${i}`} className="text-xl opacity-30">★</span>
      ))}
    </div>
  );
};

// Testimonial Card Component with 3D Flip
const FlipCard = ({ testimonial, index }) => {
  // Uses a custom utility class defined below to enable the flip effect
  // 'group' is used to target the inner elements on hover of the outer container
  return (
    <div 
      className={`
        perspective-[1000px] 
        group 
        w-full 
        max-w-md 
        h-[320px] 
        rounded-[var(--radius)] 
        shadow-medium 
        hover:shadow-large 
        hover:scale-[1.03] 
        transition-spring
        // Fade-up entry animation with staggered delay
        animate-fade-up 
        opacity-0 
        [animation-fill-mode:forwards]
        [animation-delay:${index * 0.1}s]
      `}
    >
      {/* Inner container handles the 3D rotation */}
      <div className="
        relative 
        w-full 
        h-full 
        transition-transform 
        duration-700 
        ease-in-out 
        [transform-style:preserve-3d] 
        group-hover:rotate-y-180 
        group-focus:rotate-y-180 // Added for mobile tap focus
        
      ">
        
        {/* FRONT SIDE */}
        <div className="
          absolute 
          inset-0 
          p-6 
          flex 
          flex-col 
          justify-between 
          bg-card 
          text-card-foreground 
          rounded-[var(--radius)] 
          [backface-visibility:hidden] 
          [transform:rotateY(0deg)] // Ensure it starts at 0
        ">
          <blockquote className="text-2xl font-semibold italic text-primary">
            “{testimonial.quote}”
          </blockquote>
          
          <div className="flex items-center space-x-4 pt-4 border-t border-border mt-4">
            <div className="w-16 h-16 rounded-full overflow-hidden shadow-soft">
              <img 
                src={testimonial.photo} 
                alt={testimonial.name} 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <p className="font-bold text-lg text-foreground">{testimonial.name}</p>
              <p className="text-sm text-muted-foreground">{testimonial.title}</p>
            </div>
          </div>
        </div>

        {/* BACK SIDE */}
        <div className="
          absolute 
          inset-0 
          p-6 
          flex 
          flex-col 
          justify-between 
          bg-primary 
          text-primary-foreground 
          rounded-[var(--radius)] 
          [backface-visibility:hidden] 
          [transform:rotateY(180deg)] // Initial position: flipped
        ">
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center mb-4">
                <StarRating rating={testimonial.rating} />
                <span className="text-4xl font-extrabold">{testimonial.rating} / 5</span>
            </div>
            <p className="text-base leading-relaxed grow">
              {testimonial.detailedFeedback}
            </p>
            <p className="pt-4 text-sm opacity-80 border-t border-primary-foreground/30">
                — {testimonial.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Testimonial Section Component
const TestimonialSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title and Subtitle */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight">
            What Our Clients Say
          </h2>
          <p className="mt-3 text-xl text-muted-foreground max-w-2xl mx-auto">
            Real feedback from real professionals. Hover or tap to see their full reviews.
          </p>
        </div>

        {/* Testimonials Grid (Responsive Layout) */}
        <div className="
          grid 
          gap-8 
          md:grid-cols-2 
          lg:grid-cols-3
          justify-items-center // Center cards on smaller screens
        ">
          {testimonials.map((testimonial, index) => (
            <FlipCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;