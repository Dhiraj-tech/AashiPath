import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Carsousel from "./components/Carsousel";
import Stats from "./components/Stats";
import Choose from "./components/Choose";
import Process from "./components/Process";
import Services from "./components/Services";
import Industries from "./components/Industries";
import Team from "./components/Team";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import LearnMore from "./components/LearnMore";
import ServiceDetails from "./components/ServiceDetails";
import IndustryDetails from "./components/IndustryDetails";

import PageHeader from "./components/PageHeader";
import About from "./pages/About";
import Careers from "./pages/Careers";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";

function HomePage() {
  return (
    <>
      <Carsousel />
      <Stats />
      <Choose />
      <Process />
      <Services />
      <Industries />
      <Team />
      <CTA />
      <Contact />
      <Footer />
    </>
  );
}

function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch for laboratory equipment, validation services, technical support, and customized solutions."
        breadcrumbs={[{ label: "Contact" }]}
      />
      <Contact hideHeading />
      <Footer />
    </>
  );
}

function ServicesPage() {
  return (
    <>
      <Services />
      <Footer />
    </>
  );
}

function IndustriesPage() {
  return (
    <>
      <Industries />
      <Footer />
    </>
  );
}

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {!isAdminRoute && <Navbar />}
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/learn-more" element={<LearnMore />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:id" element={<ServiceDetails />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/industries/:id" element={<IndustryDetails />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
