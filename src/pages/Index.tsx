import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Achievements from "@/components/Achievements";
import KeyPersons from "@/components/KeyPersons";
import Gallery from "@/components/Gallery";
import Careers from "@/components/Careers";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Achievements />
      <KeyPersons />
      <Gallery />
      <Careers />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
