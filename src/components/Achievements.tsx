// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import CountUp from "react-countup";
// import { Trophy, Award, Star, Target } from "lucide-react";
// import achievementsImage from "@/assets/achievements.jpg";

// const Achievements = () => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const achievements = [
//     {
//       icon: Trophy,
//       value: 1200,
//       suffix: "+",
//       label: "Projects Completed",
//       color: "text-accent",
//     },
//     {
//       icon: Award,
//       value: 25,
//       suffix: "+",
//       label: "Years of Excellence",
//       color: "text-accent",
//     },
//     {
//       icon: Star,
//       value: 15,
//       suffix: "+",
//       label: "Industry Awards",
//       color: "text-accent",
//     },
//     {
//       icon: Target,
//       value: 98,
//       suffix: "%",
//       label: "Client Satisfaction",
//       color: "text-accent",
//     },
//   ];

//   const milestones = [
//     {
//       year: "2023",
//       title: "Best Infrastructure Company Award",
//       description: "Recognized for excellence in electrical infrastructure development",
//     },
//     {
//       year: "2022",
//       title: "ISO 9001:2015 Certification",
//       description: "Quality management system certification achieved",
//     },
//     {
//       year: "2021",
//       title: "Green Energy Leadership",
//       description: "Award for outstanding contribution to renewable energy sector",
//     },
//     {
//       year: "2020",
//       title: "Safety Excellence Award",
//       description: "Recognized for maintaining highest safety standards",
//     },
//   ];

//   return (
//     <div className="min-h-screen">
//       <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0">
//           <img
//             src={achievementsImage}
//             alt="Electrical Infrastructure"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/50 to-primary/80" />
//         </div>

//         <div className="relative z-10 container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center"
//           >
//             <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
//               Our Achievements
//             </h1>
//             <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
//               We are 'A' class MEP contractors providing comprehensive electrical, mechanical, and plumbing solutions
//             </p>
//           </motion.div>
//         </div>
//       </section>
//         <section id="achievements" className="py-24 bg-background">
//         <div className="container mx-auto px-4">
//           <motion.div
//             ref={ref}
//             initial={{ opacity: 0, y: 30 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-16"
//           >
//             <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-4 block">
//               Achievements
//             </span>
//             <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
//               Milestones of Excellence
//             </h2>
//             <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
//               Our journey of success is marked by consistent performance, innovation, and recognition from industry leaders.
//             </p>
//           </motion.div>

//           {/* Counter Stats */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
//             {achievements.map((achievement, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={inView ? { opacity: 1, scale: 1 } : {}}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 className="text-center group"
//               >
//                 <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-accent flex items-center justify-center shadow-glow transform group-hover:scale-110 group-hover:rotate-12 transition-spring">
//                   <achievement.icon className="w-10 h-10 text-accent" />
//                 </div>
//                 <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
//                   {inView && (
//                     <CountUp
//                       end={achievement.value}
//                       duration={2.5}
//                       suffix={achievement.suffix}
//                     />
//                   )}
//                 </div>
//                 <p className="text-muted-foreground font-medium">{achievement.label}</p>
//               </motion.div>
//             ))}
//           </div>

//           {/* Milestones Timeline */}
//           <div className="max-w-4xl mx-auto">
//             <div className="space-y-8">
//               {milestones.map((milestone, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//                   animate={inView ? { opacity: 1, x: 0 } : {}}
//                   transition={{ duration: 0.6, delay: index * 0.15 }}
//                   className="relative pl-8 md:pl-12 border-l-2 border-accent/30 hover:border-accent transition-smooth"
//                 >
//                   <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-accent shadow-glow" />
//                   <div className="mb-2">
//                     <span className="inline-block px-3 py-1 text-sm font-bold text-accent-foreground bg-gradient-accent rounded-full shadow-soft">
//                       {milestone.year}
//                     </span>
//                   </div>
//                   <h3 className="text-xl font-bold text-foreground mb-2">
//                     {milestone.title}
//                   </h3>
//                   <p className="text-muted-foreground">
//                     {milestone.description}
//                   </p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//     </div>
   
//   );
// };

// export default Achievements;



import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { Trophy, Award, Star, Target } from "lucide-react";
import achievementsImage from "@/assets/achievements.jpg"; 

