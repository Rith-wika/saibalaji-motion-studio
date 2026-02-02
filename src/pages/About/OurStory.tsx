import { motion } from "framer-motion";
import { Award, Users, Target, TrendingUp } from "lucide-react";
import ourStoryImage from "@/assets/our-story.jpg";
import JourneySection from "./JourneySection";

const OurStory = () => {
  const stats = [
    { icon: Award, value: "40+", label: "Years Experience" },
    { icon: Users, value: "500+", label: "Expert Team" },
    { icon: Target, value: "1000+", label: "Projects Completed" },
    { icon: TrendingUp, value: "98%", label: "Client Satisfaction" },
  ];

  return (
    <div className="min-h-screen ">
      {/* Header */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
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
              Our Story
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Built on trust, quality, and a commitment to excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview - Journey */}
      <section className="py-24 bg-background">
        <div className="w-full px-4 md:px-10 lg:px-16">
          <div className="text-center text-4xl font-bold text-accent mb-0">
            Our Journey
          </div>

          <JourneySection />
        </div>
      </section>

      {/* NEW SECTION: 24 Years of Excellence */}
      <section className="py-20 bg-gray-50">
        <div className="w-full px-4 md:px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl font-bold mb-6 font-heading text-primary">24 Years of Engineering Excellence & Growth</h2>
            <div className="max-w-4xl mx-auto text-left md:text-center space-y-4 text-lg text-gray-700">
              <p>• Established in 2002 with core Electrical contracting in Hyderabad, Telangana</p>
              <p>• Expanded operations to Bengaluru, Mumbai, Pune, Gurugram, and Vizag</p>
              <p>• Super Grade “A” Electrical License Company (authorized up to 132 KV)</p>
              <p>• 2019 – Established Sai Balaji MEP LLP for complete MEP Turnkey Solutions</p>
              <p>• 2024 – Launched Sai Balaji Power Controls LLP (in-house manufacturing)</p>
              <p>• 270+ professionals and 1000+ workforce across 50+ ongoing projects</p>
            </div>
          </motion.div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { title: "Electrical", img: "/images/electrical.png" },
              { title: "Fire Fighting", img: "/images/fire_fighting.png" },
              { title: "Plumbing", img: "/images/plumbing.png" },
              { title: "HVAC", img: "/images/hvac.png" },
              { title: "WTP / HTP", img: "/images/wtp_htp.png" },
              { title: "66/11KV", img: "/images/substation_11kv.png" },
              { title: "LT Panels", img: "/images/lt_panels.png" },
              { title: "Busways & Rising Main", img: "/images/busways.png" },
              { title: "Cable Management", img: "/images/cable_management.png" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative h-64 rounded-xl overflow-hidden shadow-lg cursor-pointer"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = `https://placehold.co/600x400?text=${encodeURIComponent(item.title)}`;
                  }}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-end p-6">
                  <h3 className="text-white text-xl font-bold">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStory;
