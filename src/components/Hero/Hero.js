import React from "react";
import Lottie from "react-lottie-player";
import lottieJson from "../../animation/hero.json";
import { HeadingSection, Button } from "./HeroStyles";

const Hero = () => {
  return (
    <div>
      <div className="flex xl:justify-between flex-wrap xl:p-0 px-5">
        <div className="md:max-w-[65%] md:m-auto xl:max-w-[45%]">
          <HeadingSection className="font-extrabold xl:text-8xl xl:leading-tight tracking-tighter py-4 ">
            Let's Build Something amazing with three arrow technologies
          </HeadingSection>
          <div
            className={`xl:text-3xl text-1xl xl:w-9/12 xl:leading-normal dark:text-[#81AFDD] text-black`}
          >
            We design a road map towards the success of your Business in this
            Digital World.
          </div>
          <div className="w-full flex flex-row xl:mt-32 mt-16">
            <input
              className="p-8 xl:w-9/12  xl:h-28  rounded-bl-lg rounded-tl-lg dark:bg-[#052d56] bg-[#DDDDDD] text-[#052d56] dark:text-[#ffffff] font-medium focus:outline-none placeholder:text-[#3D6184] "
              type="text"
              placeholder="Your Email Address"
            />
            <Button className="px-[16px] text-xl md:text-2xl xl:text-3xl  text-white rounded-br-lg rounded-tr-lg font-semibold">
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
