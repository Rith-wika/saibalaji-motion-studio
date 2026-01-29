import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollTop";
import Home from "./pages/Home/Home";
import AboutPage from "./pages/About/AboutPage";
import OurStory from "./pages/About/OurStory";
import WhyUs from "./pages/About/WhyUs";
import QualityPolicy from "./pages/About/QualityPolicy";
import ClientList from "./pages/About/ClientList";
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
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="about/ourstory" element={<OurStory />} />
            <Route path="about/whyus" element={<WhyUs />} />
            <Route path="about/qualitypolicy" element={<QualityPolicy />} />
            <Route path="about/clientlist" element={<ClientList />} />
            <Route path="projects" element={<Projects />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="achievements" element={<Achievements />} />
            <Route path="key-persons" element={<KeyPersonsPage />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="careers" element={<Careers />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
