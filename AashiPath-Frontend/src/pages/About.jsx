import ResearchImage from "../assets/Home/Research lab.jpeg";
import Footer from "../components/Footer";

const equipments = [
  "Centrifuges",
  "Incubators",
  "Incubator Shakers",
  "CO2 Incubators",
  "CO2 Incubator Shakers",
  "Chillers",
  "Environmental Chambers",
  "Biosafety Cabinets",
  "Water Purification Systems",
  "Freezers",
  "Refrigerators",
  "ULT Freezers",
  "LN2 Cryogenic Systems",
  "Ovens",
  "Vacuum Ovens",
  "Dry Baths",
  "Water Baths",
  "Vortex Mixers",
  "Stirrers",
  "Multidrops",
  "Stability Chambers",
  "pH Meters",
  "Stabilizers",
];

const About = () => {
  return (
    <div className="bg-white">
      <section className="py-20 bg-gradient-to-br from-slate-50 to-sky-50">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="section-label">Who We Are</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-sky-600">Ashipath</span>
            </h1>
            <p className="text-gray-600 leading-relaxed text-lg">
              Ashipath Lab Solutions is a professional laboratory equipment
              supply and service company dedicated to providing reliable,
              high-quality, and innovative laboratory solutions.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              We specialize in equipment supply, installation, commissioning,
              maintenance, AMC services, validation support, and technical
              consultancy.
            </p>
            <a href="#expertise" className="btn-primary mt-8">
              View Equipment Expertise
            </a>
          </div>
          <img
            src={ResearchImage}
            alt="About Ashipath"
            className="w-full rounded-2xl shadow-2xl"
          />
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="section-label">Our Mission</span>
            <h2 className="section-title">Our Vision</h2>
          </div>
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-sky-50 to-white p-8 md:p-10 rounded-2xl shadow-lg border border-sky-100">
            <p className="text-lg text-center text-gray-700 leading-relaxed">
              To become a trusted and leading provider of laboratory equipment
              solutions and technical services by delivering excellence,
              innovation, and customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="section-label">Leadership</span>
            <h2 className="section-title">Technical Expert</h2>
          </div>
          <div className="max-w-3xl mx-auto bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-sky-700">
              Er. Kumar Rahul Prasad
            </h3>
            <div className="mt-4 flex flex-wrap gap-4">
              <span className="inline-flex items-center rounded-full bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700">
                3+ Years Experience
              </span>
              <span className="inline-flex items-center rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
                5 Units Handled Daily
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="expertise" className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="section-label">Capabilities</span>
            <h2 className="section-title">Equipment Expertise</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {equipments.map((item) => (
              <div
                key={item}
                className="bg-white shadow-sm border border-gray-100 rounded-xl p-4 text-center text-sm font-medium text-gray-700 hover:-translate-y-1 hover:shadow-lg hover:border-sky-200 hover:text-sky-700 transition-all duration-300"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
