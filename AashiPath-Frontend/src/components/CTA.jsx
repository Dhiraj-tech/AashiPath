import { Link } from "react-router-dom";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";

const CTA = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-600 via-sky-700 to-slate-900 px-8 py-12 md:px-14 md:py-16 text-white shadow-2xl shadow-sky-900/20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-400/10 rounded-full translate-y-1/2 -translate-x-1/4" />

          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-sky-200 mb-3">
                Start Your Project
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                Ready to Upgrade Your Laboratory?
              </h2>
              <p className="mt-4 text-sky-100 leading-relaxed max-w-lg">
                Partner with Ashipath for equipment supply, validation, AMC, and
                expert field support — trusted by labs across pharmaceutical,
                healthcare, and research sectors.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 lg:justify-end">
              <a href="/#contact" className="btn-primary !bg-white !text-sky-700 !shadow-white/20 hover:!bg-sky-50">
                Get a Free Quote
                <FaArrowRight className="text-sm" />
              </a>
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/40 px-7 py-3.5 text-sm font-semibold hover:bg-white/10 transition-all"
              >
                <FaPhoneAlt className="text-sm" />
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
