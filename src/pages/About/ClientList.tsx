import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  Users,
  Target,
  TrendingUp,
  Search, // Added
  X,      // Added
  FileText// Added
} from "lucide-react";
import clientlistImage from "@/assets/client-list.jpg";

// --- HERE IS THE CHANGE ---
// Import the clientData from your separate file
// (Adjust the path if you named your file or folder differently)
import clientsData from "@/data/clients.json";

// --- REGISTRATION DATA ---
const registrationDetails = [
  {
    title: "CERTIFICATE OF INCORPORATION",
    value: "U45400AP2011PTC078138",
  },
  {
    title: "ELECTRICAL LICENSE NO. (Telengana)",
    value: "A-7890/2-1221 UP TO 33KV (“A “Grade)",
  },
  {
    title: "ELECTRICAL LICENSE NO. (Karnataka)",
    value: "1CL 12546BNU UP TO 33KV",
  },
  { title: "PAN NO.", value: "A A Q C S 8 0 8 9L" },
  { title: "TELENGANA (HYDERABAD) GST NO.", value: "3 6 A A Q C S 8 0 8 9 L 1 Z 9" },
  { title: "KARNATAKA (BANGALORE) GST NO.", value: "2 9A A Q C S 8 0 8 9 L 1 Z4" },
  { title: "MAHARASHTRA (MUMBAI) GSTNO.", value: "2 7 A A Q C S 8 0 8 9 L 1 Z8" },
  { title: "UTTRAPRADESH GST NO.", value: "0 9 A AQ C S 8 0 8 9 L 1 Z6" },
  { title: "PROVIDENT FUND CODE.", value: "AP/SAO/PTC/74048" },
  { title: "ESI CODE.", value: "52000406870001009" },
];

// --- Animation Variants ---
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

const modalBackdrop = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const modalContent = {
  initial: { opacity: 0, scale: 0.8, y: 50 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.8, y: 50 },
  transition: { type: "spring", stiffness: 300, damping: 30 },
};

// --- CLIENT LIST COMPONENT ---
const ClientList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedClient, setSelectedClient] = useState(null);

  // Normalize the query and show all clients when the query is empty or only whitespace.
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const filteredClients =
    normalizedQuery.length === 0
      ? clientsData
      : clientsData.filter((client) =>
          (client.name || "").toLowerCase().includes(normalizedQuery)
        );

  return (
    <div className="min-h-screen bg-white text-foreground">
      {/* Header (Your existing code) */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={clientlistImage}
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
              Our Clients
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              We are proud to have partnered with the industry's leading
              developers and institutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- NEW SECTION: Client Search & Grid --- */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="whileInView"
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Esteemed Clients
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Browse our partial list of valued clients or use the search to
              find a specific partner.
            </p>

            {/* Search Bar */}
            <div className="relative w-full max-w-lg mx-auto mb-16">
              <input
                type="text"
                placeholder="Search clients by name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-5 py-3 pl-12 rounded-full border-2 border-gray-200 focus:outline-none focus:border-accent transition-colors"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </motion.div>

          {/* Client Grid */}
          <motion.div
            key={filteredClients.length}
            variants={staggerContainer}
            initial="initial"
            animate="whileInView"
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6"
          >
            {filteredClients.map((client) => (
              <motion.div
                key={client.name}
                variants={fadeIn}
                layout // Animate layout changes when filtering
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer border"
                onClick={() => setSelectedClient(client)}
              >
                <div className="h-3/4 p-4 flex items-center justify-center bg-gray-50">
                  <img
                    src={client.logo}
                    alt={`${client.name} Logo`}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="p-4 text-center border-t">
                  <h3 className="text-sm font-semibold h-10 flex items-center justify-center">
                    {client.name}
                  </h3>
                </div>
              </motion.div>
            ))}
            
            {/* Handle No Results */}
            {filteredClients.length === 0 && searchQuery.length > 0 && (
              <p className="col-span-full text-center text-gray-500 py-10">
                No clients found matching your search.
              </p>
            )}
          </motion.div>
        </div>
      </section>
      
      {/* --- NEW SECTION: Registration Details --- */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
             variants={fadeIn}
             initial="initial"
             whileInView="whileInView"
             className="text-center mb-12"
          >
            <FileText className="w-12 h-12 text-accent mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Company Registration Details
            </h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="bg-white rounded-lg shadow-xl overflow-hidden border"
          >
            <ul className="divide-y divide-gray-200">
              {registrationDetails.map((item) => (
                <motion.li
                  key={item.title}
                  variants={fadeIn}
                  className="px-6 py-5 grid grid-cols-1 md:grid-cols-3 gap-2"
                >
                  <span className="text-sm font-semibold text-accent">
                    {item.title}
                  </span>
                  <span className="md:col-span-2 text-gray-700 font-mono text-sm">
                    {item.value}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* --- MODAL for Client Details --- */}
      <AnimatePresence>
        {selectedClient && (
          <motion.div
            variants={modalBackdrop}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedClient(null)} // Click background to close
          >
            <motion.div
              variants={modalContent}
              className="bg-white rounded-lg shadow-xl w-full max-w-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking modal content
            >
              {/* Modal Header */}
              <div className="p-6 border-b flex justify-between items-center">
                <h2 className="text-2xl font-bold text-accent">
                  {selectedClient.name}
                </h2>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  className="p-1 rounded-full text-gray-500 hover:text-gray-900"
                  onClick={() => setSelectedClient(null)}
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </div>
              {/* Modal Body */}
              <div className="p-6">
                <div className="h-40 flex items-center justify-center bg-gray-50 rounded-lg mb-6">
                  <img
                    src={selectedClient.logo}
                    alt={`${selectedClient.name} Logo`}
                    className="max-h-24 max-w-full object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">About this Client</h3>
                <p className="text-gray-700 leading-relaxed">
                  {selectedClient.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ClientList;