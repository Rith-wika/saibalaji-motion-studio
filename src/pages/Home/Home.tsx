import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, CalendarRange, CheckCircle2, Award, MapPin, ShieldCheck, Building2, HardHat, FileText, BookOpen } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
// import heroVideo from "@/assets/hero-video.mp4";
import ServicesCarousel from "@/pages/Home/ServicesCarousel";
import ClientCarousel from "@/pages/Home/ClientCarousel";
import ProjectsSlider from "@/pages/Home/ProjectsSlider";
import FloatingButtons from "@/components/FloatingButtons";
import TestimonialSection from "@/components/TestimonialSection";
import { FaWhatsapp } from "react-icons/fa";

const Home = () => {
  const companyStats = [
    { icon: CalendarRange, value: "24+", label: "Years of Experience" },
    { icon: Users, value: "300+", label: "Expert Team Members" },
    { icon: CheckCircle2, value: "100+", label: "Projects Completed" },
    { icon: Award, value: "45+", label: "Projects Ongoing" },
    { icon: MapPin, value: "6 Cr. SFT", label: "Area Projects Delivered" },
    { icon: ShieldCheck, value: "4 Cr. SFT", label: "Area Projects Ongoing" },
    { icon: HardHat, value: "1000+", label: "Skilled Workforce" },
  ];

  const branches = [
    { name: "Hyderabad", image: "/branches/hyderabad.jpeg" },
    { name: "Pune", image: "/branches/pune.png.avif" },
    { name: "Mumbai", image: "/branches/mumbai.jpeg" },
    { name: "Bengaluru", image: '/branches/bengaluru.webp' },
    { name: "Visakhapatnam", image: "/branches/vizag.png.avif" },
    { name: "Gurugram", image: "/branches/gurgaon.jpeg" }
  ];

  return (
    <div className="min-h-screen">
      <FloatingButtons />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-screen object-cover "
          >
            <source src='/sai_balaji.mp4' type="video/mp4" />
            Your browser does not support the video tag.

          </video>
          {/* <img
            src={heroImage}
            alt="Electrical Infrastructure"
            className="w-full h-screen object-cover bg-fixed"
          /> */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary/40 to-primary/60" />
        </div>

// {/* <a
      //   aria-label="Chat on WhatsApp"
      //   href={`https://wa.me/919848745295?text=${encodeURIComponent("Hi, I would like to know more about substation electrical services")}`}
      //   target="_blank"
      //   rel="noreferrer noopener"
      //   className="fixed right-6 bottom-28 z-10 bg-green-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:h-16 hover:w-16 hover:shadow-2xl"
      // >
      //   <FaWhatsapp className="w-8 h-8" />
      // </a> */}

        <a
          href="/Brochure-%20Sai%20Balaji%20Power%20Controls%20LLP.pdf"
          download="Sai Balaji Brochure.pdf"
          className="fixed right-6 bottom-24 z-10 bg-white text-accent border-2 border-accent rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:h-16 hover:w-16 hover:shadow-2xl transition-all duration-300"
          title="Download Our Brochure"
        >
          <BookOpen className="w-7 h-7" />
        </a>

        <a
          href="/Profile%20-%20Sai%20Balaji%20Infra%20India%20Pvt.%20Ltd.pdf"
          download="Sai Balaji Profile.pdf"
          className="fixed right-6 bottom-8 z-10 bg-accent text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:h-16 hover:w-16 hover:shadow-2xl transition-all duration-300"
          title="Download Our Profile"
        >
          <FileText className="w-7 h-7" />
        </a>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          {/* <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-accent rounded-full"
            />
          </div> */}
        </motion.div>
      </section>

      {/* Company Statistics & Branch Presence */}
      <section className="py-24 bg-secondary/10">
        <div className="container mx-auto px-4">

          {/* Section 1: 6-Card Stats Grid (One Row Layout) */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-4 mb-20 w-full">
            {companyStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-lg shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] p-5 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group border border-transparent hover:border-primary/5 h-full"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-3 group-hover:bg-accent/20 transition-colors">
                  <stat.icon className="w-5 h-5 text-accent stroke-[2]" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-1 whitespace-nowrap hover:scale-105 transition-transform duration-300">
                  {stat.value}
                </h3>
                <p className="text-muted-foreground text-xs font-medium uppercase tracking-wide leading-tight">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Section 2: Branch Locations */}
          <div className="text-center max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-3">Our Branch Presence</h2>
            <p className="text-muted-foreground mb-12 text-lg">
              Strategically located to serve projects across India
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {branches.map((city, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white p-4 rounded-xl shadow-sm border border-border/40 hover:border-accent/30 hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center gap-3 group h-40"
                >
                  {city.image ? (
                    <div className="w-16 h-16 rounded-full overflow-hidden shadow-sm border-2 border-transparent group-hover:border-accent transition-all duration-300">
                      <img
                        src={city.image}
                        alt={city.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  ) : (
                    <Building2 className="w-8 h-8 text-muted-foreground/50 group-hover:text-accent transition-colors duration-300" />
                  )}
                  <span className="font-semibold text-foreground relative text-sm md:text-base">
                    {city.name}
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <ProjectsSlider />

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Our <span className="text-accent">Services</span>
          </h2>
          <ServicesCarousel />
        </div>
      </section>

      {/* Clients Section */}
      <ClientCarousel />

      <section className="py-15 bg-secondary relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <TestimonialSection />
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