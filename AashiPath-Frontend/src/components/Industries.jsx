import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Pharmaceutical from "../assets/Home/Pharmaceutical.jpeg";
import Healthcare from "../assets/Home/Healthcare image.jpeg";
import ResearchLab from "../assets/Home/Research lab.jpeg";
import Biotechnology from "../assets/Home/Biotechnology.jpeg";
import AcademicInstitution from "../assets/Home/Academic institution.jpeg";
import IndustrialLaboratory from "../assets/Home/Industrial laboratory.jpeg";

const industries = [
  {
    id: 1,
    title: "Pharmaceutical Manufacturing",
    image: Pharmaceutical,
    description:
      "Reliable laboratory equipment, validation services, and quality assurance solutions for pharmaceutical manufacturers.",
  },
  {
    id: 2,
    title: "Healthcare & Diagnostics",
    image: Healthcare,
    description:
      "Trusted laboratory products and technical solutions for hospitals, clinics, and diagnostic centers.",
  },
  {
    id: 3,
    title: "Research Laboratories",
    image: ResearchLab,
    description:
      "Advanced laboratory solutions helping research institutions achieve accuracy, compliance, and operational excellence.",
  },
  {
    id: 4,
    title: "Biotechnology",
    image: Biotechnology,
    description:
      "Innovative equipment and support services for biotechnology research and development.",
  },
  {
    id: 5,
    title: "Academic Institutions",
    image: AcademicInstitution,
    description:
      "Reliable laboratory infrastructure and equipment for universities and educational institutions.",
  },
  {
    id: 6,
    title: "Industrial Laboratories",
    image: IndustrialLaboratory,
    description:
      "Dependable solutions for industrial testing, quality control, and analytical processes.",
  },
];

const Industries = () => {
  return (
    <section
      id="industries"
      className="py-20 bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="section-label !text-sky-400">Sectors We Serve</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Our Industries
          </h2>
          <p className="mt-4 text-gray-400 max-w-3xl mx-auto text-base md:text-lg">
            Delivering laboratory solutions across pharmaceutical, healthcare,
            diagnostics, biotechnology, research, academic, and industrial sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {industries.map((industry) => (
            <article
              key={industry.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-xl card-hover flex flex-col"
            >
              <div className="relative overflow-hidden h-52">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-sky-600 transition-colors text-center">
                  {industry.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow text-center">
                  {industry.description}
                </p>
                <Link
                  to={`/industries/${industry.id}`}
                  className="mt-5 flex justify-center items-center gap-2 text-sm font-semibold text-sky-600 hover:text-sky-800 transition-all group-hover:gap-3"
                >
                  Learn More
                  <FaArrowRight className="text-xs" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
