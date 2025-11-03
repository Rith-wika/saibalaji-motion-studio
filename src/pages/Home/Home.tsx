import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Award, Users, Target } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import ServicesCarousel from "@/pages/Home/ServicesCarousel";

const Home = () => {
  const stats = [
    { icon: Award, value: "40+", label: "Years Experience" },
    { icon: Users, value: "500+", label: "Expert Team" },
    { icon: Target, value: "1000+", label: "Projects Completed" },
    { icon: Zap, value: "A Grade", label: "MEP License" },
  ];


   const projectCategories = [
    {
      title: 'IT Commercial',
      description: 'Modern commercial buildings with extensive MEP/FP systems for optimal workplace environments.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800'
    },
    {
      title: 'Educational',
      description: 'Innovative infrastructure solutions for educational institutions with sustainable design.',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800'
    },
    {
      title: 'Pharma Industries',
      description: 'Specialized MEP/FP support for pharmaceutical and healthcare facilities.',
      image: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=800'
    },
    {
      title: 'Sub Stations',
      description: 'Super grade-1 EHV & HV substation works with professional testing capabilities.',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800'
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Electrical Infrastructure"
            className="w-full h-screen object-cover bg-fixed"
          />
          <div className="absolute inset-0 gradient-hero" />
        </div>

        {/* <div className="relative z-10 container mx-auto px-4 py-32">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center space-x-2 mb-6"
            >
              <Zap className="w-6 h-6 text-accent" />
              <span className="text-accent font-semibold tracking-wider uppercase text-sm">
                ISO 9001:2015 Certified
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight"
            >
              SAI BALAJI INFRA
              <span className="block text-accent">India Pvt. Ltd.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl text-primary-foreground/90 mb-8 font-medium italic"
            >
              Your Satisfaction Is Our Mission
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl text-primary-foreground/80 mb-8 max-w-2xl"
            >
              Multi-disciplinary MEP engineering services across Andhra Pradesh, Telangana, Maharashtra, Karnataka, and Delhi
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/projects">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow transition-spring hover:scale-105"
                >
                  Explore Projects
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-smooth"
                >
                  Get in Touch
                </Button>
              </Link>
            </motion.div>
          </div>
        </div> */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-accent rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-accent flex items-center justify-center shadow-glow transform group-hover:scale-110 group-hover:rotate-6 transition-spring">
                  <stat.icon className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-4xl font-bold text-foreground mb-2">{stat.value}</h3>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

          <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-2">Our Projects</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-4"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Excellence across multiple sectors with innovative MEP solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectCategories.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg cursor-pointer"
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  <h3 className="text-xl font-bold mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    {project.title}
                  </h3>
                  <p className="text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    {project.description}
                  </p>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Zap className="w-6 h-6 text-secondary animate-glow-pulse" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* <div className="text-center mt-10">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/projects">View All Projects</Link>
            </Button>
          </div> */}
        </div>
      </section>

          <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Our <span className="text-accent">Services</span>
          </h2>
          <ServicesCarousel />
        </div>
      </section>
      

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can bring your electrical infrastructure vision to life
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow transition-spring hover:scale-105"
              >
                Contact Us Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
