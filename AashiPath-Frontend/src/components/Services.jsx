import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import ServiceBg from "../assets/Home/Services-bg.png";
import IncubatorImage from "../assets/Home/incubator-solutions.jpeg";
import TemperatureImage from "../assets/Home/temperature-control-systems.jpeg";
import ColdStorageImage from "../assets/Home/cold-storage-solutions.jpeg";
import BiosafetyImage from "../assets/Home/biosafety-water-purification.jpeg";
import AnalyticalImage from "../assets/Home/analytical-testing-instruments.jpeg";
import MixingImage from "../assets/Home/mixing-sample-preparation.jpg";

const services = [
  {
    id: 1,
    title: "Incubation Solutions",
    image: IncubatorImage,
    description:
      "Incubators, Shaker Incubators, CO₂ Incubators, and CO₂ Incubator Shakers from leading global brands.",
  },
  {
    id: 2,
    title: "Temperature Control Systems",
    image: TemperatureImage,
    description:
      "Environmental Chambers, Stability Chambers, Ovens, Vacuum Ovens, and Chillers for laboratory applications.",
  },
  {
    id: 3,
    title: "Cold Storage Solutions",
    image: ColdStorageImage,
    description:
      "Laboratory Refrigerators, Freezers, ULT Freezers, and LN₂ Cryogenic Systems for sample preservation.",
  },
  {
    id: 4,
    title: "Laboratory Safety & Purification",
    image: BiosafetyImage,
    description:
      "Biosafety Cabinets and Water Purification Systems — installation, troubleshooting, and parts replacement.",
  },
  {
    id: 5,
    title: "Analytical & Testing Instruments",
    image: AnalyticalImage,
    description:
      "pH Meters, Multipoint Systems, Stabilizers, and HPLC systems with PIR and validation support.",
  },
  {
    id: 6,
    title: "Mixing & Sample Preparation",
    image: MixingImage,
    description:
      "Dry Baths, Water Baths, Vortex Mixers, Stirrers, and Multidrop Systems with AMC and validation.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative py-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${ServiceBg})` }}
    >
      <div className="absolute inset-0 bg-slate-900/85" />

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="section-label !text-sky-400">What We Offer</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Our Services
          </h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-base md:text-lg">
            Comprehensive laboratory equipment supply, installation, maintenance,
            and validation across every stage of your lab operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((service) => (
            <article
              key={service.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-xl flex flex-col card-hover"
            >
              <div className="relative w-full h-56 bg-gradient-to-br from-sky-50 to-white flex items-center justify-center p-6 overflow-hidden">
                <div className="absolute inset-0 bg-sky-600/0 group-hover:bg-sky-600/5 transition-colors duration-300" />
                <img
                  src={service.image}
                  alt={service.title}
                  className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow border-t border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-sky-600 transition-colors text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow text-center">
                  {service.description}
                </p>
                <Link
                  to={`/services/${service.id}`}
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

export default Services;
