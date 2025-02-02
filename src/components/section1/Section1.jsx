import React from "react";
import section_1 from "../../../public/Section1.png"


const Section1 = () => {
  return (
    <div className="py-28">
      <div className="container flex items-center gap-x-[100px] justify-center mx-auto">
        <div className="flex flex-col gap-5">
          <h6 className="text-blueSky text-base font-bold leading-1.5 font-Montserrat text">POWERING THE FUTURE OF FINANCE</h6>
          <h2 className="text-textBlue text-[56px] font-Montserrat font-[600] leading-14 w-[500px]">Uncovering new ways to delight customers</h2>
          <p className="text-base text-textBlue font-bold leading-6 font-Inter w-[499px]"> 
            AnyTech is revolutionising financial technology by introducing
            innovative and real-time transaction account processing
            capabilities, specifically designed for retail financial services.
          </p>
          <p className="font-Inter text- text-pTc w-[500px]">Our modern approach surpasses traditional banking and card processing systems, empowering you with the most advanced technology for lasting success.</p>

        </div>
        <div className="">
          <img src={section_1} className="w-[347px] mt-10 object-cover" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Section1;