// --- NEW DATA ARRAY FOR IMAGES ---
const achievementImages = [
  { id: 1, src: "/placeholder-project-1.jpg", alt: "Major Project Completion Certificate" },
  { id: 2, src: "/placeholder-award-2.jpg", alt: "Industry Innovation Award 2024" },
  { id: 3, src: "/placeholder-cert-3.jpg", alt: "ISO 14001 Environmental Certification" },
  { id: 4, src: "/placeholder-safety-4.jpg", alt: "Safety Record Plaque" },
  { id: 5, src: "/placeholder-solar-5.jpg", alt: "Solar Farm Installation Project" },
  { id: 6, src: "/placeholder-client-6.jpg", alt: "Client Appreciation Letter" },
];
// You must replace the placeholder image paths (e.g., /placeholder-project-1.jpg) with your actual image paths.
// ---------------------------------

const Achievements = () => {
  // We'll use a separate ref and inView state for the gallery section for better control.
  const [galleryRef, galleryInView] = useInView({
    triggerOnce: true,
    threshold: 0.1, // Trigger when 10% of the element is visible
  });

  // Original ref for the stats section
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    {
      icon: Trophy,
      value: 1200,
      suffix: "+",
      label: "Projects Completed",
      color: "text-accent",
    },
    {
      icon: Award,
      value: 25,
      suffix: "+",
      label: "Years of Excellence",
      color: "text-accent",
    },
    {
      icon: Star,
      value: 15,
      suffix: "+",
      label: "Industry Awards",
      color: "text-accent",
    },
    {
      icon: Target,
      value: 98,
      suffix: "%",
      label: "Client Satisfaction",
      color: "text-accent",
    },
  ];

  const milestones = [
    {
      year: "2023",
      title: "Best Infrastructure Company Award",
      description: "Recognized for excellence in electrical infrastructure development",
    },
    {
      year: "2022",
      title: "ISO 9001:2015 Certification",
      description: "Quality management system certification achieved",
    },
    {
      year: "2021",
      title: "Green Energy Leadership",
      description: "Award for outstanding contribution to renewable energy sector",
    },
    {
      year: "2020",
      title: "Safety Excellence Award",
      description: "Recognized for maintaining highest safety standards",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={achievementsImage}
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
              Our Achievements
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              We are 'A' class MEP contractors providing comprehensive electrical, mechanical, and plumbing solutions
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Existing Achievements (Stats and Timeline) Section */}
      <section id="achievements" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-4 block">
              Achievements
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Milestones of Excellence
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our journey of success is marked by consistent performance, innovation, and recognition from industry leaders.
            </p>
          </motion.div>

          {/* Counter Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-accent flex items-center justify-center shadow-glow transform group-hover:scale-110 group-hover:rotate-12 transition-spring">
                  <achievement.icon className="w-10 h-10 text-accent" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                  {inView && (
                    <CountUp
                      end={achievement.value}
                      duration={2.5}
                      suffix={achievement.suffix}
                    />
                  )}
                </div>
                <p className="text-muted-foreground font-medium">{achievement.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Milestones Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative pl-8 md:pl-12 border-l-2 border-accent/30 hover:border-accent transition-smooth"
                >
                  <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-accent shadow-glow" />
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 text-sm font-bold text-accent-foreground bg-gradient-accent rounded-full shadow-soft">
                      {milestone.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {milestone.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* NEW ACHIEVEMENT IMAGE GALLERY SECTION WITH FADE-UP ON SCROLL */}
      <section id="gallery" className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-4 block">
              Gallery
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Project & Certification Gallery
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Visual proof of our successful projects, awards, and industry certifications.
            </p>
          </div>

          {/* Gallery Grid */}
          <div ref={galleryRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {achievementImages.map((image, index) => (
              <motion.div
                key={image.id}
                // --- FADE-UP/SLIDE-UP ANIMATION IMPLEMENTATION ---
                initial={{ opacity: 0, y: 50 }}
                animate={galleryInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15, // Staggered delay for each item
                  ease: "easeOut"
                }}
                // ----------------------------------------------------
                className="overflow-hidden rounded-xl shadow-lg border-2 border-transparent"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover aspect-[4/3] transform"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* END NEW SECTION */}

    </div>
  );
};

export default Achievements;
