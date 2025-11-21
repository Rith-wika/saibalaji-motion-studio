import { motion } from "framer-motion";
import {
  Award,
  Users,
  Target,
  TrendingUp,
  CheckSquare, // Added icon
  FileText,    // Added icon
  Check,       // Added icon
} from "lucide-react";
import qualitypolicyImage from "@/assets/quality-policy.jpg";

// --- ADD YOUR PICTORIAL REPRESENTATIONS HERE ---
// 1. Add an image for the "Quality Assurance Programme" section
import qaProgramImage from "@/assets/civil-project.jpg"; // <-- REPLACE THIS
// 2. Add an image for the "Capabilities" section
import capabilitiesImage from "@/assets/civil-project.jpg"; // <-- REPLACE THIS

// Animation variants for Framer Motion
const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeInOut" },
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Data for the 6-point grid (from your text)
const qaPoints = [
  {
    icon: Target,
    title: "Planned & Disciplined Approach",
    description:
      "Our system provides a planned & disciplined approach for the achievement of the quality objectives of Sai Balaji Infra (India) Private Limited.",
  },
  {
    icon: Users,
    title: "Verification & Prevention",
    description:
      "This Programme emphasizes the use of various verification activities which are to be performed by assigned personnel to monitor, report, prevent, deflect and correct conditions adverse to quality.",
  },
  {
    icon: CheckSquare,
    title: "Policies & General Practices",
    description:
      "The document describes the policies and general practices which are to be followed on all projects to implement actions required to comply with the honest possible quality, appropriate to the project.",
  },
  {
    icon: TrendingUp,
    title: "Periodic Review",
    description:
      "The Quality Assurance programme is required to be periodically reviewed and if necessary, revised to meet any changes in contact requirements.",
  },
  {
    icon: FileText,
    title: "Objective Documentation",
    description:
      "The programme will provide for the generation of documentation necessary to provide objective evidence of achievement of quality objectives in all phases of the project.",
  },
  {
    icon: Award,
    title: "Transparent Records",
    description:
      "Document & Quality records testifying to the satisfactory execution of required activities will be readily available to authorized personnel.",
  },
];

// Data for the capabilities list (from your text)
const capabilities = [
  "With its computing facilities engineering exports, own construction equipments and advice from senior level consultants. SAI BALAJI INFRA (INDIA) PRIVATE LIMITED has the capability and experience has been providing the best results for its valued clients.",
  "Now within a short span. The SAI BALAJI INFRA (INDIA) PRIVATE LIMITED has a fast growing group offers wide range of engineering services in power sector, infra and commercial construction sector.",
  "The continued patronage and faith respond by our customers in the proof of our credentials and capacity.",
  "Contracting with us gives you access to an in over 200 capable workers trained in all aspects of their industry we provide quick transportation of this work force along with machinery and materials.",
  "We have the experts to meet the varying needs of many customers, from concept of MEP Engineering activities, including commissioning of Heavy Equipment’s, power installations, instrumentation, Trouble shooting, operations and maintenance.",
];

const QualityPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header (Your existing code) */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={qualitypolicyImage}
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
              Quality Policy
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Committed to delivering consistent quality through adherence to standards and continual improvement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- NEW SECTION 1: Quality Assurance Programme Intro --- */}
      <section className="py-16 md:py-24 bg-white text-foreground">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          {/* Pictorial Representation (Image) */}
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="whileInView"
            className="rounded-lg overflow-hidden shadow-xl"
          >
            <img
              src={qaProgramImage} // <-- YOUR NEW IMAGE
              alt="Quality Assurance in action"
              className="w-full h-full object-cover aspect-[4/3]"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="whileInView"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-accent">
              QUALITY ASSURANCE PROGRAMME
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Electrician is your single source for a complete range of
              high-quality electrical services, including design/build,
              engineering and maintenance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- NEW SECTION 2: QA Points Grid --- */}
      <section className="py-16 md:py-24 bg-gray-50 text-foreground">
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeIn}
            initial="initial"
            whileInView="whileInView"
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Our Quality Assurance Approach
          </motion.h2>
          
          {/* Animated Staggered Grid */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {qaPoints.map((point) => (
              <motion.div
                key={point.title}
                variants={fadeIn}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-accent"
              >
                <point.icon className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- NEW SECTION 3: Capabilities & Experience --- */}
      <section className="py-16 md:py-24 bg-white text-foreground">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Our Capabilities & Experience
            </h2>
            <ul className="space-y-5">
              {capabilities.map((item, index) => (
                <motion.li
                  key={index}
                  variants={fadeIn}
                  className="flex items-start"
                >
                  <Check className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 leading-relaxed">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Pictorial Representation (Image) */}
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="whileInView"
            className="rounded-lg overflow-hidden shadow-xl"
          >
            <img
              src={capabilitiesImage} // <-- YOUR NEW IMAGE
              alt="Our capable workforce and equipment"
              className="w-full h-full object-cover aspect-[4/3]"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default QualityPolicy;