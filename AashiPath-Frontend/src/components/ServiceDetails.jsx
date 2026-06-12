import { useParams, Link } from "react-router-dom";
import { FaCheckCircle, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import PageHeader from "./PageHeader";
import Footer from "./Footer";

const serviceData = {
  1: {
    title: "Incubation Solutions",
    description:
      "We provide advanced laboratory and industrial incubation systems designed for precise temperature control and reliable performance.",
    features: [
      "Microprocessor-based temperature control",
      "Uniform heat distribution",
      "Digital display and monitoring",
      "Energy-efficient operation",
    ],
    applications: [
      "Microbiology Laboratories",
      "Research Centers",
      "Pharmaceutical Industries",
      "Biotechnology Facilities",
    ],
  },
  2: {
    title: "Temperature Control Systems",
    description:
      "Our temperature control systems ensure accurate environmental conditions for laboratories, pharmaceutical industries, hospitals, and industrial applications.",
    features: [
      "Precise temperature regulation",
      "Real-time monitoring",
      "Alarm and safety systems",
      "Data logging capability",
      "Remote monitoring options",
    ],
    applications: [
      "Laboratories",
      "Hospitals",
      "Pharmaceutical Manufacturing",
      "Food Processing",
      "Industrial Plants",
    ],
  },
  3: {
    title: "Cold Storage Solutions",
    description:
      "Reliable and energy-efficient cold storage systems designed to maintain product quality, safety, and compliance standards.",
    features: [
      "Cold Rooms",
      "Freezer Rooms",
      "Ultra-Low Temperature Storage",
      "Temperature Monitoring Systems",
      "Backup Power Integration",
    ],
    applications: [
      "Pharmaceutical Storage",
      "Healthcare Facilities",
      "Research Laboratories",
      "Food Processing Industries",
      "Biotechnology Centers",
    ],
  },
  4: {
    title: "Laboratory Safety & Purification",
    description:
      "Comprehensive safety and purification systems that ensure a safe, clean, and contamination-free laboratory environment.",
    features: [
      "Fume Hoods",
      "Laminar Air Flow Units",
      "Biosafety Cabinets",
      "Water Purification Systems",
      "Air Filtration Solutions",
    ],
    applications: [
      "Research Labs",
      "Clinical Laboratories",
      "Educational Institutions",
      "Healthcare Facilities",
    ],
  },
  5: {
    title: "Analytical & Testing Instruments",
    description:
      "High-precision analytical instruments for research, quality control, and testing applications.",
    features: [
      "Spectrophotometers",
      "pH Meters",
      "Conductivity Meters",
      "Moisture Analyzers",
      "Laboratory Balances",
    ],
    applications: [
      "Quality Control Labs",
      "Research Institutes",
      "Pharmaceutical Industries",
      "Food Testing Laboratories",
    ],
  },
  6: {
    title: "Mixing & Sample Preparation",
    description:
      "Efficient mixing and sample preparation equipment designed for accurate laboratory and industrial processes.",
    features: [
      "Magnetic Stirrers",
      "Hot Plate Stirrers",
      "Vortex Mixers",
      "Homogenizers",
      "Shakers",
    ],
    applications: [
      "Research Laboratories",
      "Chemical Industries",
      "Biotechnology Facilities",
      "Educational Institutions",
    ],
  },
};

const ServiceDetails = () => {
  const { id } = useParams();
  const service = serviceData[id];

  if (!service) {
    return (
      <>
        <PageHeader title="Service Not Found" subtitle="The requested service could not be found." />
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <Link to="/#services" className="btn-primary">Browse All Services</Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <PageHeader
        title={service.title}
        subtitle={service.description}
        breadcrumbs={[
          { label: "Services", to: "/#services" },
          { label: service.title },
        ]}
      />

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="h-8 w-1 rounded-full bg-sky-600" />
                Key Features
              </h2>
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-gray-700">
                    <FaCheckCircle className="text-sky-600 mt-1 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="h-8 w-1 rounded-full bg-emerald-500" />
                Applications
              </h2>
              <ul className="space-y-3">
                {service.applications.map((app) => (
                  <li key={app} className="flex items-start gap-3 text-gray-700">
                    <FaCheckCircle className="text-emerald-500 mt-1 shrink-0" />
                    {app}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/#services" className="inline-flex items-center gap-2 text-sky-600 font-semibold hover:text-sky-800 transition-colors">
              <FaArrowLeft className="text-sm" />
              Back to Services
            </Link>
            <Link to="/contact" className="btn-primary !py-3 !px-6">
              Request Quote
              <FaArrowRight className="text-sm" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ServiceDetails;
