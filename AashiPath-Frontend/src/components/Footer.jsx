import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-sky-800 to-sky-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <img
              src="/Logos.png"
              alt="Ashipath Logo"
              className="h-16 w-auto object-contain mb-4"
            />
            <p className="text-sm leading-7 text-sky-100">
              High-quality laboratory equipment, validation services, technical
              support, and innovative solutions for pharmaceutical, healthcare,
              biotechnology, research, and industrial laboratories.
            </p>
            <div className="flex gap-3 mt-5">
              {[FaLinkedin, FaInstagram, FaWhatsapp].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors text-lg"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-5">Services</h3>
            <ul className="space-y-2.5 text-sm text-sky-100">
              <li>Incubators & CO₂ Incubators</li>
              <li>Environmental Chambers</li>
              <li>Biosafety Cabinets</li>
              <li>Water Purification Systems</li>
              <li>Freezers & Refrigerators</li>
              <li>Validation & Technical Support</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-5">Quick Links</h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { to: "/", label: "Home" },
                { href: "/#services", label: "Services" },
                { href: "/#industries", label: "Industries" },
                { href: "/#team", label: "Team" },
                { href: "/#contact", label: "Contact" },
                { to: "/about", label: "About Us" },
                { to: "/careers", label: "Careers" },
              ].map((item) => (
                <li key={item.label}>
                  {item.to ? (
                    <Link
                      to={item.to}
                      className="text-sky-100 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      className="text-sky-100 hover:text-white transition-colors"
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-5">Contact</h3>
            <div className="space-y-4 text-sm text-sky-100">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-0.5 shrink-0" />
                <span>Bangalore, Karnataka, India</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="shrink-0" />
                <a
                  href="mailto:support@aashipath.com"
                  className="hover:text-white transition-colors break-all"
                >
                  support@aashipath.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="shrink-0" />
                <span>+91 8792994686</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-sky-600/50 mt-12 pt-8">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-sky-200">
            {[
              "Pharmaceutical Manufacturing",
              "Healthcare & Diagnostics",
              "Research Laboratories",
              "Biotechnology",
              "Academic Institutions",
              "Industrial Laboratories",
            ].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-sky-950/60 py-4 text-center text-xs text-sky-300">
        © {new Date().getFullYear()} Ashipath Scientific Lab Solutions. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
