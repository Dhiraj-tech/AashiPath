import { useParams, Link } from "react-router-dom";
import { FaCheckCircle, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import PageHeader from "./PageHeader";
import Footer from "./Footer";

const industryData = {
  1: {
    title: "Pharmaceutical Manufacturing",
    overview:
      "We provide complete laboratory, validation, and temperature-controlled solutions for pharmaceutical manufacturers. Our products and services help organizations maintain product quality, regulatory compliance, and operational efficiency.",
    keySolutions: [
      "Stability Chambers",
      "Cold Storage Systems",
      "Environmental Chambers",
      "Laboratory Refrigerators & Freezers",
      "Analytical Instruments",
      "Validation & Calibration Services",
    ],
    applications: [
      "Drug Manufacturing",
      "Quality Control Laboratories",
      "Research & Development",
      "Packaging Units",
      "Storage Facilities",
    ],
    benefits: [
      "Regulatory Compliance",
      "Reliable Product Storage",
      "Improved Quality Assurance",
      "Accurate Testing Results",
    ],
  },
  2: {
    title: "Healthcare & Diagnostics",
    overview:
      "We support hospitals, diagnostic centers, and healthcare facilities with reliable laboratory equipment and temperature-controlled solutions for accurate diagnostics and patient safety.",
    keySolutions: [
      "Medical Refrigerators",
      "Laboratory Freezers",
      "Blood Bank Refrigerators",
      "Biosafety Cabinets",
      "Diagnostic Instruments",
      "Monitoring Systems",
    ],
    applications: [
      "Hospitals",
      "Diagnostic Centers",
      "Clinical Laboratories",
      "Blood Banks",
      "Healthcare Research Centers",
    ],
    benefits: [
      "Enhanced Patient Safety",
      "Reliable Sample Storage",
      "Accurate Diagnostic Results",
      "Operational Efficiency",
    ],
  },
  3: {
    title: "Research Laboratories",
    overview:
      "Our advanced laboratory solutions help research institutions achieve precise results through innovative scientific equipment and controlled environments.",
    keySolutions: [
      "Incubators",
      "Analytical Instruments",
      "Cold Storage Solutions",
      "Purification Systems",
      "Laboratory Safety Equipment",
    ],
    applications: [
      "Government Research Labs",
      "Private Research Centers",
      "Scientific Institutes",
      "Innovation Facilities",
    ],
    benefits: [
      "Improved Research Accuracy",
      "Reliable Sample Protection",
      "Enhanced Laboratory Safety",
      "Long-Term Equipment Reliability",
    ],
  },
  4: {
    title: "Biotechnology",
    overview:
      "We provide biotechnology laboratories with advanced incubation, storage, purification, and analytical solutions to support innovation and development.",
    keySolutions: [
      "CO₂ Incubators",
      "Ultra-Low Temperature Freezers",
      "Cryogenic Storage Systems",
      "Water Purification Systems",
      "Laboratory Instruments",
    ],
    applications: [
      "Cell Culture Laboratories",
      "Biotech Research Centers",
      "Genetic Engineering Facilities",
      "Pharmaceutical Biotechnology",
    ],
    benefits: [
      "Precise Environmental Control",
      "Reliable Sample Preservation",
      "Support for Advanced Research",
      "Improved Productivity",
    ],
  },
  5: {
    title: "Academic Institutions",
    overview:
      "We assist universities, colleges, and educational institutions in creating modern laboratory infrastructures that support practical learning and research.",
    keySolutions: [
      "Teaching Laboratory Equipment",
      "Analytical Instruments",
      "Safety Cabinets",
      "Incubators",
      "Training & Support Services",
    ],
    applications: [
      "Universities",
      "Engineering Colleges",
      "Medical Colleges",
      "Research Departments",
    ],
    benefits: [
      "Enhanced Learning Experience",
      "Modern Laboratory Infrastructure",
      "Reliable Equipment Performance",
      "Technical Support & Training",
    ],
  },
  6: {
    title: "Industrial Laboratories",
    overview:
      "Our industrial laboratory solutions support quality assurance, testing, process validation, and product development activities across manufacturing sectors.",
    keySolutions: [
      "Testing Instruments",
      "Environmental Chambers",
      "Calibration Equipment",
      "Temperature Control Systems",
      "Quality Control Solutions",
    ],
    applications: [
      "Manufacturing Industries",
      "Quality Control Laboratories",
      "Production Facilities",
      "Industrial Testing Centers",
    ],
    benefits: [
      "Consistent Product Quality",
      "Process Optimization",
      "Regulatory Compliance",
      "Reliable Testing Performance",
    ],
  },
};

const ListCard = ({ title, items, accent }) => (
  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 h-full">
    <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
      <span className={`h-8 w-1 rounded-full ${accent}`} />
      {title}
    </h2>
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-gray-700 text-sm">
          <FaCheckCircle className="text-sky-600 mt-0.5 shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const IndustryDetails = () => {
  const { id } = useParams();
  const industry = industryData[id];

  if (!industry) {
    return (
      <>
        <PageHeader title="Industry Not Found" />
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <Link to="/#industries" className="btn-primary">Browse Industries</Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <PageHeader
        title={industry.title}
        subtitle={industry.overview}
        breadcrumbs={[
          { label: "Industries", to: "/#industries" },
          { label: industry.title },
        ]}
      />

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <ListCard title="Key Solutions" items={industry.keySolutions} accent="bg-sky-600" />
            <ListCard title="Applications" items={industry.applications} accent="bg-emerald-500" />
            <ListCard title="Benefits" items={industry.benefits} accent="bg-violet-500" />
            <div className="bg-gradient-to-br from-sky-600 to-sky-800 rounded-2xl p-8 text-white h-full">
              <h2 className="text-xl font-bold mb-6">Why Choose Ashipath?</h2>
              <ul className="space-y-3 text-sky-50 text-sm">
                {[
                  "Experienced Technical Team",
                  "Customized Industry Solutions",
                  "Professional Installation",
                  "Calibration & Validation Support",
                  "Preventive Maintenance Services",
                  "Dedicated After-Sales Support",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <FaCheckCircle className="text-emerald-300 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/#industries" className="inline-flex items-center gap-2 text-sky-600 font-semibold hover:text-sky-800">
              <FaArrowLeft className="text-sm" />
              Back to Industries
            </Link>
            <Link to="/contact" className="btn-primary !py-3 !px-6">
              Request Consultation
              <FaArrowRight className="text-sm" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default IndustryDetails;
