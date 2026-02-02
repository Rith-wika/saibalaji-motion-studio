
import { useState } from "react";
import { ProductsHero, productsData } from "@/components/ProductsHero";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

const ProductsPage = () => {
    // State to track which product's details are open. 
    // We can allow multiple to be open or just one. Let's allow one at a time for focus.
    const [openProductId, setOpenProductId] = useState<number | null>(null);

    const toggleProduct = (id: number) => {
        const isOpening = openProductId !== id;
        setOpenProductId(prev => prev === id ? null : id);

        if (isOpening) {
            // Wait for partial or full close animation to stabilize positions
            // Animation duration is 0.4s (400ms). We wait slightly longer to ensure accurate bounding box.
            setTimeout(() => {
                const element = document.getElementById(`product-details-${id}`);
                if (element) {
                    const yOffset = -20; // Reduced offset to land closer to the header
                    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                }
            }, 500);
        }
    };

    return (
        <div className="min-h-screen bg-background">
            <ProductsHero />

            <section className="py-24 container mx-auto px-4 space-y-32">
                {productsData.map((product, index) => {
                    const isEven = index % 2 === 0;
                    const isOpen = openProductId === product.id;

                    return (
                        <div
                            key={product.id}
                            id={`product-${product.id}`}
                            className="scroll-mt-32" // Offset for sticky headers if any
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                                className={cn(
                                    "flex flex-col gap-12 lg:gap-20 items-center",
                                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                                )}
                            >
                                {/* Image Section */}
                                <div className="w-full lg:w-1/2 group">
                                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/3]">
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent" />

                                        {/* Decorative Badge */}
                                        <div className="absolute top-6 left-6 px-4 py-2 bg-accent/90 text-white rounded-full text-sm font-semibold backdrop-blur-sm shadow-lg">
                                            {product.category}
                                        </div>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="w-full lg:w-1/2 space-y-6">
                                    <div className="space-y-2">
                                        <h3 className="text-accent text-lg font-medium tracking-wide border-l-4 border-accent pl-4">
                                            {product.subtitle}
                                        </h3>
                                        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 dark:from-white dark:to-white/60">
                                            {product.title}
                                        </h2>
                                    </div>

                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                        {product.description}
                                    </p>

                                    <div className="pt-4">
                                        <Button
                                            onClick={() => toggleProduct(product.id)}
                                            size="lg"
                                            variant={isOpen ? "secondary" : "default"}
                                            className="min-w-[200px] gap-2 rounded-full text-lg h-14 transition-all duration-300 shadow-lg hover:shadow-xl hover:translate-y-[-2px]"
                                        >
                                            {isOpen ? "Close Specifications" : "View Specifications"}
                                            {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Expandable Details Section */}
                            <AnimatePresence>
                                {isOpen && (
                                    <motion.div
                                        id={`product-details-${product.id}`}
                                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                                        animate={{ height: "auto", opacity: 1, marginTop: 40 }}
                                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                        className="overflow-hidden w-full bg-secondary/30 rounded-3xl border border-border/50"
                                    >
                                        <div className="p-8 md:p-12">
                                            <h4 className="text-2xl font-bold mb-8 flex items-center gap-3">
                                                <span className="w-2 h-8 bg-accent rounded-full" />
                                                Product Range & Specifications
                                            </h4>

                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                                {product.details.map((item, idx) => (
                                                    <motion.div
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: idx * 0.05 }}
                                                        key={idx}
                                                        className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border/50 hover:border-accent/50 hover:shadow-md transition-all duration-300 group"
                                                    >
                                                        <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                                                            <CheckCircle2 className="w-3.5 h-3.5 text-accent group-hover:text-white" />
                                                        </div>
                                                        <span className="text-foreground/90 font-medium leading-tight group-hover:text-primary transition-colors">
                                                            {item}
                                                        </span>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </section>
        </div>
    );
};

export default ProductsPage;
