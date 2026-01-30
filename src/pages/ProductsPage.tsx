import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

// Mock Product Data
const products = [
    {
        id: 1,
        title: "VCB Panel",
        category: "Switchgear",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&auto=format&fit=crop",
        description: "High-performance Vacuum Circuit Breaker panels for reliable medium voltage protection.",
        features: ["11kV - 33kV Rating", "Indoor/Outdoor Type", "SCADA Compatible"]
    },
    {
        id: 2,
        title: "PCC Panel",
        category: "Control Panels",
        image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=800&auto=format&fit=crop",
        description: "Power Control Center panels designed for efficient power distribution and fault protection.",
        features: ["Up to 6300A", "Form 4 Separation", "Intelligent Protection"]
    },
    {
        id: 3,
        title: "MCC Panel",
        category: "Control Panels",
        image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&auto=format&fit=crop",
        description: "Motor Control Center panels for centralized control of electric motors.",
        features: ["Fixed/Draw-out Type", "Soft Starter/VFD", "PLC Integration"]
    },
    {
        id: 4,
        title: "APFC Panel",
        category: "Power Quality",
        image: "https://images.unsplash.com/photo-1563770095-39d468f9a51d?w=800&auto=format&fit=crop",
        description: "Automatic Power Factor Correction panels to improve energy efficiency and reduce penalties.",
        features: ["Microprocessor Based", "Real-time Correction", "Low Harmonic Filters"]
    },
    {
        id: 5,
        title: "Compact Substation",
        category: "Infrastructure",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&auto=format&fit=crop",
        description: "Ready-to-install package substations for urban and industrial power distribution.",
        features: ["Transformer + RMU + LV", "Space Saving", "Safety Interlocked"]
    },
    {
        id: 6,
        title: "Bus Duct System",
        category: "Distribution",
        image: "https://images.unsplash.com/photo-1544724569-5f546fd6dd2d?w=800&auto=format&fit=crop",
        description: "Efficient and reliable bus duct systems for high power transmission.",
        features: ["Sandwich/Air Insulated", "Aluminium/Copper", "Fire Retardant"]
    }
];

const categories = ["All", "Control Panels", "Switchgear", "Power Quality", "Infrastructure", "Distribution"];

const ProductsPage = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProducts = activeCategory === "All"
        ? products
        : products.filter(p => p.category === activeCategory);

    return (
        <div className="min-h-screen bg-background">
            <PageHero
                title="Our Premium Products"
                description="State-of-the-art electrical infrastructure solutions engineered for reliability, safety, and performance."
                imageUrl="https://images.unsplash.com/photo-1565619624098-e659b7b68632?w=1920&fit=crop"
            />

            <section className="py-20 container mx-auto px-4">
                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat
                                    ? "bg-primary text-white shadow-lg scale-105"
                                    : "bg-secondary text-foreground hover:bg-accent/10 hover:text-accent"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Product Grid */}
                <motion.div
                    layout
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {filteredProducts.map((product) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            key={product.id}
                        >
                            <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-primary/10 overflow-hidden group flex flex-col">
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <Button variant="secondary" className="gap-2">
                                            View Details <ArrowRight className="w-4 h-4" />
                                        </Button>
                                    </div>
                                    <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground hover:bg-accent">
                                        {product.category}
                                    </Badge>
                                </div>

                                <CardHeader>
                                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                                        {product.title}
                                    </CardTitle>
                                </CardHeader>

                                <CardContent className="flex-grow">
                                    <p className="text-muted-foreground mb-4 line-clamp-2">
                                        {product.description}
                                    </p>
                                    <div className="space-y-2">
                                        {product.features.slice(0, 2).map((feat, i) => (
                                            <div key={i} className="flex items-center text-sm text-foreground/80">
                                                <Zap className="w-4 h-4 text-accent mr-2" />
                                                {feat}
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>

                                <CardFooter className="pt-0 pb-6 border-t border-border/50 mt-4">
                                    <Button variant="ghost" className="w-full p-0 h-auto font-semibold text-primary hover:text-accent hover:bg-transparent justify-between items-center mt-4">
                                        Learn More
                                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </section>
        </div>
    );
};

export default ProductsPage;
