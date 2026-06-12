import Hero1 from "../assets/sliderImages/hero1.jpeg";
import Hero2 from "../assets/sliderImages/hero2.jpeg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const slides = [
  {
    image: Hero1,
    tagline: "Precision in",
    highlight: "Every Solution",
    subtitle: "Ashipath Lab Solutions",
    description:
      "Delivering high-quality laboratory equipment, technical services, and validation support for pharmaceutical, biotechnology, healthcare, research, and industrial laboratories.",
  },
  {
    image: Hero2,
    tagline: "Trusted Partner for",
    highlight: "Lab Excellence",
    subtitle: "End-to-End Laboratory Support",
    description:
      "From equipment supply and installation to AMC, validation, and field service — we power your laboratory with expertise, reliability, and innovation.",
  },
];

const Carsousel = () => {
  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        slidesPerView={1}
        className="hero-swiper w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[75vh] min-h-[520px] lg:h-[88vh] overflow-hidden">
              <img
                src={slide.image}
                alt={slide.subtitle}
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/70 to-slate-900/20" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

              <div className="absolute inset-0 flex items-center z-10">
                <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-20">
                  <div className="max-w-3xl animate-fade-up">
                    <span className="inline-block mb-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-sky-300">
                      Laboratory Equipment & Services
                    </span>

                    <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1]">
                      {slide.tagline}{" "}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
                        {slide.highlight}
                      </span>
                    </h1>

                    <h2 className="text-lg md:text-2xl text-sky-200 font-medium mt-4">
                      {slide.subtitle}
                    </h2>

                    <p className="mt-5 text-base md:text-lg text-gray-200 max-w-2xl leading-relaxed">
                      {slide.description}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                      <a href="/#contact" className="btn-primary">
                        Request a Quote
                        <FaArrowRight className="text-sm" />
                      </a>
                      <Link to="/about" className="btn-secondary">
                        Learn About Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        .hero-swiper .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: rgba(255,255,255,0.5);
          opacity: 1;
        }
        .hero-swiper .swiper-pagination-bullet-active {
          background: #0ea5e9;
          width: 28px;
          border-radius: 5px;
        }
        .hero-swiper .swiper-pagination {
          bottom: 28px !important;
        }
      `}</style>
    </div>
  );
};

export default Carsousel;
