import React from "react";
import Section2Img from "../../../public/Section2.png";
import icon1Img from "../../../public/icon1.svg";
const Section2 = () => {
  return (
    <div className="container mx-auto py-28">
      <div className="flex  flex-col justify-center items-center gap-4">
        <div className="">
          <h6 className="text-blueSky text-base font-semibold h-6 leading-6 font-Montserrat ">
            OUR PHILOSOPHY
          </h6>
        </div>
        <div className=" w-full justify-center flex">
          <h2 className="text-textBlue text-[56px] font-Monstera font-[600] leading-14">
            Human-centred innovation
          </h2>
        </div>
        <div className="w-full h-full mt-6 flex justify-center">
            <img src={Section2Img} alt="Section2Img" className="object-cover" />
        </div>


        <div className="flex gap-6">
            <div className="w-[402px] flex flex-col gap-8   bg-[#F8FCFF]  pt-[20px] pb-10 px-[24px] rounded-[20px]">
            <div className="mt-4">
            <img src={icon1Img} alt="icon1Img" className=" p-0 ml-3 " />
              </div>    
            <div className="flex flex-col gap-10 ml-6">
            <h3 className="font-Montserrat w-2xl text-textBlue text-3xl  font-semibold leading-7">Full-suite solutions</h3>
            <p className="text-xl w-[317px]  text-textBlue font-Inter leading-6 ">Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.</p>
            </div>

            </div>
            <div className="w-[402px] flex flex-col gap-8   bg-[#F8FCFF]  pt-[20px] pb-10 px-[24px] ">
            <div className="mt-4">
            <img src={icon1Img} alt="icon1Img" className=" p-0 ml-3 " />
              </div>    
            <div className="flex flex-col gap-10 ml-6">
            <h3 className="font-Montserrat w-2xl text-textBlue text-3xl  font-semibold leading-7">Full-suite solutions</h3>
            <p className="text-xl  text-textBlue w-[317px] font-Inter leading-6">Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.</p>
            </div>

            </div>
            <div className="w-[402px] flex flex-col gap-8   bg-[#F8FCFF]  pt-[20px] pb-10 px-[24px] rounded-[20px]">
            <div className="mt-4">
            <img src={icon1Img} alt="icon1Img" className=" p-0 ml-3 " />
              </div>    
            <div className="flex flex-col gap-10 ml-6">
            <h3 className="font-Montserrat w-2xl text-textBlue text-3xl  font-semibold leading-7">Full-suite solutions</h3>
            <p className="text-xl text-textBlue w-[317px] text- font-Inter leading-6">Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.</p>
            </div>

            </div>
              
              

        </div>
      </div>
      
    </div>
  );
};

export default Section2;
