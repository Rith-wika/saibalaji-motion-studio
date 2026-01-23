import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, User, Zap, CheckCircle } from "lucide-react";
import projectImage from "@/assets/projects.jpg";
import projectData from "@/data/project.json";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // --- Updated Project Data with types and contracts ---

  const { ongoingProjects, completedProjects } = projectData;
  // --- State for Filters ---
  const [ongoingType, setOngoingType] = useState("all");
  const [ongoingLocation, setOngoingLocation] = useState("all");
  const [completedCategory, setCompletedCategory] = useState("all");
  const [completedContract, setCompletedContract] = useState("all");
  const [completedSubFilter, setCompletedSubFilter] = useState("all");

  // --- Reset sub-filter when primary completed contract filter changes ---
  useEffect(() => {
    setCompletedSubFilter("all");
  }, [completedContract]);

  // --- Dynamically generate filter options ---
  const ongoingCategories = useMemo(() => ["all", ...new Set(ongoingProjects.map((p) => p.category))], [ongoingProjects]);
  const ongoingLocations = useMemo(() => ["all", ...new Set(ongoingProjects.map((p) => p.location))], [ongoingProjects]);

  const completedCategories = useMemo(() => ["all", ...new Set(completedProjects.map((p) => p.category))], [completedProjects]);
  const completedContractTypes = useMemo(() => ["all", ...new Set(completedProjects.map((p) => p.contractType))], [completedProjects]);
  const completedCivilTypes = useMemo(() => ["all", ...new Set(completedProjects.filter(p => p.contractType === "CIVIL & STRUCTURAL CONTRACTS").map(p => p.type))], [completedProjects]);
  const completedMepLocations = useMemo(() => ["all", ...new Set(completedProjects.filter(p => p.contractType === "MEP CONTRACTS").map(p => p.location))], [completedProjects]);


  // --- Filtered Project Lists ---
  const filteredOngoingProjects = useMemo(() => {
    return ongoingProjects.filter((project) => {
      const categoryMatch = ongoingType === "all" || project.category === ongoingType;
      const locationMatch = ongoingLocation === "all" || project.location === ongoingLocation;
      return categoryMatch && locationMatch;
    });
  }, [ongoingProjects, ongoingType, ongoingLocation]);

  const filteredCompletedProjects = useMemo(() => {
    return completedProjects.filter((project) => {
      const categoryMatch = completedCategory === "all" || project.category === completedCategory;
      const contractMatch = completedContract === "all" || project.contractType === completedContract;

      if (!categoryMatch || !contractMatch) return false;

      if (completedContract === "CIVIL & STRUCTURAL CONTRACTS") {
        return completedSubFilter === "all" || project.type === completedSubFilter;
      }
      if (completedContract === "MEP CONTRACTS") {
        return completedSubFilter === "all" || project.location === completedSubFilter;
      }
      return true;
    });
  }, [completedProjects, completedContract, completedSubFilter, completedCategory]);

  const ProjectCard = ({ project, index }: { project: any; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card className="group overflow-hidden hover:shadow-large transition-smooth border-border/50 h-full flex flex-col">
        <div className="relative h-64 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
          />
          <div className="absolute top-4 right-4 flex flex-col gap-2 items-end">
            <Badge className="bg-accent text-accent-foreground shadow-glow">
              {project.category}
            </Badge>
            <Badge variant="outline" className="bg-black/50 text-white border-none backdrop-blur-sm">
              {project.sft}
            </Badge>
          </div>
        </div>
        <CardHeader>
          <CardTitle className="text-xl font-bold group-hover:text-accent transition-smooth">
            {project.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 flex-grow flex flex-col justify-between">
          <p className="text-muted-foreground text-sm leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 text-accent" />
              <span>{project.location}</span>
            </div>
            {/* <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <User className="w-4 h-4 text-accent" />
                <span>{project.client}</span>
                </div> */}
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
              Showcasing our commitment to quality through successful, end-to-end project delivery.
            </p>
          </motion.div>
        </div>
      </section>
      <section id="projects" className="bg-background py-20">
        <div className="container mx-auto px-4">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-4 block">
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
                <CheckCircle className="w-4 h-4 mr-2" />
                Completed Projects
              </TabsTrigger>
            </TabsList>

            <TabsContent value="ongoing">
              {/* --- Filters for Ongoing Projects --- */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
                <Select value={ongoingType} onValueChange={setOngoingType}>
                  <SelectTrigger className="w-full sm:w-[200px]">
                    <SelectValue placeholder="Filter by Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {ongoingCategories.map(category => (
                      <SelectItem key={category} value={category}>{category === 'all' ? 'All Categories' : category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={ongoingLocation} onValueChange={setOngoingLocation}>
                  <SelectTrigger className="w-full sm:w-[200px]">
                    <SelectValue placeholder="Filter by Location" />
                  </SelectTrigger>
                  <SelectContent>
                    {ongoingLocations.map(location => (
                      <SelectItem key={location} value={location}>{location === 'all' ? 'All Locations' : location}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredOngoingProjects.map((project, index) => (
                  <ProjectCard key={index} project={project} index={index} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="completed">
              {/* --- Filters for Completed Projects --- */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
                <Select value={completedCategory} onValueChange={setCompletedCategory}>
                  <SelectTrigger className="w-full sm:w-[240px]">
                    <SelectValue placeholder="Filter by Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {completedCategories.map(category => (
                      <SelectItem key={category} value={category}>{category === 'all' ? 'All Categories' : category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={completedContract} onValueChange={setCompletedContract}>
                  <SelectTrigger className="w-full sm:w-[240px]">
                    <SelectValue placeholder="Filter by Contract" />
                  </SelectTrigger>
                  <SelectContent>
                    {completedContractTypes.map(type => (
                      <SelectItem key={type} value={type}>{type === 'all' ? 'All Contract Types' : type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* --- Conditional Sub-Filter --- */}
                {completedContract === 'CIVIL & STRUCTURAL CONTRACTS' && (
                  <Select value={completedSubFilter} onValueChange={setCompletedSubFilter}>
                    <SelectTrigger className="w-full sm:w-[240px]">
                      <SelectValue placeholder="Filter by Project Type" />
                    </SelectTrigger>
                    <SelectContent>
                      {completedCivilTypes.map(type => (
                        <SelectItem key={type} value={type}>{type === 'all' ? 'All Project Types' : type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
                {completedContract === 'MEP CONTRACTS' && (
                  <Select value={completedSubFilter} onValueChange={setCompletedSubFilter}>
                    <SelectTrigger className="w-full sm:w-[240px]">
                      <SelectValue placeholder="Filter by Location" />
                    </SelectTrigger>
                    <SelectContent>
                      {completedMepLocations.map(location => (
                        <SelectItem key={location} value={location}>{location === 'all' ? 'All Locations' : location}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCompletedProjects.map((project, index) => (
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
