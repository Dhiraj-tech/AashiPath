import { Link } from "react-router-dom";
import { FaChevronRight, FaHome } from "react-icons/fa";

const PageHeader = ({ title, subtitle, breadcrumbs = [] }) => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_20%,#0ea5e9_0%,transparent_50%)]" />
      <div className="relative max-w-7xl mx-auto px-4 py-14 md:py-16 lg:py-20">
        <nav className="flex items-center gap-2 text-sm text-sky-300/80 mb-6 flex-wrap">
          <Link to="/" className="hover:text-white transition-colors flex items-center gap-1.5">
            <FaHome className="text-xs" />
            Home
          </Link>
          {breadcrumbs.map((crumb) => (
            <span key={crumb.label} className="flex items-center gap-2">
              <FaChevronRight className="text-[10px] opacity-60" />
              {crumb.to ? (
                <Link to={crumb.to} className="hover:text-white transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-white">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-base md:text-lg text-gray-300 max-w-3xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHeader;
