import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import Projects from "./components/Projects";
import ServicesPage from "./pages/ServicesPage";
import Achievements from "./components/Achievements";
import KeyPersonsPage from "./pages/KeyPersonsPage";
import Gallery from "./components/Gallery";
import Careers from "./components/Careers";
import Contact from "./components/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="projects" element={<div className="pt-24"><Projects /></div>} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="achievements" element={<div className="pt-24"><Achievements /></div>} />
            <Route path="key-persons" element={<KeyPersonsPage />} />
            <Route path="gallery" element={<div className="pt-24"><Gallery /></div>} />
            <Route path="careers" element={<div className="pt-24"><Careers /></div>} />
            <Route path="contact" element={<div className="pt-24"><Contact /></div>} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
