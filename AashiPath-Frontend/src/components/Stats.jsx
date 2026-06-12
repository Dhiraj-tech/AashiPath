import { FaFlask, FaUsers, FaAward, FaHeadset } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

const stats = [
  { icon: FaFlask, value: "50+", label: "Equipment Types", endValue: 50 },
  { icon: FaUsers, value: "100+", label: "Clients Served", endValue: 100 },
  { icon: FaAward, value: "3+", label: "Years Experience", endValue: 3 },
  { icon: FaHeadset, value: "24/7", label: "Technical Support", isSpecial: true },
];

const AnimatedCounter = ({ endValue, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let startTime = null;

          const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = (timestamp - startTime) / duration;

            if (progress < 1) {
              setCount(Math.floor(progress * endValue));
              requestAnimationFrame(animate);
            } else {
              setCount(endValue);
            }
          };

          requestAnimationFrame(animate);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [endValue, duration]);

  return <span ref={counterRef}>{count}+</span>;
};

const Stats = () => {
  return (
    <section className="relative z-10 -mt-10 mx-4 md:mx-6 lg:mx-auto max-w-6xl">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 bg-white rounded-2xl shadow-2xl shadow-sky-900/10 border border-gray-100 p-6 md:p-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center text-center px-2 py-2 md:py-4 group"
          >
            <div className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-600 mb-3 transition-colors group-hover:bg-sky-600 group-hover:text-white">
              <stat.icon className="text-xl md:text-2xl" />
            </div>
            <span className="text-2xl md:text-3xl font-bold text-gray-900">
              {stat.isSpecial ? (
                stat.value
              ) : (
                <AnimatedCounter endValue={stat.endValue} duration={2000} />
              )}
            </span>
            <span className="mt-1 text-xs md:text-sm font-medium text-gray-500">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
