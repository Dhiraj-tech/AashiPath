import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaAlignJustify, FaSearch, FaTimes, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { searchItems } from "../data/searchItems";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileMenu(false);
  }, [location.pathname]);

  const normalizedQuery = searchQuery.trim().toLowerCase();
  const filteredResults = normalizedQuery
    ? searchItems
        .filter((item) => {
          const searchableText = [
            item.title,
            item.category,
            item.description,
            ...item.keywords,
          ]
            .join(" ")
            .toLowerCase();
          return searchableText.includes(normalizedQuery);
        })
        .slice(0, 6)
    : [];

  const goHome = () => {
    setMobileMenu(false);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const openSearchResult = (path) => {
    setSearchQuery("");
    setShowSearchResults(false);
    setMobileMenu(false);
    const [route, hash] = path.split("#");
    navigate(route || "/");
    if (hash) {
      window.setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  };

  const submitSearch = (event) => {
    event.preventDefault();
    if (filteredResults.length > 0) {
      openSearchResult(filteredResults[0].path);
    }
  };

  const navLinkClass = (path) =>
    `font-medium px-3 py-2 rounded-lg transition-colors ${
      location.pathname === path
        ? "text-sky-600 bg-sky-50"
        : "text-gray-700 hover:text-sky-600 hover:bg-sky-50/50"
    }`;

  return (
    <>
    <div className="hidden lg:block bg-slate-900 text-sky-100/90 text-xs border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
        <div className="flex items-center gap-6">
          <a href="mailto:support@aashipath.com" className="flex items-center gap-2 hover:text-white transition-colors">
            <FaEnvelope className="text-sky-400" />
            support@aashipath.com
          </a>
          <a href="tel:+918792994686" className="flex items-center gap-2 hover:text-white transition-colors">
            <FaPhone className="text-sky-400" />
            +91 8792994686
          </a>
        </div>
        <span className="flex items-center gap-2 text-slate-400">
          <FaMapMarkerAlt className="text-sky-400" />
          Bangalore, Karnataka — Laboratory Equipment & Technical Services
        </span>
      </div>
    </div>
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md border-b border-gray-200/80"
          : "bg-white border-b border-gray-100"
      }`}
    >
      <div className="flex lg:grid lg:grid-cols-[auto_1fr_auto] gap-4 justify-between items-center max-w-7xl mx-auto px-4 py-2 lg:px-6">
        <Link to="/" onClick={goHome} className="flex items-center gap-1.5 sm:gap-2 group shrink-0">
          <span className="flex h-12 lg:h-14 w-12 sm:w-14 lg:w-16 shrink-0 items-center">
            <img
              src="/logo-transparent.png"
              alt="Ashipath Scientific Solutions"
              className="h-14 w-auto object-contain object-left origin-left scale-110 sm:scale-125 lg:h-16 lg:scale-[1.3]"
            />
          </span>
          <div className="hidden sm:block shrink-0">
            <p className="text-sm font-bold text-gray-900 leading-tight">
              Ashipath
            </p>
            <p className="text-xs text-sky-600 font-medium">
              Scientific Lab Solutions
            </p>
          </div>
        </Link>

        <div className="flex flex-1 justify-center min-w-0">
          <form
            className="relative w-full max-w-[220px] sm:max-w-sm lg:max-w-md"
            onSubmit={submitSearch}
          >
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
            <input
              type="search"
              value={searchQuery}
              placeholder="Search products or services"
              onChange={(event) => {
                setSearchQuery(event.target.value);
                setShowSearchResults(true);
              }}
              onFocus={() => setShowSearchResults(true)}
              onBlur={() => {
                setTimeout(() => setShowSearchResults(false), 150);
              }}
              className="w-full rounded-full border border-gray-200 bg-gray-50 py-2.5 pl-11 pr-4 text-sm outline-none transition focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-100"
            />

            {showSearchResults && normalizedQuery && (
              <div className="absolute left-0 right-0 top-full mt-2 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-2xl">
                {filteredResults.length > 0 ? (
                  <div className="max-h-72 overflow-y-auto py-1">
                    {filteredResults.map((item) => (
                      <button
                        key={`${item.category}-${item.title}`}
                        type="button"
                        onMouseDown={(event) => event.preventDefault()}
                        onClick={() => openSearchResult(item.path)}
                        className="block w-full px-4 py-3 text-left hover:bg-sky-50 transition-colors"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <span className="font-semibold text-gray-900 text-sm">
                            {item.title}
                          </span>
                          <span className="shrink-0 rounded-full bg-sky-100 px-2.5 py-0.5 text-xs font-medium text-sky-700">
                            {item.category}
                          </span>
                        </div>
                        <p className="mt-1 line-clamp-1 text-xs text-gray-500">
                          {item.description}
                        </p>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="px-4 py-4 text-sm text-gray-500">
                    No matching results found.
                  </div>
                )}
              </div>
            )}
          </form>
        </div>

        <div className="hidden lg:flex items-center gap-1">
          <Link to="/" className={navLinkClass("/")} onClick={goHome}>
            Home
          </Link>
          <a href="/#services" className="font-medium px-3 py-2 rounded-lg text-gray-700 hover:text-sky-600 hover:bg-sky-50/50 transition-colors">
            Services
          </a>
          <a href="/#industries" className="font-medium px-3 py-2 rounded-lg text-gray-700 hover:text-sky-600 hover:bg-sky-50/50 transition-colors">
            Industries
          </a>
          <Link to="/about" className={navLinkClass("/about")}>
            About
          </Link>
          <Link to="/careers" className={navLinkClass("/careers")}>
            Careers
          </Link>
          <a href="/#contact" className="ml-2 btn-primary !py-2.5 !px-5 !text-sm">
            Request Quote
          </a>
        </div>

        <button
          className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          onClick={() => setMobileMenu(!mobileMenu)}
          aria-label="Toggle menu"
        >
          {mobileMenu ? <FaTimes className="text-xl" /> : <FaAlignJustify className="text-xl" />}
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileMenu ? "max-h-96 border-t border-gray-100" : "max-h-0"
        }`}
      >
        <div className="flex flex-col py-2 px-4 bg-white">
          {[
            { to: "/", label: "Home", onClick: goHome },
            { href: "/#services", label: "Services" },
            { href: "/#industries", label: "Industries" },
            { to: "/about", label: "About" },
            { to: "/careers", label: "Careers" },
            { href: "/#contact", label: "Contact" },
          ].map((item) =>
            item.to ? (
              <Link
                key={item.label}
                to={item.to}
                onClick={item.onClick}
                className="py-3 px-4 rounded-lg font-medium text-gray-700 hover:bg-sky-50 hover:text-sky-600 transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenu(false)}
                className="py-3 px-4 rounded-lg font-medium text-gray-700 hover:bg-sky-50 hover:text-sky-600 transition-colors"
              >
                {item.label}
              </a>
            )
          )}
          <a
            href="/#contact"
            onClick={() => setMobileMenu(false)}
            className="mt-2 btn-primary text-center"
          >
            Request Quote
          </a>
        </div>
      </div>
    </header>
    </>
  );
};

export default Navbar;
