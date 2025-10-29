import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react";

const KeyPersonsPage = () => {
  const keyPersons = [
    {
      name: "Mr. A Ramaprabhu",
      position: "Managing Director",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
      message: "I take this pleasure to introduce our organization M/s. SAI BALAJI INFRA (INDIA) PRIVATE LIMITED as one of the most reliable & eligible Electrical 'A' Grade License Holder MEP contractors having ISO-9001:2015 certified in multi-disciplinary engineering services. Being incorporated in the year 2011 with an integrated approach to fulfill various needs of utility services to our clients across the country, exclusively dedicated to 5 major states namely, Andhra Pradesh, Telangana, Maharashtra, Karnataka and Delhi at present.",
    },
    {
      name: "Mr. A. Purshottam",
      position: "Executive Director",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
      message: "We fully support the customers who want to use the quality products with excellence performance at a reasonable price. We strongly commit to concentrate on energy-efficiency, noise-reduction, safety, easy installation, less maintenance, comfort and reducing the environmental effects by using our high quality products.",
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl text-foreground md:text-6xl font-bold mb-6">Leadership Team</h1>
            <p className="text-xl text-foreground max-w-3xl mx-auto">
              Meet the visionaries driving excellence in electrical infrastructure
            </p>
          </motion.div>
        </div>
      </section>

      {/* Director Messages */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {keyPersons.map((person, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="overflow-hidden hover:shadow-large transition-spring border-border/50">
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Image */}
                    <div className="relative h-[500px] overflow-hidden">
                      <img
                        src={person.image}
                        alt={person.name}
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-smooth duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
                      
                      {/* Social Links */}
                      <div className="absolute bottom-6 left-6 flex space-x-3">
                        <button className="w-12 h-12 rounded-full bg-accent flex items-center justify-center hover:scale-110 transition-spring shadow-glow">
                          <Linkedin className="w-6 h-6 text-accent-foreground" />
                        </button>
                        <button className="w-12 h-12 rounded-full bg-accent flex items-center justify-center hover:scale-110 transition-spring shadow-glow">
                          <Mail className="w-6 h-6 text-accent-foreground" />
                        </button>
                      </div>
                    </div>

                    {/* Content */}
                    <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                      <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-4 block">
                        {person.position}
                      </span>
                      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                        {person.name}
                      </h2>
                      <div className="relative">
                        <div className="absolute -left-4 top-0 text-6xl text-accent/20 font-serif">"</div>
                        <p className="text-muted-foreground leading-relaxed text-lg pl-8">
                          {person.message}
                        </p>
                        <div className="absolute -right-4 bottom-0 text-6xl text-accent/20 font-serif rotate-180">"</div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default KeyPersonsPage;
