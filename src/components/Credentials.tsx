import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, FileCheck } from "lucide-react";
import achievementsImage from "@/assets/achievements.jpg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";

// Types
interface CredentialImage {
    id: number;
    src: string;
    alt: string;
    title: string;
}

// Data Separation
const certificationImages: CredentialImage[] = [
    { id: 1, src: "/achievements/incorporation certificate.jpg", alt: "Incorporation Certificate", title: "Incorporation Certificate" },
    { id: 2, src: "/achievements/electrical a-grade licence.jpg", alt: "Electrical A-Grade Licence", title: "Electrical A-Grade Licence" },
    { id: 3, src: "/achievements/iso 9001;2015 certificate.jpg", alt: "ISO 9001:2015 Certificate", title: "ISO 9001:2015 Certificate" },
    { id: 4, src: "/achievements/iso 45001;2018 health & safety certificate.jpg", alt: "ISO 45001:2018 Health & Safety Certificate", title: "ISO 45001:2018 Health & Safety Certificate" },
    { id: 4, src: "/achievements/udyam.png", alt: "Udyam Certificate", title: "Udyam Certificate" },


];

const achievementImages: CredentialImage[] = [
    { id: 6, src: "/achievements/tatahousing.png", alt: "Best Contractor Award - Tata Housing", title: "Best Contractor Award - Tata Housing" },
    { id: 7, src: "/achievements/prestiagegroup.png", alt: "Appreciation - Prestige Group", title: "Appreciation - Prestige Group" },
    { id: 8, src: "/achievements/citation1.png", alt: "Citation Award", title: "Citation Award" },
    { id: 9, src: "/achievements/citation2.png", alt: "Citation Award", title: "Citation Award" },
];

// Reusable Image Grid Component
const ImageGrid = ({ images, inView, triggerRef, variant = 'full' }: { images: CredentialImage[], inView: boolean, triggerRef: any, variant?: 'standard' | 'full' }) => (
    <div ref={triggerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
            <Dialog key={image.id}>
                <DialogTrigger asChild>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="group cursor-pointer"
                    >
                        <Card className="overflow-hidden border-slate-200 hover:shadow-lg hover:border-primary/30 transition-all duration-300 h-full bg-white">
                            <CardContent className="p-0">
                                {variant === 'standard' ? (
                                    // Standard Variant (Original Look for Achievements)
                                    <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                                        <img
                                            src={image.src}
                                            alt={image.alt}
                                            className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                            <span className="bg-white/90 text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">View Image</span>
                                        </div>
                                    </div>
                                ) : (
                                    // Full Variant (New Look for Certifications)
                                    <div className="relative overflow-hidden bg-slate-100">
                                        <img
                                            src={image.src}
                                            alt={image.alt}
                                            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                )}
                                <div className="p-5 border-t border-slate-100">
                                    <div className="flex items-start gap-3">
                                        {image.title.includes("Certificate") ? (
                                            <FileCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                        ) : (
                                            <Award className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                        )}
                                        <h3 className="font-semibold text-slate-700 group-hover:text-primary transition-colors line-clamp-2">
                                            {image.title || image.alt}
                                        </h3>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </DialogTrigger>
                <DialogContent className="max-w-3xl w-[90vw] p-0 overflow-hidden bg-white border-none shadow-2xl">
                    <div className="relative bg-slate-50 flex items-center justify-center p-4 md:p-8 min-h-[50vh]">
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="max-w-full max-h-[80vh] object-contain shadow-md rounded-sm"
                        />
                    </div>
                    <div className="bg-white p-6 border-t border-slate-100">
                        <h3 className="text-xl font-bold text-slate-800 mb-2">{image.title || image.alt}</h3>
                    </div>
                </DialogContent>
            </Dialog>
        ))}
    </div>
);

const Credentials = () => {
    const [achievementsRef, achievementsInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [certificationsRef, certificationsInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Header */}
            <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={achievementsImage}
                        alt="Electrical Infrastructure"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/80" />
                </div>

                <div className="relative z-10 container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
                            Credentials
                        </h1>
                        <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
                            Showcasing our proven track record, industry recognition, and certified excellence.
                        </p>
                    </motion.div>
                </div>
            </section>
            {/* Main Content */}
            <section className="py-20 container mx-auto px-4">
                <Tabs defaultValue="achievements" className="w-full">
                    <div className="flex justify-center mb-0">
                        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
                            <TabsTrigger value="achievements" className="text-base">
                                <Award className="w-4 h-4 mr-2" />
                                Achievements
                            </TabsTrigger>
                            <TabsTrigger value="certifications" className="text-base">
                                <FileCheck className="w-4 h-4 mr-2" />
                                Certifications
                            </TabsTrigger>
                        </TabsList>
                    </div>

                    {/* Achievements Tab */}
                    <TabsContent value="achievements" className="animate-in fade-in slide-in-from-bottom-8 duration-700">
                        <ImageGrid
                            images={achievementImages}
                            inView={achievementsInView}
                            triggerRef={achievementsRef}
                            variant="standard"
                        />
                        <div className="mt-16 text-center">
                            <p className="text-slate-500 mb-4">Recognized by industry leaders for our commitment to quality and excellence.</p>
                        </div>
                    </TabsContent>

                    {/* Certifications Tab */}
                    <TabsContent value="certifications" className="animate-in fade-in slide-in-from-bottom-8 duration-700">
                        <ImageGrid
                            images={certificationImages}
                            inView={certificationsInView}
                            triggerRef={certificationsRef}
                            variant="full"
                        />
                        <div className="mt-16 text-center">
                            <p className="text-slate-500 mb-4">We are continuously striving for excellence and adding more credentials to our portfolio.</p>
                        </div>
                    </TabsContent>
                </Tabs>
            </section>
        </div>
    );
};

export default Credentials;
