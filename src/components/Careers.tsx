import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Briefcase, ArrowRight } from "lucide-react";

const Careers = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const jobs = [
    {
      title: "Senior Electrical Engineer",
      department: "Engineering",
      location: "Mumbai, Maharashtra",
      type: "Full-time",
      experience: "5-8 years",
      description: "Lead electrical design and project execution for transmission line projects.",
    },
    {
      title: "Project Manager",
      department: "Operations",
      location: "Bangalore, Karnataka",
      type: "Full-time",
      experience: "8-12 years",
      description: "Manage end-to-end project delivery for substation construction projects.",
    },
    {
      title: "Solar EPC Specialist",
      department: "Renewable Energy",
      location: "Jaipur, Rajasthan",
      type: "Full-time",
      experience: "3-5 years",
      description: "Design and execute solar power plant projects with focus on quality and efficiency.",
    },
    {
      title: "Safety Officer",
      department: "Health & Safety",
      location: "Hyderabad, Telangana",
      type: "Full-time",
      experience: "4-6 years",
      description: "Ensure compliance with safety standards and conduct site inspections.",
    },
  ];

  return (
    <section id="careers" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-4 block">
            Careers
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Join Our Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Build your career with India's leading electrical infrastructure company. We offer exciting opportunities for talented professionals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group h-full hover:shadow-large transition-spring border-border/50">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <Badge className="bg-accent text-accent-foreground">
                      {job.department}
                    </Badge>
                    <Badge variant="outline" className="border-accent/30 text-accent">
                      {job.type}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl font-bold group-hover:text-accent transition-smooth">
                    {job.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {job.description}
                  </p>
                  <div className="flex flex-wrap gap-4 pt-2">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 text-accent" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Briefcase className="w-4 h-4 text-accent" />
                      <span>{job.experience}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-gradient-accent hover:shadow-glow transition-spring group/btn">
                    Apply Now
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-smooth" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-4">
            Don't see a position that fits? Send us your resume at
          </p>
          <a
            href="mailto:careers@saibalajiinfra.com"
            className="text-accent font-semibold hover:underline text-lg"
          >
            careers@saibalajiinfra.com
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Careers;
