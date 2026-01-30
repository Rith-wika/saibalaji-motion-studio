import { Outlet } from "react-router-dom";
import Navbar from "@/components/ElectricalNavbar";
import Footer from "@/components/Footer";

const Layout = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 md:pt-36">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
