import { motion } from "framer-motion";
import { PageHero } from "@/components/PageHero";
import { ArrowRight } from "lucide-react";
import { useMemo } from "react";
import serviceImage from "@/assets/services.jpg";
import distributionImage from "@/assets/distribution-system.jpg";
import industrialImage from "@/assets/industrial.jpg";
import civilprojectImage from "@/assets/civil-project.jpg";
import datacenterImage from "@/assets/datacenter.jpg";

const ServicesPage = () => {
  interface ServicePointProps {
    points: string[];
    index: number;
    isImageLeft: boolean;
    imageSrc: string;
    imageAlt: string;
    title: string;
    filterValue: string;
    hasProjects?: boolean;
  }

  const AnimatedServicePoint = ({ points, index, isImageLeft, imageSrc, imageAlt, title, filterValue, hasProjects = true }: ServicePointProps) => {
    // Parent container variants to stagger children when the section comes into view
    const containerVariants = {
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.1,
        },
      },
    };

    // Item variants
    const itemVariants = {
      hidden: { opacity: 0, x: 20 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    };

    return (
      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center">

          {/* Left Side */}
          <div className={`w-full lg:w-1/2 p-4 lg:p-12 ${isImageLeft ? 'lg:text-right' : 'lg:text-left order-2 lg:order-1'}`}>
            {isImageLeft ? (
              // Image on Left
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-500"
              >
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="w-full h-[300px] md:h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
              </motion.div>
            ) : (
              // Content on Left
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="relative bg-white p-8 border border-dashed border-primary/30 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Arrow pointing right to center */}
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-6 bg-white border-t border-r border-dashed border-primary/30 transform rotate-45 -translate-y-1/2" />

                <h2 className="text-2xl md:text-3xl font-bold text-primary uppercase tracking-tight mb-6">
                  {title}
                </h2>
                <div className="w-16 h-1 bg-accent mb-6" />

                <motion.ul
                  className="space-y-3"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                >
                  {points.map((point, i) => (
                    <motion.li
                      key={i}
                      variants={itemVariants}
                      className="flex items-start gap-3 group"
                    >
                      {/* Bullet Point */}
                      <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent mt-2.5 group-hover:scale-125 transition-transform" />
                      <p className="text-base text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                        {point}
                      </p>
                    </motion.li>
                  ))}
                </motion.ul>

                {hasProjects && (
                  <motion.a
                    href={`/projects?service=${encodeURIComponent(filterValue)}`}
                    className="inline-flex items-center gap-2 mt-6 text-primary font-bold uppercase tracking-wider text-xs hover:text-accent transition-colors"
                  >
                    View Projects <ArrowRight className="w-3 h-3" />
                  </motion.a>
                )}
              </motion.div>
            )}
          </div>

          {/* Center Line & Dot (Desktop Only) */}
          <div className="hidden lg:flex flex-col items-center justify-center absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-10">
            {/* The Dot */}
            <div className="w-4 h-4 bg-accent rounded-full border-4 border-white shadow-md z-20" />
          </div>

          {/* Right Side */}
          <div className={`w-full lg:w-1/2 p-4 lg:p-12 ${isImageLeft ? 'lg:text-left' : 'lg:text-right order-1 lg:order-2'}`}>
            {!isImageLeft ? (
              // Image on Right
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-500"
              >
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="w-full h-[300px] md:h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
              </motion.div>
            ) : (
              // Content on Right
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="relative bg-white p-8 border border-dashed border-primary/30 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Arrow pointing left to center */}
                <div className="hidden lg:block absolute top-1/2 -left-3 w-6 h-6 bg-white border-b border-l border-dashed border-primary/30 transform rotate-45 -translate-y-1/2" />

                <h2 className="text-2xl md:text-3xl font-bold text-primary uppercase tracking-tight mb-6">
                  {title}
                </h2>
                <div className="w-16 h-1 bg-accent mb-6" />

                <motion.ul
                  className="space-y-3"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                >
                  {points.map((point, i) => (
                    <motion.li
                      key={i}
                      variants={itemVariants}
                      className="flex items-start gap-3 group"
                    >
                      {/* Bullet Point */}
                      <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent mt-2.5 group-hover:scale-125 transition-transform" />
                      <p className="text-base text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                        {point}
                      </p>
                    </motion.li>
                  ))}
                </motion.ul>

                {hasProjects && (
                  <motion.a
                    href={`/projects?service=${encodeURIComponent(filterValue)}`}
                    className="inline-flex items-center gap-2 mt-6 text-primary font-bold uppercase tracking-wider text-xs hover:text-accent transition-colors"
                  >
                    View Projects <ArrowRight className="w-3 h-3" />
                  </motion.a>
                )}
              </motion.div>
            )}
          </div>

        </div>
      </div>
    );
  };

  const mainServices = useMemo(() => [
    {
      id: "electrical-services",
      title: "Electrical Services",
      filterValue: "Electrical",
      points: [
        "HT & LT Electrical Works",
        "Internal & External Electrification",
        "Transformer, DG & UPS installations",
        "Cable laying, tray works & terminations",
        "Earthing & Lightning Protection Systems",
        "Electrical Testing & Commissioning",
      ],
      image: distributionImage,
    },
    {
      id: "plumbing-phe",
      title: "Plumbing & Public Health Engineering (PHE)",
      filterValue: "Plumbing",
      points: [
        "Internal & external plumbing systems",
        "Water supply & drainage systems",
        "STP / WTP / Rainwater harvesting",
        "Pumping systems & pressure boosting",
      ],
      image: civilprojectImage,
    },
    {
      id: "fire-fighting",
      title: "Fire Fighting Systems",
      filterValue: "Fire Fighting",
      points: [
        "Fire hydrant systems",
        "Sprinkler systems",
        "Fire alarm & detection systems",
        "Fire pump rooms & testing",
        "Statutory compliance & approvals",
      ],
      image: industrialImage,
    },
    {
      id: "elv-systems",
      title: "ELV / Low Current Systems",
      filterValue: "ELV",
      hasProjects: false,
      points: [
        "CCTV & Surveillance",
        "Access Control Systems",
        "Public Address Systems",
        "Structured Cabling",
        "Building Management Systems (BMS)",
      ],
      image: datacenterImage,
    },
    {
      id: "hvac-systems",
      title: "Heating, Ventilation & Air Conditioning Systems (HVAC)",
      filterValue: "HVAC",
      points: [
        "Centralized & VRF / VRV Air Conditioning Systems",
        "Chilled Water, AHU & FCU Systems",
        "Ventilation, Fresh Air & Exhaust Systems",
        "Ducting with Thermal & Acoustic Insulation",
        "Installation, Testing & Commissioning",
      ],
      image: distributionImage,
    },
  ], []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header */}
      <PageHero
        title="Our Services"
        description="Delivering excellence in Electrical, Infrastructure, and Industrial projects."
        imageUrl={serviceImage}
      />

      {/* Main Content */}
      <section className="bg-white py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative">

          {/* Central Vertical Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2" />

          {/* Service Sections */}
          <div className="space-y-0">
            {mainServices.map((service, index) => (
              <AnimatedServicePoint
                key={service.id}
                {...service}
                index={index}
                isImageLeft={index % 2 === 0}
                imageSrc={service.image}
                imageAlt={service.title}
              />
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
