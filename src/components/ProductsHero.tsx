
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Product Data - Matches the specific 3 categories requested
export const productsData = [
    {
        id: 1,
        title: "Smart Electrical Panels",
        category: "Control & Automation",
        subtitle: "Low Voltage Panel Boards",
        description: "State-of-the-art Low Voltage Panel Boards engineered for maximum reliability, safety, and intelligent control. Our panels cater to diverse industrial and commercial power distribution needs.",
        image: "/Products/Electrical.jpg", // placeholder
        details: [
            "Power Control Centre (PCC) Panels",
            "Intelligent Power Control Centre (iPCC) Panels",
            "Motor Control Centre (MCC) Panels",
            "Intelligent Motor Control Centre (iMCC) Panels",
            "DG Sync Panels",
            "Auto Mains Failure (AMF) Panels",
            "Automation Panels",
            "Drive Control Panels",
            "Hybrid APFC Panels",
            "Thyristor Controlled APFC Panels",
            "APFC Panels with Detuned Filters",
            "Power Distribution Boards (PDB)",
            "Floor Metering Panels",
            "Control & Relay Panels (C&R)"
        ]
    },
    {
        id: 2,
        title: "Cable Management System",
        category: "Infrastructure",
        subtitle: "Organized Cabling Solutions",
        description: "Robust and versatile cable management systems designed to support, protect, and organize electrical cables in any facility. Ensuring safety and ease of maintenance.",
        image: "/Products/Cable.png", // placeholder resembling metal structures/trays
        details: [
            "Perforated Cable Tray",
            "Ladder Type Cable Tray",
            "Race Ways"
        ]
    },
    {
        id: 3,
        title: "Busways & Rising Mains",
        category: "Power Distribution",
        subtitle: "Efficient Power Transmission",
        description: "High-efficiency busway systems for reliable power transmission. A compact and flexible alternative to traditional cabling for high-current distribution.",
        image: "/Products/Busways.png", // placeholder
        details: [
            "Air Insulated Bus Ducts",
            "Conventional Bus Duct",
            "Sandwich Bus Duct"
        ]
    }
];

export const ProductsHero = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % productsData.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    const handleManualChange = (index: number) => {
        setActiveIndex(index);
    };

    const currentProduct = productsData[activeIndex];

    return (
        <section className="relative h-[90vh] min-h-[700px] w-full bg-background overflow-hidden flex flex-col md:flex-row">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.2, ease: "circOut" }}
                        className="absolute inset-0"
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s]"
                            style={{ backgroundImage: `url(${currentProduct.image})` }}
                        />
                        {/* Premium Overlay Gradients */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/95 via-[#0a0a0a]/70 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]/80" />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Left Navigation (Numbers) */}
            <div className="relative z-20 w-full md:w-32 flex md:flex-col items-center justify-center gap-8 p-4 hidden md:flex border-r border-white/5 bg-black/20 backdrop-blur-sm">
                <div className="flex-1 flex flex-col justify-center gap-8">
                    {productsData.map((product, index) => (
                        <button
                            key={product.id}
                            onClick={() => handleManualChange(index)}
                            className="group relative flex items-center gap-4 py-2"
                        >
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-accent transition-all duration-300 opacity-0 group-hover:h-8 group-hover:opacity-100"
                                style={{ height: activeIndex === index ? '32px' : '', opacity: activeIndex === index ? 1 : '' }}
                            />

                            <span className={`text-xl font-mono transition-all duration-500 ${activeIndex === index ? 'text-accent font-bold scale-125 ml-4' : 'text-white/40 group-hover:text-white/70'}`}>
                                0{index + 1}
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Mobile Navigation (Dots) */}
            <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-3 md:hidden">
                {productsData.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleManualChange(index)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${activeIndex === index ? 'bg-accent w-8' : 'bg-white/30 w-2'}`}
                    />
                ))}
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-16 lg:px-24 pt-20">
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="max-w-4xl"
                    >
                        {/* Category Label */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex items-center gap-3 mb-6"
                        >
                            <span className="h-0.5 w-12 bg-accent shadow-[0_0_10px_rgba(255,165,0,0.5)]" />
                            <span className="text-accent uppercase tracking-[0.2em] text-sm font-bold shadow-black drop-shadow-md">
                                {currentProduct.category}
                            </span>
                        </motion.div>

                        {/* Title */}
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight tracking-tight drop-shadow-lg">
                            {currentProduct.title}
                        </h1>
                        <h2 className="text-2xl md:text-3xl text-white/70 font-light mb-8 font-sans">
                            {currentProduct.subtitle}
                        </h2>

                        {/* Description - Shortened for Hero */}
                        <p className="text-lg text-white/80 mb-10 max-w-2xl leading-relaxed border-l-2 border-white/10 pl-6 line-clamp-3">
                            {currentProduct.description}
                        </p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="flex flex-wrap gap-4"
                        >
                            <Button
                                size="lg"
                                onClick={() => {
                                    const element = document.getElementById(`product-${currentProduct.id}`);
                                    element?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="bg-accent hover:bg-accent/80 text-white rounded-full px-8 py-6 text-lg shadow-[0_0_20px_rgba(255,165,0,0.3)] hover:shadow-[0_0_30px_rgba(255,165,0,0.5)] transition-all"
                            >
                                Explore Range <ChevronRight className="ml-2 w-5 h-5" />
                            </Button>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Aesthetic Decoration */}
            <div className="absolute right-0 bottom-0 w-1/3 h-1/3 bg-gradient-to-t from-accent/10 to-transparent blur-3xl pointer-events-none" />
        </section>
    );
};
