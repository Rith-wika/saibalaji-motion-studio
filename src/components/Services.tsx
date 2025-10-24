import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Sun, Building2, Wrench, Shield, Network } from "lucide-react";

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Zap,
      title: "Transmission Lines",
      description: "Design and construction of high voltage transmission infrastructure from 33kV to 400kV, ensuring reliable power delivery across vast distances.",
    },
    {
      icon: Sun,
      title: "Solar EPC Solutions",
      description: "Complete turnkey solar power plant solutions including design, procurement, construction, and commissioning with advanced monitoring systems.",
    },
    {
      icon: Building2,
      title: "Substation Development",
      description: "Engineering and construction of electrical substations with state-of-the-art equipment and automation for efficient power distribution.",
    },
    {
      icon: Network,
      title: "Distribution Networks",
      description: "Modern distribution infrastructure development with smart grid technology for urban and rural electrification projects.",
    },
    {
      icon: Wrench,
      title: "O&M Services",
      description: "Comprehensive operations and maintenance services ensuring optimal performance and longevity of electrical infrastructure.",
    },
    {
      icon: Shield,
      title: "Safety Audits",
      description: "Professional electrical safety audits, testing, and compliance services maintaining highest safety standards.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-4 block">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Comprehensive Electrical Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            End-to-end electrical infrastructure services delivered with precision, innovation, and unwavering commitment to quality.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group h-full hover:shadow-large transition-spring border-border/50 hover:-translate-y-2">
                <CardHeader>
                  <div className="w-16 h-16 mb-4 rounded-2xl bg-gradient-accent flex items-center justify-center shadow-glow transform group-hover:scale-110 group-hover:rotate-6 transition-spring">
                    <service.icon className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-accent transition-smooth">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
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

export default Services;
