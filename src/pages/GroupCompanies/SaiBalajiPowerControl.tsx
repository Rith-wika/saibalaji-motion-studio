import { PageHero } from "@/components/PageHero";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Zap, Wifi, Activity, Leaf, Smartphone, Building2, Factory, Server, Home } from "lucide-react";
import aboutImage from "@/assets/industrial.jpg";
import heroImage from "@/assets/substation.jpg";
import qualityImage from "@/assets/quality.jpg";

// Services Data specifically for Power Control
const powerServices = [
    {
        title: "Smart Electrical Distribution Panels",
        description: "Intelligent panels designed for efficient power distribution and management.",
        image: "/services/electrical.jpeg",
        icon: Zap
    },
    {
        title: "IoT-Enabled Monitoring & Control",
        description: "Advanced systems for real-time monitoring and control of electrical infrastructure.",
        image: "/services/elv.jpeg",
        icon: Wifi
    },
    {
        title: "Load Management & Energy Optimization",
        description: "Solutions to optimize energy usage and handle loads effectively.",
        image: "/services/networking.jpeg",
        icon: Activity
    },
    {
        title: "Safety-Driven Circuit Protection",
        description: "Cutting-edge technologies ensuring maximum safety and circuit protection.",
        image: "/services/cctv.jpg",
        icon: CheckCircle2
    },
    {
        title: "Customized Panel Designs",
        description: "Tailored panel designs for Residential, Commercial, and Industrial segments.",
        image: "/services/substation.jpg",
        icon: Building2
    }
];

// Key Features Data
const features = [
    {
        title: "Real-Time Energy Monitoring",
        description: "Track power consumption and system health through cloud dashboards.",
        icon: Activity
    },
    {
        title: "Remote Control & Automation",
        description: "Manage circuits, scheduling, and load priorities from anywhere.",
        icon: Wifi
    },
    {
        title: "Fault Detection & Alerts",
        description: "Intelligent diagnostics detect overloads, short circuits, and anomalies instantly.",
        icon: Zap
    },
    {
        title: "Energy Efficiency",
        description: "Smart algorithms optimize power usage, helping reduce operational costs.",
        icon: Leaf
    },
    {
        title: "Seamless Integration",
        description: "Compatible with modern IoT devices to push the data to Mobile APP or Cloud Platforms.",
        icon: Smartphone
    }
];

// Industries Data
const industries = [
    { title: "Residential Buildings", icon: Home },
    { title: "Commercial Complexes", icon: Building2 },
    { title: "Data Centres", icon: Server },
    { title: "IT & ITES", icon: Wifi },
    { title: "Manufacturing & Industrial Plants", icon: Factory },
    { title: "Healthcare Facilities", icon: Activity },
    { title: "Pharma", icon: Leaf },
    { title: "Renewable Energy Installations", icon: Zap }
];

const highlights = [
    "Cutting-edge technology",
    "Customized engineering solutions",
    "Proven reliability and safety",
    "Strong technical support and service network",
    "Commitment to sustainability and energy innovation"
];

const SaiBalajiPowerControl = () => {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans">
            <PageHero
                title="Sai Balaji Power Control LLP"
                description="Empowering the Future of Intelligent Energy Management."
                imageUrl={heroImage}
            />

            {/* Who We Are Section */}
            <section className="py-24 container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl font-bold mb-6 text-foreground tracking-tight">Who We Are</h2>
                        <div className="w-20 h-1 bg-accent mb-8"></div>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            A technology-driven manufacturing company specializing in advanced Smart Electrical infrastructure solutions. Over 2 decades of combined engineering expertise with modern IoT capabilities, we produce smart panels that set new standards in efficiency, reliability, sustainability and user control.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-[4/3] rounded-sm overflow-hidden shadow-2xl">
                            <img
                                src={aboutImage}
                                alt="Engineering Team"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute inset-0 border-2 border-accent/20 translate-x-4 translate-y-4 -z-10 rounded-sm" />
                    </motion.div>
                </div>
            </section>

            {/* Advanced Power Control Systems - What We Offer */}
            <section className="py-24 bg-secondary/30">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16 max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Advanced Power Control Systems</h2>
                        <h3 className="text-2xl text-accent font-medium mb-6">What We Offer</h3>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            Each product is built using high-quality materials, precision manufacturing processes, and validated through stringent quality checks to ensure superior performance and long-term durability.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {powerServices.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Card className="h-full border-t-4 border-t-transparent hover:border-t-accent hover:shadow-lg transition-all duration-300 group bg-white">
                                    <CardContent className="p-6 flex flex-col items-center text-center h-full">
                                        <div className="bg-primary/5 p-4 rounded-full mb-6 group-hover:bg-accent/10 transition-colors">
                                            <service.icon className="w-8 h-8 text-primary group-hover:text-accent" />
                                        </div>
                                        <h4 className="font-bold text-lg mb-3 leading-tight text-foreground">{service.title}</h4>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {service.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Key Features Section */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Key Features</h2>
                        <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
                        <p className="text-lg text-muted-foreground">
                            Intelligent features redefining energy management.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 max-w-6xl mx-auto">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex gap-4 items-start"
                            >
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center text-accent">
                                        <feature.icon className="w-5 h-5" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold mb-2 text-foreground">{feature.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed text-sm">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries We Serve Section */}
            <section className="py-24 bg-primary text-primary-foreground">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-12">Industries We Serve</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {industries.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="flex flex-col items-center justify-center p-6 bg-white/5 border border-white/10 rounded-sm hover:bg-white/10 transition-colors group"
                            >
                                <item.icon className="w-10 h-10 mb-4 text-accent/80 group-hover:text-accent transition-colors" />
                                <span className="font-medium text-lg text-center tracking-wide">{item.title}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quality & Compliance */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl font-bold mb-6 text-foreground">Quality & Compliance</h2>
                            <div className="w-20 h-1 bg-accent mb-8"></div>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                We adhere to international electrical standards and certifications, ensuring our smart panels meet the highest expectations for safety, reliability, and performance. Our manufacturing facilities incorporate advanced testing facilities and automated production lines.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative order-first md:order-last"
                        >
                            <div className="aspect-[4/3] rounded-sm overflow-hidden shadow-xl">
                                {/* Using placeholder or duplicated image if qualityImage isn't distinct enough yet */}
                                <img
                                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60"
                                    alt="Quality Testing"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-secondary/20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-10">Why Choose Us</h2>
                        <div className="bg-white p-10 rounded-xl shadow-sm border border-border/50">
                            <ul className="space-y-4 text-left inline-block">
                                {highlights.map((item, index) => (
                                    <li key={index} className="flex items-center gap-4">
                                        <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                                        <span className="text-lg font-medium text-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SaiBalajiPowerControl;
