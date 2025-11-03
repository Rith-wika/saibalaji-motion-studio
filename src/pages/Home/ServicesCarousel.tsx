import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";
import servicesData from "@/data/services.json";
import "swiper/css";
import "swiper/css/navigation";

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
        autoplay={{ delay: 2000, disableOnInteraction: false, pauseOnMouseEnter: true }}
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
        {servicesData.map((service, index) => (
          <SwiperSlide key={index}>
            <Dialog>
              <DialogTrigger asChild>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="cursor-pointer h-full"
                >
                  <Card className="h-full border-primary/20 hover:border-accent transition-all overflow-hidden">
                    <CardContent className="p-0">
                      <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                        <img 
                          src={service.images[0]} 
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-3 text-black">
                          {service.title}
                        </h3>
                        <p className="text-black text-sm line-clamp-3 mb-4">
                          {service.description}
                        </p>
                        <div className="text-accent text-sm font-semibold">
                          Learn more → 
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="text-3xl">{service.title}</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <img 
                      src={service.images[0]} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-muted-foreground">{service.description}</p>
                  <p className="text-muted-foreground">{service.details}</p>
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