import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { BadgeCheck, ShieldCheck, Clock, TrendingUp, Lightbulb, CheckCircle2, Award } from "lucide-react";
import { PageHero } from "@/components/PageHero";

const AboutCompany = () => {
    const segments = [
        "Residential High-Rise Projects",
        "Commercial & Corporate Buildings",
        "Retail & Mixed-Use Developments",
        "Hotels",
        "Hospitals",
        "Industrial & Manufacturing Facilities",
        "Warehousing & Logistics Parks",
        "IT/ITES & Data Centers",
        "Institutional & Infrastructure Works"
    ];

    const values = [
        {
            icon: <BadgeCheck className="w-10 h-10 text-accent" />,
            title: "Quality",
            description: "Excellence at every stage, ensuring projects meet the highest engineering standards."
        },
        {
            icon: <ShieldCheck className="w-10 h-10 text-accent" />,
            title: "Safety",
            description: "A safe environment for employees, clients, and communities through strict protocols."
        },
        {
            icon: <Clock className="w-10 h-10 text-accent" />,
            title: "Timely Project Delivery",
            description: "Structured planning, efficient scheduling, and discipline to meet deadlines."
        },
        {
            icon: <TrendingUp className="w-10 h-10 text-accent" />,
            title: "Value Engineering",
            description: "Smart engineering solutions that optimize material usage and reduce cost without affecting quality."
        },
        {
            icon: <Lightbulb className="w-10 h-10 text-accent" />,
            title: "Innovation",
            description: "Adoption of modern tools and techniques that enhance productivity and project performance."
        }
    ];

    const expertise = [
        "Electrical Installations (Internal, External & ELV Systems)",
        "Substations 11KV, 33/11KV & 66/11KV – AIS, GIS & Hybrid",
        "Fire Fighting & Life Safety Solutions",
        "Plumbing, Sanitary, HTP, WTP Works",
        "HVAC & Basement Ventilation Systems"
    ];

    const benefits = [
        "Improved coordination and design accuracy",
        "Reduced rework, delays, and material wastage",
        "Faster installation planning and execution",
        "Better cost control and predictable project delivery"
    ];

    return (
        <div className="min-h-screen">
            <PageHero
                title="About Company"
                description="Engineering Excellence & Innovation"
                imageUrl="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop"
            />

            {/* Vision & Mission */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="bg-secondary/5 p-8 rounded-2xl border-l-4 border-accent"
                        >
                            <h2 className="text-3xl font-bold mb-4 font-heading">VISION</h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                To be the most trusted and innovative MEP contracting company, delivering sustainable, efficient, and future-ready engineering solutions.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-secondary/5 p-8 rounded-2xl border-l-4 border-accent"
                        >
                            <h2 className="text-3xl font-bold mb-4 font-heading">MISSION</h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                We are committed to providing high-quality project execution that exceeds client expectations. Our mission is to leverage advanced technologies, sustainable practices, and a skilled workforce to deliver superior results on time, with precision, and within budget.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Managing Director's Message */}
            <section className="py-20 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
                {/* Decorative Background Elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-6xl mx-auto"
                    >
                        {/* Section Title */}
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-3 font-heading text-foreground">
                                MESSAGE FROM THE MANAGING DIRECTOR
                            </h2>
                            <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
                        </div>

                        {/* Content Grid */}
                        <div className="grid lg:grid-cols-5 gap-12 items-center">
                            {/* Left: MD Photo */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="lg:col-span-2"
                            >
                                <div className="relative group">
                                    {/* Decorative border */}
                                    <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />

                                    {/* Image container */}
                                    <div className="relative bg-white p-2 rounded-2xl shadow-xl">
                                        <img
                                            src="/persons/ramaprabhu.jpg"
                                            alt="Managing Director"
                                            className="w-full h-auto rounded-xl object-cover aspect-[4/5]"
                                        />
                                        {/* Name plate overlay */}
                                        <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-accent/20">
                                            <h3 className="font-bold text-lg text-foreground">Managing Director</h3>
                                            <p className="text-sm text-muted-foreground">Sai Balaji Infra (India) Pvt. Ltd</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Right: Message Content */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="lg:col-span-3"
                            >
                                <div className="relative">
                                    {/* Opening Quote */}
                                    <div className="absolute -top-4 -left-2 text-6xl text-accent/20 font-serif leading-none">"</div>

                                    {/* Message Card */}
                                    <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-accent relative">
                                        <div className="space-y-4 text-gray-700 leading-relaxed">
                                            <p className="text-base">
                                                It is a privilege to introduce <span className="font-semibold text-foreground">Sai Balaji Infra (India) Pvt. Ltd.</span>, a company built over <span className="font-semibold text-accent">24 years</span> on trust, quality, and committed teamwork. Our growth has been driven by continuous improvement, disciplined execution, and long-standing relationships with our clients and partners.
                                            </p>

                                            <p className="text-base">
                                                Our strength lies in our dedicated team, whose professionalism supports our core values of quality, timely delivery, safety, and transparency. These principles guide every decision we make and define the way we approach each project.
                                            </p>

                                            <p className="text-base">
                                                As we move ahead, our focus remains on strengthening systems, adopting better practices, and delivering work that reflects reliability and integrity. I am grateful to our clients, partners, and team members for their constant support, which motivates us to achieve new milestones with confidence.
                                            </p>
                                        </div>

                                        {/* Signature Section */}
                                        <div className="mt-8 pt-6 border-t border-gray-200">
                                            <div className="flex items-end justify-between">
                                                <div>
                                                    <div className="font-signature text-2xl text-primary mb-1" style={{ fontFamily: 'cursive' }}>
                                                        Managing Director
                                                    </div>
                                                    <p className="text-sm text-muted-foreground font-medium">
                                                        Sai Balaji Infra (India) Pvt. Ltd
                                                    </p>
                                                </div>
                                                <div className="hidden sm:block">
                                                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                                                        <Award className="w-8 h-8 text-accent" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Closing Quote */}
                                    <div className="absolute -bottom-8 -right-2 text-6xl text-accent/20 font-serif leading-none">"</div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Segments We Serve */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-3xl font-bold mb-12 text-center font-heading"
                    >
                        SEGMENTS WE SERVE
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {segments.map((segment, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all flex items-center border border-gray-100"
                            >
                                <div className="h-2 w-2 bg-accent rounded-full mr-4"></div>
                                <span className="font-semibold text-gray-800">{segment}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-3xl font-bold mb-12 text-center font-heading"
                    >
                        CORE VALUES
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all"
                            >
                                <div className="mb-6 bg-accent/10 w-fit p-4 rounded-full">{value.icon}</div>
                                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Expertise */}
            <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-3xl font-bold mb-12 text-center font-heading text-white"
                    >
                        OUR EXPERTISE
                    </motion.h2>
                    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
                        {expertise.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center p-6 bg-white/10 rounded-xl backdrop-blur-md border border-white/10 hover:bg-white/20 transition-all"
                            >
                                <BadgeCheck className="w-8 h-8 text-accent mr-4 flex-shrink-0" />
                                <span className="text-lg font-medium text-white">{item}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-3xl font-bold mb-12 text-center font-heading"
                    >
                        BENEFITS OF MEP TURNKEY SOLUTION PROVIDER
                    </motion.h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center p-6 bg-white rounded-xl shadow-sm border-l-4 border-accent"
                            >
                                <CheckCircle2 className="w-6 h-6 text-accent mr-4 flex-shrink-0" />
                                <span className="text-lg font-semibold text-gray-800">{benefit}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Sai Balaji */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-3xl font-bold mb-8 font-heading"
                        >
                            WHY SAI BALAJI
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
                        >
                            Sai Balaji stands apart for its commitment to quality, timely delivery, client trust, sustainability, and value engineering. With integrated in-house capabilities, strong technical expertise, and consistent repeat business from leading developers, we deliver coordinated, reliable, and high-performance engineering solutions across India.
                        </motion.p>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default AboutCompany;
