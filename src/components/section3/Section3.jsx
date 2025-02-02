import React, { useEffect, useState } from "react";

const Section3 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Compliance ready",
      heading: "Purpose-built financial services",
      content:
        "Elevate customer experience and achieve agile financial product innovation with the world’s first, consumer-centric, real-time transaction account processing and credit limit system.",
      subContent:
        "Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behaviour and product marketing opportunities.",
      imageUrl: "../../../public/Section3.png",
    },
    {
      title: "Agile and adaptable",
      heading: "Agile and adaptable for growth",
      content:
        "Innovate with evolving customer demands through our open platform-based technology architecture. Stay ahead of the ever-changing financial landscape with a strong focus on security, compliance and performance.",
      subContent:
        "Optimise your offerings to unlock new revenue streams and deliver an extraordinary customer experience, with digitally designed core banking, payment processing and lending capabilities.",
      imageUrl: "../../../public/slide2.png",
    },
    {
      title: "Compliance Ready",
      heading: "Manage compliance with ease",
      content:
        "Navigate through the evolving regulatory landscape with confidence by streamlining compliance management—through real-time risk monitoring solutions powered by AI and machine learning.",
      subContent:
        "Transform your compliance strategy with flexible and diversified policy rules, powered by cutting-edge technology that is designed for seamless integration with core banking and card payment systems.",
      imageUrl: "./../../../public/slide3.png",
    },
    {
      title: "Secure and Safe",
      heading: "Highly secure and safe",
      content: "Discover unparalleled security trusted by financial institutions across the globe. Our applications are meticulously developed in compliance with international security standards, drawing on 20 years of technical expertise.",
      subContent:
        "Join over 40 esteemed Fls, each serving more than 200 million customers, and benefit from our secure, robust and reliable infrastructure.",
      imageUrl: "../../../public/slide4.png",
    },
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 6000); // 6 seconds per slide

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Navigation Buttons */}
      <div className="flex justify-center flex-wrap gap-4 mb-10">
        {slides.map((slide, index) => (
          <button
            key={index}
            className={`px-4 py-2 md:px-6 rounded-full md:py-3 font-Inter font-[600] text-[18px]  transition-all duration-300 ${
              currentSlide === index
                ? "bg-blue-300 text-blueSky"
                : " text-blueSky hover:bg-gray-300"
            }`}
            onClick={() => setCurrentSlide(index)}
          >
            {slide.title}
          </button>
        ))}
      </div>

      {/* Slide Content */}
      <div className="relative overflow-hidden rounded-xl shadow-lg bg-white">
        <div
          className="flex w-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 items-center gap-8 p-6 md:p-12"
            >
              {/* Slide Text */}
              <div>
                <h3 className="text-[16px] md:text-[18px] font-bold text-blueSky uppercase mb-2">
                  {slide.title}
                </h3>
                <h2 className="text-[28px] md:text-[40px] font-semibold leading-snug md:leading-12 mb-4">
                  {slide.heading}
                </h2>
                <p className="text-[16px] md:text-[20px] text-textBlue font-bold mb-4">
                  {slide.content}
                </p>
                <p className="text-textBlue text-[14px] md:text-[18px] leading-[22px] md:leading-[28px]">
                  {slide.subContent}
                </p>
              </div>

              {/* Slide Image */}
              {slide.imageUrl && (
                <div className="flex justify-center">
                  <img
                    src={slide.imageUrl}
                    alt={slide.title}
                    className="w-full  max-w-md h-full rounded-lg shadow-md"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section3;
