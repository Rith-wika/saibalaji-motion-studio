import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      content: "123 Industrial Area, Sector 5, Mumbai, Maharashtra 400001",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+91 22 1234 5678",
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "info@saibalajiinfra.com",
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: "Mon - Sat: 9:00 AM - 6:00 PM",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-4 block">
            Contact Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Start a Conversation
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind? Get in touch with us and let's discuss how we can power your vision.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="shadow-large border-border/50">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name
                      </label>
                      <Input
                        placeholder="John Doe"
                        required
                        className="transition-smooth focus:shadow-soft"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        required
                        className="transition-smooth focus:shadow-soft"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      placeholder="+91 98765 43210"
                      required
                      className="transition-smooth focus:shadow-soft"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <Input
                      placeholder="Project Inquiry"
                      required
                      className="transition-smooth focus:shadow-soft"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      placeholder="Tell us about your project requirements..."
                      rows={6}
                      required
                      className="transition-smooth focus:shadow-soft resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-accent hover:shadow-glow transition-spring text-lg py-6"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-medium transition-spring border-border/50"
                >
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-spring shadow-soft">
                      <info.icon className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">{info.title}</h3>
                      <p className="text-muted-foreground text-sm">{info.content}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Map Placeholder */}
            <Card className="overflow-hidden shadow-large border-border/50">
              <div className="h-64 bg-secondary/50 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709658!3d19.082502006506866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-smooth duration-700"
                />
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
