import React, { useEffect } from "react";
import Section2Img from "../../../public/Section2.png";
import icon1Img from "../../../public/icon1.svg";
import AOS from 'aos'; 
import "aos/dist/aos.css";

const Section2 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,
    });
  }, []);

  return (
    <div className="container mx-auto py-10 sm:py-20 lg:py-28">
      <div className="flex flex-col justify-center items-center gap-6 sm:gap-8 lg:gap-10">
        <div>
          <h6 className="text-blueSky text-base font-semibold leading-6 font-Montserrat">
            OUR PHILOSOPHY
          </h6>
        </div>
        <div className="w-full flex justify-center">
          <h2 className="text-textBlue text-4xl sm:text-5xl lg:text-6xl font-Monstera font-[600] leading-tight text-center">
            Human-centred innovation
          </h2>
        </div>
        <div className="w-full flex justify-center">
          <img
            src={Section2Img}
            alt="Section2Img"
            className="w-full max-w-[600px] sm:max-w-[700px] md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1200px] h-auto object-cover"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 mt-10">
          {/* Card 1 */}
          <div
            className="w-full sm:w-[402px] flex flex-col gap-8 bg-[#F8FCFF] pt-6 pb-10 px-6 rounded-lg"
            data-aos="fade-up" 
          >
            <div className="mt-4 flex justify-start">
              <img src={icon1Img} alt="icon1Img" className="w-12 h-12" />
            </div>
            <div className="flex flex-col gap-6 text-center sm:text-left">
              <h3 className="font-Montserrat text-textBlue text-2xl sm:text-3xl font-semibold leading-7">
                Full-suite solutions
              </h3>
              <p className="text-xl text-textBlue font-Inter leading-6">
                Experience the ease of integration across various banking and
                payment functions with our comprehensive suite of solutions.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="w-full sm:w-[402px] flex flex-col gap-8 bg-[#F8FCFF] pt-6 pb-10 px-6 rounded-lg"
            data-aos="fade-up"
            data-aos-delay="200" 
          >
            <div className="mt-4 flex justify-start">
              <img src={icon1Img} alt="icon1Img" className="w-12 h-12" />
            </div>
            <div className="flex flex-col gap-6 text-center sm:text-left">
              <h3 className="font-Montserrat text-textBlue text-2xl sm:text-3xl font-semibold leading-7">
                Full-suite solutions
              </h3>
              <p className="text-xl text-textBlue font-Inter leading-6">
                Experience the ease of integration across various banking and
                payment functions with our comprehensive suite of solutions.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="w-full sm:w-[402px] flex flex-col gap-8 bg-[#F8FCFF] pt-6 pb-10 px-6 rounded-lg"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="mt-4 flex justify-start">
              <img src={icon1Img} alt="icon1Img" className="w-12 h-12" />
            </div>
            <div className="flex flex-col gap-6 text-center sm:text-left">
              <h3 className="font-Montserrat text-textBlue text-2xl sm:text-3xl font-semibold leading-7">
                Full-suite solutions
              </h3>
              <p className="text-xl text-textBlue font-Inter leading-6">
                Experience the ease of integration across various banking and
                payment functions with our comprehensive suite of solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
