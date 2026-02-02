import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail } from "lucide-react";
import keypersonsImage from "@/assets/key-persons.jpg";

const KeyPersonsPage = () => {
  const keyPersons = [
    {
      name: "Mr. A.Ramaprabhu",
      position: "Managing Director",
      image: "/persons/ramaprabhu.jpg",
      mail: "ramaprabhu@saibalajiinfra.com",
      phone: "+91 9848246533",
    },
    {
      name: "Mr. A.Purshottam",
      position: "Executive Director",
      image: "/persons/purshottamu.jpg",
      mail: "purushottamu@saibalajiinfra.com",
      phone: "+91 9848494706",
    },
    {
      name: "Mr.Hari Shankar Ray",
      position: "VP, Contracts",
      image: "persons/harishankarray.jpg",
      mail: "harishankar@saibalajiinfra.com",
      phone: "+91 9848745295",
    },
    {
      name: "Mr. B.Shivaiah",
      position: "Procurement Head",
      image: "persons/shivaiah.jpg",
      mail: "shivaiah@saibalajiinfra.com",
      phone: "+91 9642311153",
    },
    {
      name: "Mr. B.Vijay Gautham",
      position: "Associate Vice President",
      image: "persons/shivaiah.jpg",
      mail: "vijaygoutham@saibalajiinfra.com",
      phone: "+91 9989932325",
    },
    {
      name: "Mr. W.Prasad",
      position: "AVP- Projects",
      image: "persons/prasad.jpeg",
      mail: "prasad.w@saibalajiinfra.com",
      phone: "+91 7207974311",
    },
  ];

  return (
    <div className="min-h-screen ">
      {/* Header */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={keypersonsImage}
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
              Key Persons
            </h1>
          </motion.div>
        </div>
      </section>
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
          {/* Grid: 3 cards per row for better vertical layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 items-start">
            {keyPersons.map((person, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-large transition-spring border-border/50 h-full flex flex-col">

                  {/* Image Section */}
                  <div className="relative h-[400px] w-full">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full object-cover object-top transition-smooth duration-700 hover:scale-105"
                    />
                  </div>

                  {/* Content Section */}
                  <CardContent className="p-6 flex flex-col items-center text-center bg-white flex-grow">
                    <h2 className="text-2xl font-bold text-foreground mb-2">
                      {person.name}
                    </h2>
                    <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-6 block">
                      {person.position}
                    </span>

                    <div className="w-full h-px bg-border/50 mb-6" />

                    <div className="flex items-center justify-center gap-6 w-full">
                      <a
                        href={`tel:${person.phone}`}
                        className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-sm hover:shadow-md hover:scale-110"
                        title={person.phone}
                      >
                        <Phone className="w-5 h-5" />
                      </a>

                      <a
                        href={`mailto:${person.mail}`}
                        className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-sm hover:shadow-md hover:scale-110"
                        title={person.mail}
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
                  </CardContent>
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