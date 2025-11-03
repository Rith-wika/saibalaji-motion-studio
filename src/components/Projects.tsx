import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Zap } from "lucide-react";
import projectImage from "@/assets/projects.jpg";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const ongoingProjects = [
    {
      title: "400kV Transmission Line Project",
      location: "Maharashtra",
      date: "2024 - Ongoing",
      capacity: "400 MW",
      description: "High voltage transmission infrastructure connecting renewable energy sources to the grid.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Solar Power Plant EPC",
      location: "Rajasthan",
      date: "2024 - Ongoing",
      capacity: "50 MW",
      description: "Complete turnkey solar power plant with advanced monitoring systems.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Smart Substation Modernization",
      location: "Gujarat",
      date: "2024 - Ongoing",
      capacity: "220 kV",
      description: "Upgrading existing substations with smart grid technology and automation.",
      image: "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?auto=format&fit=crop&w=600&q=80"
    },
  ];

  const completedProjects = [
    {
      title: "132kV Substation Construction",
      location: "Karnataka",
      date: "2023",
      capacity: "132 kV",
      description: "Successfully commissioned substation serving industrial corridor.",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Wind Farm Electrical Infrastructure",
      location: "Tamil Nadu",
      date: "2023",
      capacity: "100 MW",
      description: "Complete electrical system for wind energy park including collection system.",
      image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Urban Distribution Network Upgrade",
      location: "Telangana",
      date: "2022",
      capacity: "33 kV",
      description: "Modernized distribution infrastructure for smart city development.",
      image: "https://images.unsplash.com/photo-1548083971-e8c4242c3990?auto=format&fit=crop&w=600&q=80"
    },
  ];

  const ProjectCard = ({ project, index }: { project: any; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card className="group overflow-hidden hover:shadow-large transition-smooth border-border/50">
        <div className="relative h-64 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent" />
          <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground shadow-glow">
            {project.capacity}
          </Badge>
        </div>
        <CardHeader>
          <CardTitle className="text-xl font-bold group-hover:text-accent transition-smooth">
            {project.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-muted-foreground text-sm leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 text-accent" />
              <span>{project.location}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4 text-accent" />
              <span>{project.date}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <div className="min-h-screen">
       <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={projectImage}
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
              Projects
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              One of the most reliable & eligible Electrical 'A' Grade License Holder MEP Contractors having ISO-9001:2015 Certified
            </p>
          </motion.div>
        </div>
      </section> 
    <section id="projects" className=" bg-background ">

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-4 block pt-10">
            Our Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Powering Progress Across India
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From transmission lines to renewable energy, discover our portfolio of cutting-edge electrical infrastructure projects.
          </p>
        </motion.div>

        <Tabs defaultValue="ongoing" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="ongoing" className="text-base">
              <Zap className="w-4 h-4 mr-2" />
              Ongoing Projects
            </TabsTrigger>
            <TabsTrigger value="completed" className="text-base">
              Completed Projects
            </TabsTrigger>
          </TabsList>

          <TabsContent value="ongoing">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ongoingProjects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="completed">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {completedProjects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
    </div>
  );
};

export default Projects;
