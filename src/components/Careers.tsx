import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useRef } from 'react'; // Import useState and useRef
// Assuming these UI components exist and function as intended
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Briefcase, ArrowRight, X, User, Mail, Phone, Upload } from "lucide-react"; 

import careerImage from "@/assets/career.jpg";

// --- START: APPLICATION MODAL COMPONENT ---
const ApplicationModal = ({ isOpen, onClose, jobTitle }) => {
  const [fileName, setFileName] = useState("");
  const fileInputRef = useRef(null);
  
  // Handle file selection and update the displayed file name
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFileName(file ? file.name : "");
  };

  // Simple form submission handler (replace with actual API call)
  const handleSubmit = (event) => {
    event.preventDefault();
    // 1. Collect form data (Name, Email, Phone, File)
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    
    // 2. Placeholder for submission logic (e.g., Axios post)
    console.log("Submitting application for:", jobTitle, data);

    // 3. Close modal and reset state
    alert(`Application for ${jobTitle} submitted successfully! (Simulated)`);
    onClose();
  };

  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const contentVariants = {
    hidden: { y: "100vh", opacity: 0, scale: 0.8 },
    visible: { y: "0", opacity: 1, scale: 1, transition: { type: "spring", stiffness: 50, damping: 15 } },
    exit: { y: "100vh", opacity: 0 },
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 backdrop-blur-sm"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div
            className="w-full max-w-lg rounded-lg bg-white shadow-2xl relative"
            variants={contentVariants}
          >
            <Card className="border-none">
              <CardHeader className="flex flex-row items-center justify-between p-6 border-b">
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Apply for {jobTitle}
                </CardTitle>
                <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full">
                  <X className="w-5 h-5 text-gray-600" />
                </Button>
              </CardHeader>

              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name Input */}
                  <div className="space-y-1">
                    <label htmlFor="name" className="text-sm font-medium block">Name</label>
                    <div className="flex items-center border rounded-lg p-2">
                      <User className="w-5 h-5 text-gray-400 mr-2" />
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="w-full focus:outline-none"
                        placeholder="Your full name"
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1">
                    <label htmlFor="email" className="text-sm font-medium block">Email</label>
                    <div className="flex items-center border rounded-lg p-2">
                      <Mail className="w-5 h-5 text-gray-400 mr-2" />
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full focus:outline-none"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  {/* Phone Input */}
                  <div className="space-y-1">
                    <label htmlFor="phone" className="text-sm font-medium block">Phone Number</label>
                    <div className="flex items-center border rounded-lg p-2">
                      <Phone className="w-5 h-5 text-gray-400 mr-2" />
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        className="w-full focus:outline-none"
                        placeholder="+91-XXXXXXXXXX"
                      />
                    </div>
                  </div>

                  {/* File Upload Input */}
                  <div className="space-y-1">
                    <label className="text-sm font-medium block">Upload CV/Resume (PDF/DOCX)</label>
                    <div className="flex items-center border rounded-lg overflow-hidden">
                      <input
                        ref={fileInputRef}
                        id="resume"
                        name="resume"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        required
                        onChange={handleFileChange}
                        className="hidden" // Hide the default input
                      />
                      {/* Custom Choose File Button */}
                      <Button
                        type="button"
                        onClick={() => fileInputRef.current.click()}
                        className="flex items-center bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-none h-10 px-4"
                      >
                        <Upload className="w-4 h-4 mr-2" />
                        Choose File
                      </Button>
                      {/* File Name Display Label */}
                      <span className="truncate flex-1 p-2 text-sm text-gray-500">
                        {fileName || "No file chosen"}
                      </span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button type="submit" className="w-full h-12 mt-4 bg-accent hover:bg-accent/90">
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
// --- END: APPLICATION MODAL COMPONENT ---


const Careers = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  // State for Modal Management
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentJobTitle, setCurrentJobTitle] = useState("");

  const handleApplyClick = (title) => {
    setCurrentJobTitle(title);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentJobTitle("");
  };

  const jobs = [
    {
      title: "Design Engineers",
      department: "MEP, Electrical",
      type: "Full-time",
      experience: "3-5 yrs Experience",
      description: "Creates integrated designs and detailed engineering plans for electrical distribution, lighting, and all coordinated Mechanical, Electrical, and Plumbing systems.",
    },
    {
      title: "Site Engineers",
      department: "Electrical,Fire,Fighting,Plumbing,HVAC",
      type: "Full-time",
      experience: "3-5 yrs Experience",
      description: "Manages on-site execution, supervision, and quality assurance of all MEP installations; ensures electrical systems, fire safety equipment, plumbing networks, and HVAC components are installed safely, correctly, and according to design specifications and project timelines.",
    },
    {
      title: "Tender costing Engineers",
      department: "Electrical,Fire,Fighting,Plumbing,HVAC",
      type: "Full-time",
      experience: "3-5 yrs Experience",
      description: "Analyzes project blueprints and specifications to prepare comprehensive bills of quantities (BOQ) and accurate cost estimates for all MEP disciplines, including Electrical, Fire Fighting, Plumbing, and HVAC, leading to competitive and profitable tender submissions.",
    },
    {
      title: "Planning Engineers",
      department: "MEP",
      type: "Full-time",
      experience: "5-7 yrs Experience",
      description: "Develops, maintains, and monitors the integrated project schedule and critical path for all Mechanical, Electrical, and Plumbing scopes.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Overlay is handled by the ApplicationModal component */}
      <ApplicationModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        jobTitle={currentJobTitle} 
      />

      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={careerImage}
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
              Our Careers
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Join our team and grow with a culture built on excellence and integrity.
            </p>
          </motion.div>
        </div>
      </section>
      
      <section id="careers" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-accent font-semibold tracking-wider uppercase text-2xl mb-4 block">
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
                        <Briefcase className="w-4 h-4 text-accent" />
                        <span>{job.experience}</span>
                      </div>
                    </div>
                    {/* Updated Button to trigger the modal */}
                    <Button 
                      className="w-full mt-4 bg-gradient-accent hover:shadow-glow transition-spring group/btn"
                      onClick={() => handleApplyClick(job.title)}
                    >
                      Apply Now
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-smooth" />
                    </Button>
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

export default Careers;