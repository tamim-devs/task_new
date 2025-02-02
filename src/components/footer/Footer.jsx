import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Pattern from "../../assets/backgrounds-20250202T174020Z-001/backgrounds/WaveLinesDesktop1.svg";
import Pattern1 from "../../assets/backgrounds-20250202T174020Z-001/backgrounds/WaveLinesDesktop2.svg";
import Pattern3 from "../../assets/backgrounds-20250202T174020Z-001/backgrounds/WaveLinesDesktop3.svg";

const Footer = () => {
  const [mouseX, setMouseX] = useState(0);

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouseX(e.clientX); // Get the horizontal position of the mouse
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="">
      <div className="py-24 md:py-96 bg-sky-700 overflow-hidden custom-footer-path">
        <div className=" relative flex h-full w-full items-center">
          <div className="z-30 h-fit mt-50 font-semibold font-Montserrat container ">
            <h2 className="text-white text-[40px] md:text-[80px]">Legacy no longer</h2>

            <p className='text-white text-xl mt-10'>Talk to us to find out how we can transform your organisation for the future</p>
            <button className="py-4 mt-10 px-4 bg-[#FE8B53] text-white text-xl font-Montserrat font-bold">Contact Us</button>

          </div>
          <div className="z-10 absolute top-0 left-0 w-full h-full">
            {/* First Pattern with subtle animation based on mouse movement */}
            <motion.picture
              className="absolute top-0 left-0 w-full h-full z-20"
              initial={{ opacity: 0, x: 0 }}
              animate={{ opacity: 1, x: (mouseX - window.innerWidth / 2) / 40 }} // Minor movement
              transition={{ duration: 0.5, type: "spring", stiffness: 40 }}
            >
              <img
                src={Pattern}
                alt="Pattern 1"
                className="w-full object-cover bg-blend-multiply"
              />
            </motion.picture>

            {/* Second Pattern with subtle animation based on mouse movement */}
            <motion.picture
              className="absolute top-0 left-0 w-full h-full z-20"
              initial={{ opacity: 0, x: 0 }}
              animate={{ opacity: 1, x: (mouseX - window.innerWidth / 2) / 50 }} // Minor movement
              transition={{ duration: 0.5, type: "spring", stiffness: 40 }}
            >
              <img
                src={Pattern1}
                alt="Pattern 2"
                className="w-full object-cover bg-blend-multiply"
              />
            </motion.picture>

            {/* Third Pattern with subtle animation based on mouse movement */}
            <motion.picture
              className="absolute top-0 left-0 w-full h-full z-20"
              initial={{ opacity: 0, x: 0 }}
              animate={{ opacity: 1, x: (mouseX - window.innerWidth / 2) / 60 }} // Minor movement
              transition={{ duration: 0.5, type: "spring", stiffness: 40 }}
            >
              <img
                src={Pattern3}
                alt="Pattern 3"
                className="w-full object-cover bg-blend-multiply"
              />
            </motion.picture>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
