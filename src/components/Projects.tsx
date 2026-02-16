import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { PageHero } from "@/components/PageHero";
import { useInView } from "react-intersection-observer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Zap, CheckCircle } from "lucide-react";
import projectImage from "@/assets/projects.jpg";
import projectData from "@/data/project.json";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [searchParams] = useSearchParams();
  const serviceParam = searchParams.get("service");

  // --- Updated Project Data with types and contracts ---

  const { ongoingProjects, completedProjects } = projectData;
  // --- State for Filters ---
  const [ongoingType, setOngoingType] = useState("all");
  const [ongoingLocation, setOngoingLocation] = useState("all");
  const [ongoingService, setOngoingService] = useState("all");

  const [completedCategory, setCompletedCategory] = useState("all");
  const [completedContract, setCompletedContract] = useState("all");
  const [completedSubFilter, setCompletedSubFilter] = useState("all");
  const [completedService, setCompletedService] = useState("all");

  // --- Initialize filter from URL param ---
  useEffect(() => {
    if (serviceParam) {
      setOngoingService(serviceParam);
      setCompletedService(serviceParam);
    }
  }, [serviceParam]);

  // --- Reset sub-filter when primary completed contract filter changes ---
  useEffect(() => {
    setCompletedSubFilter("all");
  }, [completedContract]);

  // --- Dynamically generate filter options ---
  const ongoingCategories = useMemo(() => ["all", ...new Set(ongoingProjects.map((p) => p.category))], [ongoingProjects]);
  const ongoingLocations = useMemo(() => ["all", ...new Set(ongoingProjects.map((p) => p.location))], [ongoingProjects]);

  // Updated services list based on user requirements and data
  const availableServices = [
    "all",
    "Electrical",
    "Plumbing & Public Health Engineering",
    "Fire Fighting Systems",
    "ELV",
    "HVAC"
  ];

  const ongoingServices = useMemo(() => availableServices, []);

  const completedCategories = useMemo(() => ["all", ...new Set(completedProjects.map((p) => p.category))], [completedProjects]);
  const completedContractTypes = useMemo(() => ["all", ...new Set(completedProjects.map((p) => p.contractType))], [completedProjects]);
  const completedCivilTypes = useMemo(() => ["all", ...new Set(completedProjects.filter(p => p.contractType === "CIVIL & STRUCTURAL CONTRACTS").map(p => p.type))], [completedProjects]);
  const completedMepLocations = useMemo(() => ["all", ...new Set(completedProjects.filter(p => p.contractType === "MEP CONTRACTS").map(p => p.location))], [completedProjects]);
  const completedServices = useMemo(() => availableServices, []);

  // --- Filtered Project Lists ---
  const filteredOngoingProjects = useMemo(() => {
    return ongoingProjects.filter((project) => {
      const categoryMatch = ongoingType === "all" || project.category === ongoingType;
      const locationMatch = ongoingLocation === "all" || project.location === ongoingLocation;
      // Check if the service array includes the selected service
      const serviceMatch = ongoingService === "all" || ((project as any).services && (project as any).services.includes(ongoingService));
      return categoryMatch && locationMatch && serviceMatch;
    });
  }, [ongoingProjects, ongoingType, ongoingLocation, ongoingService]);

  const filteredCompletedProjects = useMemo(() => {
    return completedProjects.filter((project) => {
      const categoryMatch = completedCategory === "all" || project.category === completedCategory;
      const contractMatch = completedContract === "all" || project.contractType === completedContract;
      // Check if the service array includes the selected service
      const serviceMatch = completedService === "all" || ((project as any).services && (project as any).services.includes(completedService));

      if (!categoryMatch || !contractMatch || !serviceMatch) return false;

      if (completedContract === "CIVIL & STRUCTURAL CONTRACTS") {
        return completedSubFilter === "all" || project.type === completedSubFilter;
      }
      if (completedContract === "MEP CONTRACTS") {
        return completedSubFilter === "all" || project.location === completedSubFilter;
      }
      return true;
    });
  }, [completedProjects, completedContract, completedSubFilter, completedCategory, completedService]);

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
            {/* Map through services array */}
            {(project as any).services && (project as any).services.map((service: string, i: number) => (
              <Badge key={i} variant="secondary" className="backdrop-blur-md bg-white/80">
                {service}
              </Badge>
            ))}
          </div>
        </div>
        <CardHeader>
          <CardTitle className="text-xl font-bold group-hover:text-accent transition-smooth">
            {project.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 flex-grow flex flex-col justify-between">
          <p className="text-muted-foreground text-sm leading-relaxed">
            {project["Scope of Work"]}
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 text-accent" />
              <span>{project.location}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span className="font-semibold text-accent">{project.sft}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <div className="min-h-screen">
      <PageHero
        title="Projects"
        description="Showcasing our commitment to quality through successful, end-to-end project delivery."
        imageUrl={projectImage}
      />
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
              <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center flex-wrap">
                <Select value={ongoingService} onValueChange={setOngoingService}>
                  <SelectTrigger className="w-full sm:w-[200px] border-accent/50 bg-accent/5">
                    <SelectValue placeholder="Filter by Service" />
                  </SelectTrigger>
                  <SelectContent>
                    {ongoingServices.map(service => (
                      <SelectItem key={service} value={service}>{service === 'all' ? 'All Services' : service}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

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

              {filteredOngoingProjects.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredOngoingProjects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 text-muted-foreground">
                  No projects found matching the selected filters.
                </div>
              )}

            </TabsContent>

            <TabsContent value="completed">
              {/* --- Filters for Completed Projects --- */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center flex-wrap">
                <Select value={completedService} onValueChange={setCompletedService}>
                  <SelectTrigger className="w-full sm:w-[240px] border-accent/50 bg-accent/5">
                    <SelectValue placeholder="Filter by Service" />
                  </SelectTrigger>
                  <SelectContent>
                    {completedServices.map(service => (
                      <SelectItem key={service} value={service}>{service === 'all' ? 'All Services' : service}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

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

              {filteredCompletedProjects.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredCompletedProjects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 text-muted-foreground">
                  No projects found matching the selected filters.
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Projects;
