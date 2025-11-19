import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail } from "lucide-react";
import ourStoryImage from "@/assets/our-story.jpg";

const KeyPersonsPage = () => {
  const keyPersons = [
    {
      name: "Mr. A.Ramaprabhu",
      position: "Managing Director",
      image: "/persons/ramaprabhu.png",
      message: "I take this pleasure to introduce our organization . ",
      mail:"saibalajitechnologies@gmail.com",
      phone:"+91 9848246533",
    },
    {
      name: "Mr. A.Purshottam",
      position: "Executive Director",
      image: "/persons/purshottamu.jpeg",
      message: "We fully support the customers who want to use the quality products with excellence performance.",
      mail:"attepally2008@gmail.com",
      phone:"+91 9848494706",
    },
    {
      name: "Mr.Rakesh Bharat Mharate",
      position:"Regional Head- Mumbai",
      image: "persons/rakeshbharatmharate.jpeg",
      message: "We fully support the customers who want to use the quality products with excellence performance.",
      mail:"rmhatre2000@gmail.com",
    },
    {
      name: "Mr.Ashwani Kumar Shukla",
      position:"Regional Head North",
      image: "persons/ashwanikumarshukla.jpeg",
      message: "We fully support the customers who want to use the quality products with excellence performance.",
      mail:" rmnorth.sbiipl@gmail.com",
    },
    {
      name: "Mr.Hari Shankar Ray",
      position:"VP, Contracts",
      image: "persons/harishankarray.jpeg",
      message: "We fully support the customers who want to use the quality products with excellence performance.",
      mail:"hs.sbiipl@gmail.com",
      phone:"+91 9848745295",
    },
    {
      name: "Mr.B.Shivaiah",
      position:"Procurement Head",
      image: "persons/shivaiah.jpeg",
      message: "We fully support the customers who want to use the quality products with excellence performance.",
      mail:"shivateja2004@gmail.com",
      phone:"+91 9642311153",
    },
     
  ];

  return (
    <div className="min-h-screen ">
      {/* Header */}
       <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={ourStoryImage}
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
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              One of the most reliable & eligible Electrical 'A' Grade License Holder MEP Contractors having ISO-9001:2015 Certified
            </p>
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
          {/* Outer Grid: 2 cards per row */}
          <div className=" grid md:grid-cols-2 gap-16 items-start"> 
          {keyPersons.map((person, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden hover:shadow-large transition-spring border-border/50">
                
                {/* KEY CHANGE: Internal Grid - Image beside Content (2 columns on medium screens and up) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  
                  {/* Image */}
                  {/* NOTE: We've removed the fixed height h-[400px] to allow it to flex vertically */}
                  <div className="relative **h-full**"> 
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-smooth duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
                    
                    {/* Social Links */}
                    <div className="absolute bottom-6 left-6 flex space-x-3">
                      <a 
                        className="w-12 h-12 rounded-full bg-accent flex items-center justify-center hover:scale-110 transition-spring shadow-glow"
                        href={`tel:${person.phone}`}
                        aria-label={`Call ${person.name}`}
                        >
                        <Phone className="w-6 h-6 text-accent-foreground" />
                      </a>
                      <a 
                        href={`mailto:${person.mail}`}
                        className="w-12 h-12 rounded-full bg-accent flex items-center justify-center hover:scale-110 transition-spring shadow-glow "
                        aria-label={`Email ${person.name}`}
                        >
                        <Mail className="w-6 h-6 text-accent-foreground"/>
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                  <CardContent className="p-8 lg:p-12 flex flex-col justify-center **h-full**">
                    <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-4 block">
                      {person.position}
                    </span>
                    <h2 className="text-2xl md:text-md font-bold text-foreground mb-6">
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