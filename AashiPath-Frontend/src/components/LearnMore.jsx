import { Link } from "react-router-dom";
import { FaFlask, FaMicroscope, FaVial, FaArrowLeft } from "react-icons/fa";
import PageHeader from "./PageHeader";
import Footer from "./Footer";

const expertise = [
  {
    icon: FaMicroscope,
    title: "Research Excellence",
    description:
      "Supporting advanced scientific research with precision instruments and laboratory technologies.",
  },
  {
    icon: FaFlask,
    title: "Laboratory Innovation",
    description:
      "Delivering innovative solutions for testing, analysis, incubation, and environmental control.",
  },
  {
    icon: FaVial,
    title: "Quality Assurance",
    description:
      "Ensuring compliance, accuracy, and reliability with trusted equipment and validation support.",
  },
];

const industries = [
  "Pharmaceutical Manufacturing",
  "Biotechnology Research",
  "Healthcare & Diagnostics",
  "Academic Institutions",
  "Industrial Laboratories",
  "Environmental Research",
];

const LearnMore = () => {
  return (
    <>
      <PageHeader
        title="Advanced Laboratory & Scientific Solutions"
        subtitle="Innovative laboratory equipment, scientific instruments, and technical support for research institutions, pharmaceutical companies, healthcare organizations, and industrial laboratories."
        breadcrumbs={[{ label: "Learn More" }]}
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="section-label">Our Expertise</span>
            <h2 className="section-title">What We Deliver</h2>
            <p className="section-subtitle mx-auto">
              High-quality scientific equipment and laboratory solutions designed to enhance
              accuracy, reliability, compliance, and operational efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {expertise.map((item) => (
              <div
                key={item.title}
                className="bg-gray-50 border border-gray-100 p-8 rounded-2xl text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <item.icon className="text-4xl text-sky-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="section-label">Sectors</span>
            <h2 className="section-title">Industries We Support</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map((name) => (
              <div
                key={name}
                className="bg-white border border-gray-100 rounded-xl p-5 hover:border-sky-200 hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-gray-900">{name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 text-center bg-white">
        <Link to="/" className="btn-primary">
          <FaArrowLeft className="text-sm" />
          Back to Home
        </Link>
      </section>

      <Footer />
    </>
  );
};

export default LearnMore;
