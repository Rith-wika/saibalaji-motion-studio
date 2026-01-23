import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const journeyItems = [
    {
        year: "2025",
        title: "CPRI Certification",
        description: "Tested @CPRI for 70KA Short Circuit, IP65, Temperature Rise as per IEC61439.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80" // Industrial testing/lab
    },
    {
        year: "2025",
        title: "Manufacturing Unit",
        description: "Started Sai Balaji Power Controls LLP For Manufacturing LV Panels, Cable Tray, Bus Ways Etc,.",
        image: "https://images.unsplash.com/photo-1565514020126-77889e478517?auto=format&fit=crop&w=1200&q=80" // Manufacturing/Factory
    },
    {
        year: "2019",
        title: "MEP Services",
        description: "Started Sai Balaji MEP LLP for Electrical Turn Key Services.",
        image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80" // Electrical/Wiring
    },
    {
        year: "2019",
        title: "Service Expansion",
        description: "Added Plumbing and Fire Fighting & Alarm Contracting Services.",
        image: "https://images.unsplash.com/photo-1581092334651-ddf26f9a0950?auto=format&fit=crop&w=1200&q=80" // Plumbing/Pipes
    },
    {
        year: "2011",
        title: "Incorporation",
        description: "Registered as Sai Balaji Infra India Pvt Ltd.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80" // Office building/Corp
    },
    {
        year: "2006",
        title: "Inception",
        description: "Started Sai Balaji Technologies as Electrical Contractor.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80" // Beginning/Office
    },
];

const JourneyCard = ({ item }: { item: typeof journeyItems[0] }) => (
    <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px] md:h-[500px] border border-white/10 group">
        <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90" />

        {/* Content Content - Positioned at bottom like the design */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider rounded-full">
                        {item.year}
                    </span>
                    <div className="h-px bg-white/30 flex-1" />
                </div>

                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                    {item.title}
                </h2>

                <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-2xl">
                    {item.description}
                </p>

                <div className="mt-8 flex items-center text-white/70 text-sm group-hover:text-accent transition-colors duration-300 cursor-pointer w-fit">
                    <span className="mr-2">Explore Step</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
            </motion.div>
        </div>
    </div>
);

const JourneySection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleItemClick = (index: number) => {
        // Check if mobile (lg breakpoint is 1024px in Tailwind)
        const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

        if (isDesktop) {
            setActiveIndex(index);
        } else {
            // On mobile, toggle the item
            setActiveIndex((prev) => (prev === index ? -1 : index));
        }
    };

    return (
        <div className="w-full max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
                {/* Left Side: List */}
                <div className="w-full lg:w-1/3 flex flex-col gap-2">
                    {journeyItems.map((item, index) => (
                        <div key={index} className="flex flex-col">
                            <button
                                onClick={() => handleItemClick(index)}
                                className={`text-left px-6 py-4 rounded-xl transition-all duration-300 flex items-center justify-between group ${activeIndex === index
                                    ? "bg-accent text-accent-foreground shadow-lg scale-105"
                                    : "hover:bg-accent/10 text-muted-foreground hover:text-foreground hover:translate-x-2"
                                    }`}
                            >
                                <div className="flex flex-col">
                                    <span className={`text-sm font-medium ${activeIndex === index ? "text-accent-foreground/80" : "text-muted-foreground/70"}`}>
                                        {item.year}
                                    </span>
                                    <span className="text-lg font-semibold">{item.title}</span>
                                </div>

                                {activeIndex === index && (
                                    <motion.div
                                        layoutId="active-arrow"
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -10 }}
                                    >
                                        <ArrowRight className="w-5 h-5 hidden lg:block" />
                                        <ArrowRight className="w-5 h-5 lg:hidden rotate-90" />
                                    </motion.div>
                                )}
                            </button>

                            {/* Mobile Content (Accordion style) */}
                            <div className="lg:hidden">
                                <AnimatePresence>
                                    {activeIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pt-4 pb-2">
                                                <JourneyCard item={item} />
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Side: Content Display (Desktop Only) */}
                <div className="hidden lg:block w-full lg:w-2/3 relative min-h-[400px]">
                    <AnimatePresence mode="wait">
                        {activeIndex !== -1 && (
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, x: 20, filter: "blur(10px)" }}
                                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                                exit={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="relative h-full"
                            >
                                <JourneyCard item={journeyItems[activeIndex]} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default JourneySection;
