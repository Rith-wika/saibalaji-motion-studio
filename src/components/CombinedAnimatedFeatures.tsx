import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const partners = [
  {
    id: 1,
    title: "HI Rised Residential Towers",
    description:
      "The retail industry is evolving rapidly, and customer expectations are higher than ever. We help retail brands stay ahead by integrating SAP solutions for supply chain management, inventory optimization, and point-of-sale systems. Our custom web and mobile applications empower omnichannel commerce, personalized shopping experiences, and real-time analytics. From backend automation to consumer-facing platforms, we deliver end-to-end digital transformation for both physical and online retail.",
    image: "/partners/retail.jpg",
  },
  {
    id: 2,
    title: "Apartments",
    description:
      "In the fast-moving consumer goods (FMCG) and broader consumer products space, speed, visibility, and customer insight are key. Our team modernizes operations by implementing SAP S/4HANA for seamless integration across procurement, production, distribution, and customer service. We build mobile dashboards, custom reporting tools, and interactive platforms that provide instant access to performance data, helping brands adapt quickly to market trends and consumer behavior.",
    image: "/partners/consumer.avif",
  },
  {
    id: 3,
    title: "Individual Row Houses",
    description:
      "Engineering and construction firms operate in complex environments with long project cycles and intricate workflows. We enable these organizations to digitize operations with SAP-based project systems, procurement planning, workforce management, and contract lifecycle solutions. Our mobile apps bring site-level visibility, allowing field teams to collaborate in real time, manage assets efficiently, and reduce project delays through actionable data and automated reporting.",
    image: "/partners/engineering.jpg",
  },
  {
    id: 4,
    title: "Bungalows",
    description:
      "Time and expertise are the currency in professional services — and we help firms maximize both. Our SAP-based solutions streamline project and resource planning, automate billing and time tracking, and improve client relationship management. Through custom-built portals and dashboards, we help service organizations gain visibility into key performance indicators, reduce manual work, and deliver greater value to their clients with agility and transparency.",
    image: "/partners/professional.jpg",
  },
  {
    id: 5,
    title: "Commercial Buildings",
    description:
      "Regulatory compliance, data accuracy, and patient safety are non-negotiable in the life sciences and healthcare sectors. We deliver secure, HIPAA/GDPR-compliant systems that integrate seamlessly with laboratory, hospital, and supply chain operations. From drug inventory management using SAP modules to mobile apps for remote patient monitoring, we build digital ecosystems that support clinical excellence, research, and operational efficiency at scale.",
    image: "/partners/healthcare.jpg",
  },
  {
    id: 6,
    title: "Industrial Plants Projects",
    description: " In the Industry 4.0 era, manufacturers must digitize to remain competitive. We bring smart factory solutions through SAP Manufacturing Execution Systems (MES), real-time production monitoring, quality assurance platforms, and IoT integration. Our mobile and web development capabilities allow stakeholders to access dashboards, manage inventory, and track KPIs anytime, anywhere. Whether discrete or process manufacturing, we help optimize throughput, minimize waste, and improve decision-making.",
    image: "/partners/manufacturing.webp",
  },
  {
    id: 7,
    title: "Sub Stations Up to 66 KV.",
    description: "We support educational institutions in redefining learning experiences and streamlining administration through modern digital tools. From SAP Student Lifecycle Management to custom-built learning management systems (LMS), we offer scalable solutions for admissions, attendance, content delivery, and student analytics. Our web and mobile applications enhance communication between students, teachers, and parents — building a more connected and intelligent education ecosystem.",
    image: "/partners/education.jpg",
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
                src={hoveredPartner?.image || "/partners/retail.jpg"}
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
