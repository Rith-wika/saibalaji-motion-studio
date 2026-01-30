import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";

import distributionImage from "@/assets/distribution-system.jpg";
import industrialImage from "@/assets/industrial.jpg";
import civilprojectImage from "@/assets/civil-project.jpg";
import datacenterImage from "@/assets/datacenter.jpg";

const services = [
  {
    id: "electrical-services",
    title: "Electrical Services",
    points: [
      "HT & LT Electrical Works",
      "Internal & External Electrification",
      "Transformer, DG & UPS installations",
      "Cable laying, tray works & terminations",
      "Earthing & Lightning Protection Systems",
      "Electrical Testing & Commissioning",
    ],
    image: distributionImage,
  },
  {
    id: "plumbing-phe",
    title: "Plumbing & PHE",
    points: [
      "Internal & external plumbing systems",
      "Water supply & drainage systems",
      "STP / WTP / Rainwater harvesting",
      "Pumping systems & pressure boosting",
    ],
    image: civilprojectImage,
  },
  {
    id: "fire-fighting",
    title: "Fire Fighting Systems",
    points: [
      "Fire hydrant systems",
      "Sprinkler systems",
      "Fire alarm & detection systems",
      "Fire pump rooms & testing",
      "Statutory compliance & approvals",
    ],
    image: industrialImage,
  },
  {
    id: "elv-systems",
    title: "ELV / Low Current Systems",
    points: [
      "CCTV & Surveillance",
      "Access Control Systems",
      "Public Address Systems",
      "Structured Cabling",
      "Building Management Systems (BMS)",
    ],
    image: datacenterImage,
  },
  {
    id: "hvac-systems",
    title: "HVAC Systems",
    points: [
      "Centralized & VRF / VRV Air Conditioning Systems",
      "Chilled Water, AHU & FCU Systems",
      "Ventilation, Fresh Air & Exhaust Systems",
      "Ducting with Thermal & Acoustic Insulation",
      "Installation, Testing & Commissioning",
    ],
    image: distributionImage,
  },
];

const ServicesCarousel = () => {
  return (
    <div className="relative">
      <button className="custom-swiper-prev absolute left-1/2 -translate-x-[60px] bottom-0 z-10 p-2 rounded-full bg-white/10 backdrop-blur-sm border border-accent/20 text-accent hover:bg-accent/10 transition-colors">
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button className="custom-swiper-next absolute left-1/2 translate-x-[12px] bottom-0 z-10 p-2 rounded-full bg-white/10 backdrop-blur-sm border border-accent/20 text-accent hover:bg-accent/10 transition-colors">
        <ChevronRight className="w-6 h-6" />
      </button>
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        navigation={{
          nextEl: '.custom-swiper-next',
          prevEl: '.custom-swiper-prev',
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
        className="pb-16 relative"
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <Dialog>
              <DialogTrigger asChild>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="cursor-pointer h-full"
                >
                  <Card className="h-full border-primary/20 hover:border-accent transition-all overflow-hidden group">
                    <CardContent className="p-0 flex flex-col h-full">
                      <div className="aspect-video relative overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                      </div>
                      <div className="p-6 flex-grow flex flex-col">
                        <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors">
                          {service.title}
                        </h3>
                        <ul className="space-y-2 mb-4 flex-grow">
                          {service.points.slice(0, 3).map((point, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start truncate">
                              <span className="mr-2 text-accent">•</span>
                              <span className="truncate">{point}</span>
                            </li>
                          ))}
                          {service.points.length > 3 && (
                            <li className="text-sm text-accent italic pl-3">
                              +{service.points.length - 3} more...
                            </li>
                          )}
                        </ul>
                        <div className="text-accent text-sm font-semibold mt-auto flex items-center">
                          View Details <ChevronRight className="w-4 h-4 ml-1" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="text-3xl text-primary">{service.title}</DialogTitle>
                </DialogHeader>
                <div className="grid md:grid-cols-2 gap-6 mt-4">
                  <div className="aspect-video rounded-lg overflow-hidden shadow-md">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-3">Key Services:</h4>
                    <ul className="space-y-3">
                      {service.points.map((point, i) => (
                        <li key={i} className="flex items-start text-muted-foreground">
                          <Check className="w-5 h-5 text-accent mr-3 flex-shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ServicesCarousel;