import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import Pattern from "../../assets/backgrounds-20250202T174020Z-001/backgrounds/WaveLinesDesktop1.svg";
import Pattern1 from "../../assets/backgrounds-20250202T174020Z-001/backgrounds/WaveLinesDesktop2.svg";
import Pattern3 from "../../assets/backgrounds-20250202T174020Z-001/backgrounds/WaveLinesDesktop3.svg";
import bannerImg from "../../assets/backgrounds-20250202T174020Z-001/backgrounds/banner_img.jpg";

const Banner = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Listen for mouse movements
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="h-[max(620px,_calc(92vh-49px))] clipBanner overflow-hidden bg-blue-600 heroSection">
      <div className="container relative flex h-full w-full items-center">
        <div className="z-30 h-fit">
          <h1 className="text-[80px] text-white font-semibold font-Montserrat max-w-[800px]">Embrace the future of finance</h1>
          <p className="text-2xl text-white font-Inter font-medium w-[650px] ">
            Reimagine financial services with AnyTech’s open platform,
            distributed banking solution that powers transformation
          </p>
          <button className="py-4 px-4 bg-[#FE8B53] text-white text-xl font-Montserrat font-bold mt-10">Reach Out to Us</button>
        </div>
        <div className="absolute right-[-40%] bannerImgClip overflow-hidden hidden md:block">
          <picture>
            <img
              src={bannerImg}
              alt="Banner"
              className="h-[80%] w-[80%] object-cover"
            />
          </picture>
          <div className="absolute top-0 right-0 w-full h-full overlygradiant z-20"></div>
        </div>
      </div>

      {/* Mouse Driven Pattern Backgrounds */}
      <div>
        <motion.picture
          className="absolute top-0 left-0 w-full h-full z-20"
          style={{
            transform: `translateX(${(mousePosition.x - window.innerWidth / 2) * 0.005}px) translateY(${(mousePosition.y - window.innerHeight / 2) * 0.005}px)`
          }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <img
            src={Pattern}
            alt="Pattern"
            className="w-full object-cover bg-blend-multiply"
          />
        </motion.picture>
        
        <motion.picture
          className="absolute top-0 left-0 h-full z-20"
          style={{
            transform: `translateX(${(mousePosition.x - window.innerWidth / 2) * 0.005}px) translateY(${(mousePosition.y - window.innerHeight / 2) * 0.005}px)`
          }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <img
            src={Pattern1}
            alt="Pattern1"
            className="w-full object-cover bg-blend-multiply"
          />
        </motion.picture>
        
        <motion.picture
          className="absolute top-0 left-0 w-full h-full z-20"
          style={{
            transform: `translateX(${(mousePosition.x - window.innerWidth / 2) * 0.005}px) translateY(${(mousePosition.y - window.innerHeight / 2) * 0.005}px)`
          }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <img
            src={Pattern3}
            alt="Pattern3"
            className="w-full object-cover bg-blend-multiply"
          />
        </motion.picture>
      </div>
    </section>
  );
};

export default Banner;
