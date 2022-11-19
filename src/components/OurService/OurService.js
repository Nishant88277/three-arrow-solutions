import React from "react";
import { HeadingTitle } from "../../styles/GlobalComponents";
import { BsArrowRight } from "react-icons/bs";
import { data } from "../../data";
import Marquee from "react-fast-marquee";
import { TalkExpertBox } from "../TalkExpertBox/TalkExpertBox";

const OurService = () => {
  return (
    <div>
      <HeadingTitle TextCenter="center">Our Service</HeadingTitle>

      <Marquee direction="right" speed={50} delay={5} pauseOnHover>
        {data.services.map((item, index) => {
          return (
            <div
              key={index}
              className="  flex text-center scrollbar-hide overflow-x-scroll text-gray-500 font-extrabold  py-20"
            >
              <div
                key={index}
                className="xl:mx-20 mx-8 cursor-pointer transition-all delay-300 dark:hover:text-white hover:text-black Services_div "
              >
                {item.icon}
                <br />
                <span>{item.serviceName}</span>
              </div>
            </div>
          );
        })}
      </Marquee>

      <div className="flex justify-center">
        <div
          className="dark:text-white text-black border-black dark:border-white border-2 flex justify-around rounded-full p-2 py-[8px] md:py-[16px] w-[200px] md:w-[300px] cursor-pointer delay-75 duration-700
         transition-all dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white"
        >
          <button className="font-extrabold">All Services</button>
          <BsArrowRight className="text-5xl" width="50px" />
        </div>
      </div>

      <TalkExpertBox/>
    </div>
  );
};

export default OurService;
