import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const partners = [
  {
    id: 1,
    title: "HI Rised Residential Towers",
    description:
      "We undertake the complete construction of major vertical communities that define the modern city skyline. This work is characterized by its immense scale and structural complexity, involving deep, complex foundations, massive concrete cores for stability, and intricate, fast-paced logistics to build dozens of floors safely and efficiently.",
    image: "/whyus/hirised.png",
  },
  {
    id: 2,
    title: "Apartments",
    description:
      "Our expertise focuses on streamlined, repeatable construction methods, ensuring rapid completion and high value. This involves creating comfortable, reliable living spaces by laying robust foundations, installing all essential utility infrastructure, and applying quality finishes.",
    image: "/whyus/apartments.jpg",
  },
  {
    id: 3,
    title: "Individual Row Houses",
    description:
      "Our teams meticulously manage the entire construction lifecycle, from the initial excavation and foundation pouring to setting the roof and integrating personalized utility systems. We run dedicated circuits for specialized appliances, install luxury bathroom plumbing, and ensure the HVAC system.",
    image: "/whyus/rowhouses.jpeg",
  },
  {
    id: 4,
    title: "Bungalows",
    description:
      "This encompasses the entire construction of bespoke, luxury, single-family dwellings on their own plots. The projects demand meticulous craftsmanship, from the custom foundation and structural framing to the detailed exterior finishes. Every element, including power, water, and climate control, is custom-engineered to the owner's specifications.",
    image: "/whyus/bungalows.webp",
  },
  {
    id: 5,
    title: "Commercial Buildings",
    description:
      "Development of structures designed to facilitate business, such as offices, retail centers, or mixed-use facilities. Construction focuses on large, flexible open spaces, high ceilings, and robust core infrastructure built for heavy public and business use. This requires installing high-capacity utility systems (power, HVAC, data) that can be easily adapted by future tenants.",
    image: "/whyus/commercialbuilding.jpg",
  },
  {
    id: 6,
    title: "Industrial Plants Projects",
    description: "Execution of heavy-duty, specialized facilities required for manufacturing, processing, and large-scale logistics. The work involves laying deep, reinforced foundations capable of supporting heavy machinery and continuous vibration. The installation of vast networks of industrial-grade piping, specialized ventilation, and high-amperage electrical distribution systems is critical.",
    image: "/whyus/industrial.jpg",
  },
  {
    id: 7,
    title: "Sub Stations Up to 66 KV.",
    description: "Construction of critical electrical infrastructure that forms the necessary link in the power grid. This highly specialized work involves precise civil engineering for secure equipment pads and control houses, followed by the expert installation and connection of high-voltage equipment such as switchgear, transformers, and circuit breakers.",
    image: "/whyus/substation.jpg",
  },
];

const CombinedAnimatedFeatures = () => {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [isSettled, setIsSettled] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
   const expandedHeight = isMobile ? 950 : 600;
  const collapsedHeight = 400;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const activePartner = partners.find((p) => p.id === activeId);
  const hoveredPartner = partners.find((p) => p.id === hoveredId);

  const handleClick = (id: number) => {
    setActiveId(id);
    if (!isMobile) {
      setTimeout(() => {
        setIsSettled(true);
        setTimeout(() => {
          setShowDescription(true);
        }, 500);
      }, 1000);
    } else {
      setShowDescription(true);
    }
  };

  const handleReset = () => {
    setShowDescription(false);
    if (!isMobile) {
      setTimeout(() => {
        setIsExiting(true);
        setIsSettled(false);
      }, 1000);
    } else {
      setActiveId(null);
    }
  };

  const handleExitComplete = () => {
    setIsExiting(false);
    setActiveId(null);
  };

  return (
    <motion.div
      animate={{ height: showDescription ? expandedHeight : collapsedHeight }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="w-full text-black overflow-hidden relative font-[Questrial,Arial,Verdana,Tahoma,sans-serif] font-normal"
    >
      <div className="flex w-full flex-wrap transition-all duration-500">
        {/* Left Side Image - Hide on mobile */}
        {!activeId && (
          <div className="hidden md:flex w-1/2 justify-center items-center pr-10">
            <div className="h-[400px] w-[400px] overflow-hidden">
              <img
                src={hoveredPartner?.image || "/whyus/hirised.png"}
                alt={hoveredPartner?.title || "Default Partner"}
                className="w-full h-full object-cover transition-all duration-300"
              />
            </div>
          </div>
        )}

        {/* Right Side */}
        <div className={`${activeId ? "w-full" : "w-full md:w-1/2"} relative`}>
          {/* List */}
          {!activeId &&
            partners.map((partner) => (
              <div
                key={partner.id}
                onClick={() => handleClick(partner.id)}
                onMouseEnter={() => setHoveredId(partner.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="cursor-pointer group relative mb-4"
              >
                <span className="text-[27px] text-[#101010] group-hover:text-orange-500 font-normal transition-colors duration-200">
                  {partner.title}
                </span>
                <div className="h-[2px] bg-gray-200 w-full transition-all duration-200" />
              </div>
            ))}

          {/* Floating Title (desktop only) */}
          <AnimatePresence onExitComplete={handleExitComplete}>
            {activeId && activePartner && !isMobile && !isExiting && (
              <motion.div
                key={activeId}
                initial={{ x: 0, y: 0, opacity: 1 }}
                animate={
                  isSettled
                    ? { x: "-600px", y: 500, opacity: 1 }
                    : { x: "-600px", y: 0, opacity: 1 }
                }
                exit={{
                  x: ["-600px", "-600px", "50%"],
                  y: [500, 0, 0],
                  opacity: [1, 1, 0],
                  transition: {
                    times: [0, 0.6, 1],
                    duration: 1.5,
                    ease: "easeInOut",
                  },
                }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute top-0 left-1/2 transform -translate-x-1/2 cursor-pointer z-10"
              >
                <div
                  onClick={handleReset}
                  className="text-3xl font-normal text-left inline-block"
                >
                  {activePartner.title}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100vw" }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="h-[3px] bg-gray-200 mt-2"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Partner Content */}
          <AnimatePresence>
            {showDescription && activePartner && !isExiting && (
              <motion.div
                key="description"
                initial={isMobile ? { x: "100%" } : { x: "100%", opacity: 0 }}
                animate={isMobile ? { x: 0 } : { x: 0, opacity: 1 }}
                exit={isMobile ? { x: "100%" } : { x: "100%", opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className={`bg-white text-black px-4 ${
                  isMobile ? "min-h-screen overflow-y-auto" : ""
                }`}
              >
                <div className="w-full max-w-7xl mx-auto pt-6 pb-10">
                  {/* ✅ Back Button (Mobile Only) */}
             
                    <button
                      onClick={handleReset}
                      className="block  text-sm text-orange-600 mb-6 hover:underline"
                    >
                      ← Back
                    </button>
                

                  <div className="flex flex-col md:flex-row gap-10 items-start justify-around">
                    {/* Image */}
                    <div className="md:w-1/2 w-full  flex justify-center">
                      <img
                        src={activePartner.image}
                        alt={activePartner.title}
                        className="w-full max-w-md h-[400px] shadow-md object-cover"
                      />
                    </div>

                    {/* Text */}
                    <div className="md:w-1/2 w-full">
                      <h2 className="text-2xl font-semibold mb-4">
                        {activePartner.title}
                      </h2>
                      <p className="text-gray-700 mb-6 text-lg">
                        {activePartner.description}
                      </p>
                      
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default CombinedAnimatedFeatures;
