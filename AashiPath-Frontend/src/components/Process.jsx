import { FaComments, FaSearch, FaTools, FaShieldAlt } from "react-icons/fa";

const steps = [
  {
    icon: FaComments,
    step: "01",
    title: "Consultation",
    description:
      "We understand your lab requirements, compliance needs, and operational goals through a detailed consultation.",
  },
  {
    icon: FaSearch,
    step: "02",
    title: "Solution Design",
    description:
      "Our experts recommend the right equipment, specifications, and service plan tailored to your industry.",
  },
  {
    icon: FaTools,
    step: "03",
    title: "Install & Validate",
    description:
      "Professional installation, commissioning, IQ/OQ validation, and calibration for reliable performance.",
  },
  {
    icon: FaShieldAlt,
    step: "04",
    title: "Ongoing Support",
    description:
      "AMC, preventive maintenance, troubleshooting, and 24/7 technical support to keep your lab running.",
  },
];

const Process = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="section-label">How We Work</span>
          <h2 className="section-title">Your Path to Lab Excellence</h2>
          <p className="section-subtitle mx-auto">
            A streamlined, end-to-end process designed to deliver precision,
            compliance, and long-term reliability for your laboratory.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((item, index) => (
            <div key={item.title} className="relative group">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-gradient-to-r from-sky-300 to-transparent" />
              )}
              <div className="h-full p-6 rounded-2xl border border-gray-100 bg-gradient-to-b from-gray-50 to-white hover:border-sky-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-600 text-white shadow-lg shadow-sky-600/30 group-hover:scale-110 transition-transform">
                    <item.icon />
                  </div>
                  <span className="text-3xl font-bold text-sky-100">{item.step}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
