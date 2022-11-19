import React from "react";
import { TalkExpertBox, Section } from "./OurServiceStyles";
import { HeadingTitle } from "../../styles/GlobalComponents";
import { BsArrowRight } from "react-icons/bs";
import { data } from "../../data";
import Marquee from "react-fast-marquee";




const OurService = () => {
  return (
    <div className="container mx-auto">
      <div className="xl:mt-44 mt-20 xl:p-0 px-5">
        <HeadingTitle TextCenter="center">Our Service</HeadingTitle>

        <Marquee direction="right" speed={50} delay={5} pauseOnHover>
          {data.services.map((item, index) => {
            return (
              <Section
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
              </Section>
            );
          })}
        </Marquee>

        <div className="mt-10 flex justify-center">
          <div
            className="dark:text-white text-black border-black dark:border-white border-2 flex justify-around rounded-full p-2 py-[16px] w-[300px] cursor-pointer delay-75 duration-700
         transition-all dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white"
          >
            <button className="font-extrabold">
              All Services
            </button>
            <BsArrowRight className="text-5xl w-[32px]" />
          </div>
        </div>
        <TalkExpertBox className="xl:flex md:flex-none md:mx-5 xl:mx-0 justify-center xl:mt-36 my-20 dark:text-black text-white rounded-3xl ">
          <div className="xl:p-16 p-10">
            <h4 className="leading-relaxed">Let's Discuss Your Project</h4>
            <p className="font-extrabold text-4xl  leading-normal">
              Get free consultation and let us know your project idea to turn it
              into an amazing digital product.
            </p>
          </div>
          <div className="flex items-center justify-center  dark:text-white text-black xl:w-1/4 ">
            <button
              className="font-extrabold rounded-full  dark:bg-black bg-white  cursor-pointer delay-75  duration-700
         transition-all dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white xl:px-16 xl:py-7 px-10  xl:m-0 m-6 py-8 xl:text-1xl text-xl"
            >
              Talk to our Experts
            </button>
          </div>
        </TalkExpertBox>
      </div>
    </div>
  );
};

export default OurService;
