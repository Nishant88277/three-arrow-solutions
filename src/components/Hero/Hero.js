import React from "react";
import Lottie from "react-lottie-player";
import lottieJson from "../../animation/hero.json";
import { HeadingSection, Button } from "./HeroStyles";

const Hero = () => {
  return (
    <div className="container mx-auto">
      <div className="flex  xl:justify-between flex-wrap md:mt-20 xl:mb-10  xl:p-0 px-5">
        <div className="xl:max-w-[45%]">
          <HeadingSection className="font-extrabold xl:text-8xl xl:leading-tight tracking-tighter py-4 ">
            Let's Build Something amazing with three arrow technologies
          </HeadingSection>
          <div
            className={`xl:text-3xl text-1xl xl:w-9/12 xl:leading-normal dark:text-[#81AFDD] text-black`}
          >
            We design a road map towards the success of your Business in this
            Digital World.
          </div>
          <div className=" flex flex-row xl:mt-32 mt-16">
            <input
              className="p-8 xl:w-9/12 md:w-[40%] w-[70%] max-w-[500px] xl:h-28  rounded-bl-lg rounded-tl-lg dark:bg-[#052d56] bg-[#DDDDDD] text-[#052d56] dark:text-[#ffffff] font-medium focus:outline-none placeholder:text-[#3D6184] "
              type="text"
              placeholder="Your Email Address"
            />
            <Button className="xl:w-3/12 md:w-[20%] w-[30%] max-w-[200px] text-xl md:text-2xl xl:text-3xl  text-white rounded-br-lg rounded-tr-lg font-semibold">
              Get Started
            </Button>
          </div>
        </div>
        <div className="md:w-full xl:w-6/12 mt-8 flex md:justify-center  xl:justify-end">
          <Lottie
            animationData={lottieJson}
            play
            className="xl:w-9/12 max-w-[500px] max-h-[500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
