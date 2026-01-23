import { motion } from "framer-motion";
import { Award, Users, Target, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import whyusImage from "@/assets/why-us.jpg";
import CombinedAnimatedFeatures from "@/components/CombinedAnimatedFeatures";

const WhyUs = () => {
  const stats = [
    { icon: Award, value: "21", label: "Years Experience" },
    { icon: Users, value: "500+", label: "Expert Team" },
    { icon: Target, value: "100+", label: "Projects Completed" },
    { icon: TrendingUp, value: "98%", label: "Client Satisfaction" },
  ];
  const highlights = [
    "Super grade-1 in EHV & HV Substation Works",
    "Well Defined and Co-ordinated Process for Seamless Installations",
    "Technical Expertise and quality that is unsurpassable",
    "Highest standard in fire safety to save life & Property",
    "Understanding the needs Exceed the expectations",
    "In-house Electro Mechanical Engineers who are highly Skilled"
  ];

  return (
    <div className="min-h-screen ">
      {/* Header */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={whyusImage}
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
              Why Us
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Trusted expertise, consistent quality, and reliable project delivery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Vision Quality */}
      <section className="py-24 bg-secondary/30">
        <Card className=" mt-12 border-primary/20">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4">Types of Projects We Handle</h2>
            <p className="text-lg text-primary mb-4 font-semibold">
              We excel in the field of consultancy and projects building to execute the projects of:
            </p>
            {/* <ul className="space-y-3 pl-0 list-none">
                {projects.map((project, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <Lightbulb className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{project}</span>
                  </motion.li> 
                ))}
              </ul> */}
            <div className="w-full bg-white">
              <div className="max-w-[1400px] mx-auto px-4 ">
                <CombinedAnimatedFeatures />
              </div>
            </div>
          </CardContent>
        </Card>

      </section>

      {/* Company Overview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">


          {/* Highlights Section */}
          <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-4 block">
                  Why Choose Us
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Excellence in Every Project
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group p-8 rounded-2xl bg-card hover:shadow-large transition-spring border border-border/50 hover:-translate-y-2"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 mt-2 rounded-full bg-accent flex-shrink-0 group-hover:scale-150 transition-spring" />
                      <p className="text-lg text-foreground font-medium leading-relaxed">
                        {highlight}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-accent flex items-center justify-center shadow-glow transform group-hover:scale-110 transition-spring">
                  <stat.icon className="w-8 h-8 text-accent" />
                </div>
                <h4 className="text-3xl font-bold text-foreground mb-2">{stat.value}</h4>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;
