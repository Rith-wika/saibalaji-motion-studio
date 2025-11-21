import { motion } from "framer-motion";
import { Award, Users, Target, TrendingUp } from "lucide-react";
import aboutImage from "@/assets/about-us.jpg";

const AboutPage = () => {
  const stats = [
    { icon: Award, value: "40+", label: "Years Experience" },
    { icon: Users, value: "500+", label: "Expert Team" },
    { icon: Target, value: "1000+", label: "Projects Completed" },
    { icon: TrendingUp, value: "98%", label: "Client Satisfaction" },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={aboutImage}
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
              About Us
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              An ISO 9001:2015–certified Electrical ‘A’ Grade MEP contractor committed to reliable and high-quality service delivery
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Vision Quality */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center group"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-accent flex items-center justify-center shadow-glow transform group-hover:scale-110 transition-spring">
                <Target className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our mission is to provide Excellent Quality M.E.P services to our customers by meeting their design, time schedule, and prompt after sales service requirements, resulting in total customer loyalty and repeat business.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center group"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-accent flex items-center justify-center shadow-glow transform group-hover:scale-110 transition-spring">
                <TrendingUp className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the largest and most preferred Mechanical, Electrical, Plumbing, and Fire Fighting contractor in India, with the ability to complete a project on time within budget and to the client's satisfaction.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center group"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-accent flex items-center justify-center shadow-glow transform group-hover:scale-110 transition-spring">
                <Award className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Quality</h3>
              <p className="text-muted-foreground leading-relaxed">
                We understand that we are a partner with our customers in delivering high-quality design and services at a reasonable cost. We concentrate on providing exceptional service to our customers and construct with the highest desire to achieve total customer satisfaction.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-accent opacity-20 blur-2xl rounded-3xl" />
                <img
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80"
                  alt="About SAI BALAJI"
                  className="relative rounded-2xl shadow-large w-full h-[400px] object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-foreground">
                Multi-Disciplinary Engineering Excellence
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Incorporated in 2011 with an integrated approach to fulfill various needs of utility services to our clients across the country, exclusively dedicated to 5 major states namely Andhra Pradesh, Telangana, Maharashtra, Karnataka and Delhi.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                As an ISO 9001:2015 certified organization, we deliver multi-disciplinary engineering services including Mechanical, Electrical, Plumbing, and Fire Fighting solutions with unwavering commitment to quality and customer satisfaction.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span className="text-foreground font-medium">ISO 9001:2015 Certified</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span className="text-foreground font-medium">'A' Grade MEP License</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span className="text-foreground font-medium">Government Approved</span>
                </div>
              </div>
            </motion.div>
          </div>

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

export default AboutPage;
