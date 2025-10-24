import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, Users, Target, TrendingUp } from "lucide-react";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: Award, value: "25+", label: "Years Experience" },
    { icon: Users, value: "500+", label: "Expert Team" },
    { icon: Target, value: "1000+", label: "Projects Completed" },
    { icon: TrendingUp, value: "98%", label: "Client Satisfaction" },
  ];

  return (
    <section id="about-us" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-4 block">
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Pioneering Electrical Infrastructure
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            SAI BALAJI Infra India Pvt. Ltd. stands as a beacon of excellence in electrical infrastructure development, committed to powering India's growth story.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-accent opacity-20 blur-2xl rounded-3xl" />
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80"
                alt="About SAI BALAJI"
                className="relative rounded-2xl shadow-large w-full h-[400px] object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-foreground">
              Leading the Charge in Electrical Solutions
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              With over two decades of unwavering commitment to excellence, SAI BALAJI Infra India Pvt. Ltd. has emerged as a trusted name in electrical infrastructure development. Our expertise spans across transmission lines, substations, solar power projects, and comprehensive electrical solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We believe in creating sustainable, efficient, and future-ready electrical systems that power communities and drive economic growth. Our team of skilled professionals, cutting-edge technology, and adherence to safety standards make us the preferred partner for electrical infrastructure projects across India.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-foreground font-medium">ISO Certified</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-foreground font-medium">Government Approved</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-foreground font-medium">Award Winning</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-accent flex items-center justify-center shadow-glow transform group-hover:scale-110 transition-spring">
                <stat.icon className="w-8 h-8 text-accent-foreground" />
              </div>
              <h4 className="text-3xl font-bold text-foreground mb-2">{stat.value}</h4>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
