import React, { useEffect, useState, useRef } from "react";

const Counter = () => {
  const targetCounts = [
    { label: "Years of Experience", target: 20 },
    { label: "Financial Institutions", target: 40 },
    { label: "Customers Each (Millions)", target: 200 },
  ];

  const [counts, setCounts] = useState(targetCounts.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let animationFrame;
    const duration = 3000;
    const startTime = performance.now();

    const updateCounts = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      setCounts(targetCounts.map((item) => Math.floor(item.target * progress)));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCounts);
      }
    };

    animationFrame = requestAnimationFrame(updateCounts);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible]);

  return (
    <div ref={sectionRef} className="bg-white py-10 px-4 sm:px-6 md:px-8 lg:px-12">
      <h2 className="text-center text-blueSky font-Montserrat font-bold uppercase text-sm mb-8">
        Trusted by the Best
      </h2>
      <div className="flex flex-wrap justify-center space-x-12 sm:space-x-8 md:space-x-12">
        {targetCounts.map((stat, index) => (
          <div key={index} className="text-center mb-6 sm:mb-4 md:mb-6 lg:mb-8">
            <p className="text-blueSky text-[96px] font-bold">
              {">"} {counts[index]}
              {stat.target === 40 ? "+" : ""}
              {stat.label.includes("Millions") ? "m" : ""}
            </p>
            <p className="font-Inter text-[18px] leading-6 mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counter;
