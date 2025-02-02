import React from "react";
import section_1 from "../../../public/Section1.png";
import img1 from '../../../src/assets/img1.svg';
import img2 from '../../../src/assets/img2.svg';
import img3 from '../../../src/assets/img3.svg';

const Section1 = () => {
  return (
    <div className="py-28">
      <div className="container flex flex-col md:flex-row items-center gap-8 md:gap-16 justify-center mx-auto px-4">
        {/* Left section with text */}
        <div className="flex flex-col gap-5 w-full md:w-1/2">
          <h6 className="text-blueSky text-base font-bold leading-6 font-Montserrat">
            POWERING THE FUTURE OF FINANCE
          </h6>
          <h2 className="text-textBlue text-[32px] sm:text-[40px] md:text-[56px] font-Montserrat font-semibold leading-tight">
            Uncovering new ways to delight customers
          </h2>
          <p className="text-base text-textBlue font-bold leading-6 font-Inter sm:w-full md:w-[499px]">
            AnyTech is revolutionising financial technology by introducing
            innovative and real-time transaction account processing
            capabilities, specifically designed for retail financial services.
          </p>
          <p className="font-Inter text-textPtc sm:w-full md:w-[500px]">
            Our modern approach surpasses traditional banking and card
            processing systems, empowering you with the most advanced
            technology for lasting success.
          </p>
        </div>

        {/* Right section with image */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <div className="w-full relative max-w-[347px] h-auto aspect-w-16 aspect-h-9">
            <img
              src={section_1}
              className="w-full h-full object-cover"
              alt="Section Image"
            />
            <div className="absolute top-[5%] right-[-20%] animate-bounce1">
              <img src={img1} alt="img1" />
            </div>
            <div className="absolute top-[40%] left-[5%] animate-bounce2">
              <img src={img2} alt="img2" />
            </div>
            <div className="absolute top-[10%] left-[-10%] animate-bounce3">
              <img src={img3} alt="img3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
