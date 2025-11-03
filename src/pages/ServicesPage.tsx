import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Sun, Building2, Wrench, Shield, Network, Flame, Cctv, Radio } from "lucide-react";
import serviceImage from "@/assets/services.jpg";

const ServicesPage = () => {
  const services = [
    {
      icon: Zap,
      title: "Electrical Services",
      description: "Unlike many electrical contractors who only provide a limited range of services, Sai Balaji Infra Private Limited can provide customers with a true one-stop solution for all electrical needs including lighting, power wiring, DB installation, and panel boards.",
    },
    {
      icon: Flame,
      title: "Fire Fighting",
      description: "Pioneer in the design, installation, testing, commissioning, and ongoing maintenance of fire protection systems. We ensure the highest standard in fire safety to save life & property.",
    },
    {
      icon: Shield,
      title: "Fire Alarm System",
      description: "Integrated fire safety company catering to intelligent and safe buildings in the areas of Fire Detection (FAS), Fire Hydrant System, Automatic Fire Sprinkler System, Fire Suppression (FM200), and Portable Fire Extinguishers.",
    },
    {
      icon: Sun,
      title: "HVAC Service",
      description: "We service all types of air conditioning systems for homes, offices, and shopping malls, as well as all types of refrigeration systems with minimum temperature requirements. Our technical teams are fully Covid Vaccinated.",
    },
    {
      icon: Building2,
      title: "Plumbing",
      description: "One-stop-solution for all types of plumbing repair services. We have the tools, skills, and experience to handle Water Pipelines, SWR Pipelines, Commode installations, Flush Systems, Mixers, Shower systems, and all types of plumbing works.",
    },
    {
      icon: Network,
      title: "Networking",
      description: "Licensed skilled electricians for lighting wiring, power wiring, speaker wiring, main cables termination, installation of network racks, crimping of I/O's, installation of patch panels, switches and dressing of networking cables.",
    },
    {
      icon: Cctv,
      title: "CCTV Service",
      description: "Hassle-free installation of security systems, PTZ cameras, wireless WiFi cameras, and CC camera installation. We provide user-friendly installations of all security devices with professional testing capabilities.",
    },
    {
      icon: Radio,
      title: "PA System",
      description: "Providing PA System Services for announcements at colleges, buildings, shopping complexes, medical centers and many more places. Procured from the best vendors with high reliability.",
    },
    {
      icon: Wrench,
      title: "All ELV System",
      description: "ELV (Extra Low Voltage) systems cover all modern technologies in buildings such as data network, CCTV, fire alarm systems, public address systems, audio/video solutions, access control and intrusion detection systems, and home automation.",
    },
  ];

  return (
    <div className="min-h-screen ">
      {/* Header */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={serviceImage}
            alt="Electrical Infrastructure"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/50 to-primary/80" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              We are 'A' class MEP contractors providing comprehensive electrical, mechanical, and plumbing solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-secondary/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group h-full hover:shadow-large transition-spring border-border/50 hover:-translate-y-2">
                  <CardHeader>
                    <div className="w-16 h-16 mb-4 rounded-2xl bg-gradient-accent flex items-center justify-center shadow-glow transform group-hover:scale-110 group-hover:rotate-6 transition-spring">
                      <service.icon className="w-8 h-8 text-accent" />
                    </div>
                    <CardTitle className="text-xl font-bold group-hover:text-accent transition-smooth">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Service Coverage
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We proudly serve clients across major states in India
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-6">
            {["Andhra Pradesh", "Telangana", "Maharashtra", "Karnataka", "Delhi"].map((state, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card hover:shadow-medium transition-spring border border-border/50 text-center group hover:-translate-y-1"
              >
                <p className="text-lg font-bold text-foreground group-hover:text-accent transition-smooth">
                  {state}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
