import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollTop";
import Home from "./pages/Home/Home";
import AboutCompany from "./pages/About/AboutCompany";
import OurStory from "./pages/About/OurStory";
import ClientList from "./pages/About/ClientList";
import ProductsPage from "./pages/ProductsPage";
import Projects from "./components/Projects";
import ServicesPage from "./pages/ServicesPage";
import Credentials from "./components/Credentials";
import KeyPersonsPage from "./pages/KeyPersonsPage";
import Gallery from "./components/Gallery";

import Contact from "./components/Contact";
import NotFound from "./pages/NotFound";
import SaiBalajiMEP from "./pages/GroupCompanies/SaiBalajiMEP";
import SaiBalajiPowerControl from "./pages/GroupCompanies/SaiBalajiPowerControl";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="about-company" element={<AboutCompany />} />
            <Route path="our-story" element={<OurStory />} />
            <Route path="client-list" element={<ClientList />} />

            {/* Keep old routes temporarily if needed, or remove them. User requested removal from dropdown, but good to have redirects or just new structure. 
                I'll keep the old 'about' as an alias or just leave it out as requested clean up. 
                Existing links might break so I will comment them out or remove. 
            */}

            <Route path="products" element={<ProductsPage />} />
            <Route path="projects" element={<Projects />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="credentials" element={<Credentials />} />
            <Route path="key-persons" element={<KeyPersonsPage />} />

            <Route path="gallery" element={<Gallery />} />

            <Route path="contact" element={<Contact />} />

            {/* Group Companies */}
            <Route path="group-companies/mep-llp" element={<SaiBalajiMEP />} />
            <Route path="group-companies/power-control-llp" element={<SaiBalajiPowerControl />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
