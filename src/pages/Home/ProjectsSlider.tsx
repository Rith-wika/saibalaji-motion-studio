import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import projectData from "@/data/project.json";

const projectCategories = [...projectData.ongoingProjects, ...projectData.completedProjects];

const ProjectsSlider = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-start mb-12">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Projects</h2>
                        <div className="w-20 h-1 bg-accent"></div>
                    </div>
                    <div className="flex gap-2">
                        <button className="projects-prev p-2 text-gray-400 hover:text-primary transition-colors">
                            <ChevronLeft className="w-10 h-10 stroke-[1.5]" />
                        </button>
                        <button className="projects-next p-2 text-gray-400 hover:text-primary transition-colors">
                            <ChevronRight className="w-10 h-10 stroke-[1.5]" />
                        </button>
                    </div>
                </div>

                <Swiper
                    modules={[Navigation, Autoplay]}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    }}
                    loop={true}
                    spaceBetween={8}
                    slidesPerView={1}
                    navigation={{
                        prevEl: '.projects-prev',
                        nextEl: '.projects-next',
                    }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 4 }
                    }}
                    className="!overflow-visible mb-16"
                >
                    {projectCategories.map((project, index) => (
                        <SwiperSlide key={index} className="h-auto">
                            <div className="group  relative h-[500px] overflow-hidden cursor-pointer">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-[0.4]"
                                />
                                <div className="absolute top-4 right-4 flex flex-col gap-2 items-end z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <Badge className="bg-orange-500 hover:bg-orange-600 text-white border-none shadow-lg">
                                        {project.category}
                                    </Badge>
                                    <Badge variant="outline" className="bg-black/40 backdrop-blur-md text-white border-white/20">
                                        {project.sft}
                                    </Badge>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                    <h3 className="text-2xl font-bold text-white mb-2 leading-tight transform transition-transform duration-500 group-hover:-translate-y-2">
                                        {project.title}
                                    </h3>
                                    <div className="max-h-0 opacity-0 group-hover:max-h-[200px] group-hover:opacity-100 transition-all duration-700 ease-in-out overflow-hidden">
                                        <p className="text-white/90 text-base font-medium leading-relaxed pb-2">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="mt-4">
                    <Link
                        to="/projects"
                        className="inline-flex items-center gap-3 text-lg font-bold text-orange-500 hover:text-orange-600 transition-colors group"
                    >
                        Explore all Projects
                        <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSlider;
