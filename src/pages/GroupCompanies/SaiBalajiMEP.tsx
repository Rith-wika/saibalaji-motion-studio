import { PageHero } from "@/components/PageHero";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import aboutImage from "@/assets/about-us.jpg";
import heroImage from "@/assets/projects.jpg";

// Services Data specifically for MEP
const mepServices = [
    {
        title: "Electrical Works",
        description: "HT/LT installations, transformers, and distribution systems tailored for industrial and commercial needs.",
        image: "/services/electrical.jpeg" // Using path from services.json convention
    },
    {
        title: "HVAC Systems",
        description: "Energy-efficient heating, ventilation, and air conditioning solutions for optimal climate control.",
        image: "/services/hvac.jpeg"
    },
    {
        title: "Plumbing & Fire Fighting",
        description: "Comprehensive plumbing networks and advanced fire safety systems ensuring building compliance.",
        image: "/services/plumbing.jpeg"
    },
    {
        title: "ELV Systems",
        description: "Integrated low voltage systems including CCTV, access control, and building management.",
        image: "/services/elv.jpeg"
    }
];

const highlights = [
    "End-to-End MEP Execution Capabilities",
    "Class-1 Government Licensed Contractor",
    "Strict Adherence to Safety & Quality Standards",
    "Timely Project Delivery Record"
];

const SaiBalajiMEP = () => {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans">
            <PageHero
                title="Sai Balaji MEP LLP"
                description="Delivering Excellence in Mechanical, Electrical, and Plumbing Solutions"
                imageUrl={heroImage}
            />

            {/* About Company Section */}
            <section className="py-20 container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-bold mb-6 text-foreground">About Sai Balaji MEP LLP</h2>
                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                            Sai Balaji MEP LLP is a premier provider of integrated MEP (Mechanical, Electrical, and Plumbing) services.
                            With a focus on turnkey execution, we bring specialized expertise to complex infrastructure projects.
                        </p>
                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                            Our team consists of seasoned engineers and technical experts dedicated to delivering robust, efficient,
                            and sustainable engineering solutions. From initial design to final commissioning, we ensure every aspect
                            of your project meets the highest industry standards.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                            <img
                                src={aboutImage}
                                alt="MEP Engineering Team"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <div className="absolute -bottom-6 -left-6 bg-accent p-6 rounded-lg shadow-xl hidden md:block">
                            <p className="text-white font-bold text-xl">Top-Tier<br />Execution</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Core Services Section */}
            <section className="py-20 bg-secondary/30">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Core Services</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Comprehensive engineering solutions designed for reliability and performance.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {mepServices.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="h-full border-primary/10 hover:border-accent transition-all duration-300 overflow-hidden group hover:shadow-lg">
                                    <CardContent className="p-0">
                                        <div className="aspect-video bg-muted overflow-hidden">
                                            <img
                                                src={service.image}
                                                alt={service.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors">
                                                {service.title}
                                            </h3>
                                            <p className="text-muted-foreground text-sm leading-relaxed">
                                                {service.description}
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto bg-card rounded-2xl p-8 md:p-12 shadow-sm border border-border/50">
                        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {highlights.map((item, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="mt-1 bg-accent/10 p-2 rounded-full">
                                        <CheckCircle2 className="w-5 h-5 text-accent" />
                                    </div>
                                    <p className="text-lg font-medium text-foreground">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default SaiBalajiMEP;
