
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface JourneyItem {
    year: string;
    title: string;
    description: string;
}

const journeyData: JourneyItem[] = [
    {
        year: "2002",
        title: "Inception",
        description: "Started Sai Balaji Technologies Pvt Ltd with core Electrical contracting in Hyderabad, marking the beginning of our journey."
    },
    {
        year: "2006",
        title: "Early Growth",
        description: "Expanded our operations significantly, strengthening the foundation for future infrastructure services."
    },
    {
        year: "2011",
        title: "Incorporation",
        description: "Registered as Sai Balaji Infra India Pvt Ltd, a major milestone in our corporate expansion journey."
    },
    {
        year: "2012",
        title: "Mumbai Projects",
        description: "Successfully expanded our project footprint to Mumbai, taking on challenging work in the financial capital."
    },
    {
        year: "2014",
        title: "Bengaluru Projects",
        description: "Further expansion of our execution capabilities into the Bengaluru region, tapping into new technology markets."
    },
    {
        year: "2019",
        title: "MEP LLP",
        description: "Strategic expansion into Turnkey Solutions with the establishment of Sai Balaji MEP LLP."
    },
    {
        year: "2021",
        title: "Pan India",
        description: "Aggressive expansion into Gurugram and Vizag, solidifying our presence across the nation."
    },
    {
        year: "2022",
        title: "Pune Office",
        description: "Continued our geographic expansion by opening a new chapter in Pune to serve industrial hubs."
    },
    {
        year: "2023",
        title: "Regional Branches",
        description: "Major expansion milestone with the establishment of full-fledged branches in Bengaluru and Mumbai."
    },
    {
        year: "2024",
        title: "Power Control",
        description: "Vertical expansion into manufacturing with the launch of Sai Balaji Power Controls LLP."
    },
    {
        year: "2025",
        title: "CPRI Certified",
        description: "Achieved CPRI Certification, expanding our quality credentials and commitment to safety."
    }
];

const JourneySection = () => {
    return (
        <div className="w-full max-w- mx-auto py-10 relative">
            {/* Desktop Snake Layout */}
            <div className="hidden lg:block relative h-[700px] w-full mt-10">
                {/* SVG Connecting Line */}
                <svg
                    className="absolute inset-0 w-full h-full z-0 pointer-events-none"
                    viewBox="0 0 100 700"
                    preserveAspectRatio="none"
                >
                    <defs>
                        <linearGradient id="gradient-line" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="hsl(var(--primary))" />
                            <stop offset="100%" stopColor="hsl(var(--accent))" />
                        </linearGradient>
                    </defs>

                    {/* Background Trace */}
                    <path
                        d="M 10 100 L 89 100 C 95 100 95 300 89 300 L 10 300 C 5 300 5 500 10 500 L 62 500"
                        fill="none"
                        stroke="hsl(var(--muted-foreground) / 0.2)"
                        vectorEffect="non-scaling-stroke"
                        style={{ strokeWidth: 4 }}
                    />

                    {/* Animated Line */}
                    <motion.path
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 4, ease: "easeInOut" }}
                        d="M 10 100 L 89 100 C 95 100 95 300 89 300 L 10 300 C 5 300 5 500 10 500 L 62 500"
                        fill="none"
                        stroke="hsl(var(--accent))"
                        vectorEffect="non-scaling-stroke"
                        style={{ strokeWidth: 4 }}
                    />
                </svg>

                {/* Nodes Container */}
                {/* Row 1 */}
                <JourneyNode item={journeyData[0]} x="10%" y="100px" delay={0.2} />
                <JourneyNode item={journeyData[1]} x="36%" y="100px" delay={0.4} />
                <JourneyNode item={journeyData[2]} x="62%" y="100px" delay={0.6} />
                <JourneyNode item={journeyData[3]} x="89%" y="100px" delay={0.8} />

                {/* Row 2 */}
                <JourneyNode item={journeyData[4]} x="89%" y="300px" delay={1.0} />
                <JourneyNode item={journeyData[5]} x="62%" y="300px" delay={1.2} />
                <JourneyNode item={journeyData[6]} x="36%" y="300px" delay={1.4} />
                <JourneyNode item={journeyData[7]} x="10%" y="300px" delay={1.6} />

                {/* Row 3 */}
                <JourneyNode item={journeyData[8]} x="10%" y="500px" delay={1.8} />
                <JourneyNode item={journeyData[9]} x="36%" y="500px" delay={2.0} />
                <JourneyNode item={journeyData[10]} x="62%" y="500px" delay={2.2} />
            </div>

            {/* Mobile Vertical Layout */}
            <div className="lg:hidden flex flex-col gap-8 px-4 relative">
                <div className="absolute left-[27px] top-6 bottom-6 w-0.5 bg-primary/20" />
                {journeyData.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex gap-6 relative"
                    >
                        <div className="relative z-10 w-14 h-14 shrink-0 rounded-full bg-background border-4 border-accent flex items-center justify-center shadow-lg">
                            <span className="text-xs font-bold text-foreground">{item.year}</span>
                        </div>
                        <div className="pb-8 border-b border-dashed border-gray-200 last:border-0">
                            <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

const JourneyNode = ({ item, x, y, delay }: { item: JourneyItem, x: string, y: string, delay: number }) => {
    return (
        <div
            className="absolute -translate-x-1/2 -translate-y-1/2 group"
            style={{ left: x, top: y }}
        >
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay }}
                className="relative z-20 cursor-pointer"
            >
                {/* Circle Node */}
                <div className="w-20 h-20 rounded-full bg-background border-4 border-accent flex items-center justify-center shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:border-primary group-hover:shadow-[0_0_25px_hsl(var(--accent)/0.5)] relative overflow-hidden z-20">
                    <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{item.year}</span>
                </div>

                {/* Always visible label below */}
                <div className="absolute top-24 left-1/2 -translate-x-1/2 whitespace-nowrap text-center pointer-events-none">
                    <h3 className="text-sm font-bold text-primary/80 group-hover:text-primary transition-colors">{item.title}</h3>
                </div>

                {/* Hover Popover Box */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-72 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-50 pointer-events-none">
                    <div className="bg-popover text-popover-foreground p-4 rounded-xl shadow-xl border border-border relative">
                        <h4 className="font-bold text-accent mb-1">{item.title} ({item.year})</h4>
                        <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                        {/* Arrown */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1.5 border-8 border-transparent border-t-popover" />
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default JourneySection;
