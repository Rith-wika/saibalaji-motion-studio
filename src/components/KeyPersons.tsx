import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react";

const KeyPersons = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const team = [
    {
      name: "Rajesh Kumar",
      position: "Managing Director",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
      bio: "25+ years of experience in electrical infrastructure and project management",
    },
    {
      name: "Priya Sharma",
      position: "Chief Engineer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
      bio: "Expert in transmission line design and renewable energy systems",
    },
    {
      name: "Amit Patel",
      position: "Operations Head",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
      bio: "Specialized in project execution and quality assurance",
    },
    {
      name: "Sunita Reddy",
      position: "Finance Director",
      image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=400&q=80",
      bio: "Financial strategist with expertise in infrastructure funding",
    },
  ];

  return (
    <section id="key-persons" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-4 block">
            Leadership Team
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Meet Our Key Persons
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Driven by expertise, united by vision. Our leadership team brings decades of combined experience in electrical infrastructure.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden hover:shadow-large transition-spring border-border/50">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-smooth duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                  
                  {/* Social Links - appear on hover */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-3 opacity-0 group-hover:opacity-100 transition-smooth">
                    <button className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:scale-110 transition-spring shadow-glow">
                      <Linkedin className="w-5 h-5 text-accent-foreground" />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:scale-110 transition-spring shadow-glow">
                      <Mail className="w-5 h-5 text-accent-foreground" />
                    </button>
                  </div>
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-accent transition-smooth">
                    {member.name}
                  </h3>
                  <p className="text-accent font-semibold text-sm mb-3">
                    {member.position}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyPersons;
