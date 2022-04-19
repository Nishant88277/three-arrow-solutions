import React from "react";
import { TalkExpertBox } from "./OurServiceStyles";
import { HeadingTitle } from "../../styles/GlobalComponents";

import { BsArrowRight } from "react-icons/bs";
import { data } from "../../data";
const OurService = () => {
  return (
    <div className="mt-52">
      <HeadingTitle TextCenter="center"> Our Service</HeadingTitle>
      <div className="flex text-center text-gray-500 font-extrabold justify-between py-20">
        {data.services.map((item, index) => {
          return (
            <div
              key={index}
              className="cursor-pointer transition-all delay-300 dark:hover:text-white hover:text-black "
            >
              {item.icon}
              <br />
              <span>{item.serviceName}</span>
            </div>
          );
        })}
      </div>
      <div className="mt-10 flex justify-center">
        <div
          className="dark:text-white text-black border-black dark:border-white border-2 flex justify-around rounded-full p-2 w-80 cursor-pointer delay-75 duration-700 
         transition-all dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white"
        >
          <button className="font-extrabold">All Services</button>
          <BsArrowRight className="text-5xl" />
        </div>
      </div>
      <TalkExpertBox className="xl:flex md:flex-none  justify-center xl:my-48 my-20 dark:text-black text-white rounded-3xl ">
        <div className="xl:p-16 p-12">
          <h5 className="leading-relaxed">Let's Discuss Your Project</h5>
          <p className="font-extrabold text-4xl  leading-normal">
            Get free consultation and let us know your project idea to turn it
            into an amazing digital product.
          </p>
        </div>
        <div className="flex items-center justify-center  dark:text-white text-black xl:w-1/4 ">
          <button
            className="font-extrabold rounded-full  dark:bg-black bg-white  cursor-pointer delay-75  duration-700 
         transition-all dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white xl:px-16 xl:py-7 px-28  xl:m-0 m-6 py-8 "
          >
            Talk to our Experts
          </button>
        </div>
      </TalkExpertBox>
    </div>
  );
};

export default OurService;
