import { Link } from "react-router-dom";
import { FaArrowRight, FaAward, FaCogs, FaHandshake, FaTags } from "react-icons/fa";
import ChooseImage from "../assets/Home/choose-us.jpeg";

const features = [
  {
    icon: FaAward,
    title: "Industry Expertise",
    description: "Tailored solutions for compliance, efficiency, and modern lab challenges.",
  },
  {
    icon: FaCogs,
    title: "Quality-Assured Products",
    description: "Equipment that meets strict performance, reliability, and safety standards.",
  },
  {
    icon: FaHandshake,
    title: "End-to-End Support",
    description: "Installation, AMC, validation, and field service under one roof.",
  },
  {
    icon: FaTags,
    title: "Competitive Pricing",
    description: "Premium laboratory solutions at exceptional value for your budget.",
  },
];

const Choose = () => {
  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#e0f2fe_0%,_transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_#ecfdf5_0%,_transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-label">Why Choose Us</span>
          <h2 className="section-title">
            The Ashipath <span className="text-sky-600">Advantage</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Trusted laboratory equipment and technical services for pharmaceutical,
            biotechnology, healthcare, and research labs across India.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/10">
              <img
                src={ChooseImage}
                alt="Ashipath laboratory solutions"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p className="text-white text-lg font-bold">Your Lab. Our Expertise.</p>
                <p className="text-sky-200 text-sm mt-1">
                  Precision equipment · Expert support · Lasting partnerships
                </p>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 md:-right-6 bg-white rounded-xl shadow-lg border border-gray-100 px-5 py-4">
              <p className="text-2xl font-bold text-sky-600">3+</p>
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                Years Experience
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-4">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group flex gap-5 p-5 md:p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-sky-200 transition-all duration-300"
              >
                <div className="flex flex-col items-center gap-2 shrink-0">
                  <span className="text-xs font-bold text-sky-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-600 text-white shadow-md shadow-sky-600/25 group-hover:scale-105 transition-transform">
                    <feature.icon className="text-lg" />
                  </div>
                </div>
                <div className="pt-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}

            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-2 text-sky-600 font-semibold text-sm hover:text-sky-800 hover:gap-3 transition-all"
            >
              Learn more about us
              <FaArrowRight className="text-xs" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
