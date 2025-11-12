import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {  Shield, Bolt,Factory,Home,Server,Construction} from "lucide-react";
import {useState,useMemo} from "react";
import serviceImage from "@/assets/services.jpg";
import distributionImage from "@/assets/distribution-system.jpg";
import industrialImage from "@/assets/industrial.jpg";
import residentialImage from "@/assets/residential.jpg";
import datacenterImage from "@/assets/datacenter.jpg";
import civilprojectImage from "@/assets/civil-project.jpg";
import substationImage from "@/assets/substation.jpg";


const ServicesPage = () => {
  const AnimatedServicePoint = ({ points,index,isImageLeft = true,imageSrc,imageAlt }) => {
    // Parent container variants to stagger children when the section comes into view
    const containerVariants = {
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.12,
        },
      },
    };

    // Item variants use a custom prop (index) to decide left/right entrance
    const itemVariants = {
      hidden: (custom: number) => ({
        opacity: 0,
        x: custom % 2 === 0 ? -60 : 60,
      }),
      visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    };

    return (
      <div className="flex flex-col lg:flex-row items-center gap-8 py-12">
      {/* Image Section (Conditional ordering) */}
      <motion.div
        className={`w-full lg:w-1/2 p-4 ${isImageLeft ? 'order-1 lg:order-1' : 'order-1 lg:order-2'}`}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src={imageSrc || serviceImage} // Use placeholder if specific image is not available
          alt={imageAlt || "Service Illustration"}
          className="w-full h-auto object-cover rounded-xl shadow-2xl border-4 border-border/50"
        />
      </motion.div>

      {/* Points Section */}
      <div className={`w-full lg:w-1/2 ${isImageLeft ? 'order-2 lg:order-2' : 'order-2 lg:order-1'}`}>
        <motion.ul
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {points.map((point, i) => {
            return (
              <motion.li
                key={i}
                custom={i}
                variants={itemVariants}
                className={`p-4 rounded-lg shadow-md border-l-4 ${i % 2 === 0 ? 'border-accent bg-card/70' : 'border-primary bg-card/70'}`}
              >
                <p className="text-foreground leading-relaxed">
                  {point}
                </p>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </div>
  );
};
  const mainServices = useMemo(() => [
    {
      id: "distribution-system",
      title: "Distribution System",
      icon: Bolt,
      points: [
        "33/11kV HT/LT Substation and Distribution line up to consumer metering.",
        "Supply of equipment.",
        "Construction including erection, testing and commissioning as **EPC contractor**.",
        "132kV, 66kV, 33kV & 11kV **UG cable Distribution works**.",
        "66kV, 33kV & 11kV **overhead line works**.",
      ],
      image: distributionImage 
    },
    {
      id: "substation-projects",
      title: "Substation Projects",
      icon: Shield,
      points: [
        "Substation projects executed from **33kV to 220kV**.",
        "Supply contracts for major equipment & auxiliary system of S/S.",
        "Construction including erection, testing and commissioning as **EPC contractor**.",
        "Our work includes civil construction / control room building / fire fighting system etc.",
        "Substation modification and **bay extension works**.",
      ],
      image: substationImage 
    },
    {
      id: "industrial-power-distribution",
      title: "Industrial Power Distribution System",
      icon: Factory,
      points: [
        "**Load distribution centre (LDC)**.",
        "Underground tunneling and electrical cabling & cable bridge.",
        "**PLCC & SCADA installations**.",
        "Ventilation & A/C systems.",
        "Plant illumination, electrification, **streetlighting**.",
        "Plant **energy audit**.",
        "Plant civil foundation for electrical equipment.",
      ],
      image: industrialImage 
    },
    {
      id: "residential-mep",
      title: "Residential / Commercial / MEP Projects",
      icon: Home,
      points: [
        "Load sanction from local utility department.",
        "Power distribution from nearest tap point to the premises.",
        "Erection of HT/LT Panels, **Bus ducts** and Distribution panels.",
        "Complete **internal wiring system**.",
        "Laying of cable trays and cables at heights.",
        "Laying of fire fighting piping systems and **plumbing pipes**.",
        "Laying of **A/C ducts**.",
      ],
      image: residentialImage 
    },
    {
      id: "datacenter-projects",
      title: "Datacenter Projects",
      icon: Server,
      points: [
        "Civil works includes **raised flooring** and mounting tiles.",
        "Erection of racks, wire mesh cable trays both over head & underground, **BMS system**.",
        "Underground A/C ducts with controlled ventilators.",
        "Complete **HVAC System**.",
        "Installation of **DG sets; UPS and Earthing system**.",
        "Low side and external works.",
      ],
      image: datacenterImage 
    },
    {
      id: "civil-infra-projects",
      title: "Civil Infra Projects",
      icon: Construction,
      points: [
        "Substation equipment footing and foundations.",
        "Substation earthmat works and cable trenches and platform for mounting HT panels.",
        "Construction of control room & road work inside the substation.",
        "Fencing & gravel spreading at substation.",
        "Construction of **model houses** for AP state Housing corporation Ltd.",
        "Construction of **schools** and multipurpose activity center.",
      ],
      image: civilprojectImage 
    },
  ], []);

  // Use state to manage the active service, though for navigation it's not strictly required
  const [activeService, setActiveService] = useState(mainServices[0].id);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Smooth scroll to the section, offsetting for a fixed header/nav if present
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveService(id);
    }
  };

  return (
    <div className="min-h-screen ">
      {/* Header */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={serviceImage}
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
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              We are 'A' class MEP contractors providing comprehensive electrical, mechanical, and plumbing solutions
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Navigation/Menu */}
          <div className="sticky top-0 z-30 mb-12 py-4 bg-background border-b-2 border-primary/20 shadow-md">
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap justify-center gap-2 md:gap-4"
            >
              {mainServices.map((service) => (
                <a
                  key={service.id}
                  href={`#${service.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(service.id);
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ease-in-out ${
                    activeService === service.id
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'bg-secondary text-foreground hover:bg-primary/10 hover:text-primary'
                  }`}
                >
                  {service.title}
                </a>
              ))}
            </motion.nav>
          </div>
          
          {/* Detailed Service Sections */}
          <div className="space-y-24 mt-16">
            {mainServices.map((service, index) => (
              <div key={service.id} id={service.id} className="pt-10 -mt-10"> {/* Padding/margin for scroll anchor */}
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl md:text-5xl font-bold text-center text-primary mb-12"
                >
                  <service.icon className="inline-block w-8 h-8 mr-3 text-accent" />
                  {service.title}
                </motion.h2>

                <AnimatedServicePoint
                  points={service.points}
                  index={index}
                  isImageLeft={index % 2 === 0} // Alternate image position
                  imageSrc={service.image} // Using placeholder value
                  imageAlt={service.title}
                />
              </div>
            ))}
          </div>

        </div>
      </section>

    

      {/* Service Areas */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Service Coverage
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We proudly serve clients across major states in India
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-6">
            {["Andhra Pradesh", "Telangana", "Maharashtra", "Karnataka", "Delhi"].map((state, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card hover:shadow-medium transition-spring border border-border/50 text-center group hover:-translate-y-1"
              >
                <p className="text-lg font-bold text-foreground group-hover:text-accent transition-smooth">
                  {state}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
