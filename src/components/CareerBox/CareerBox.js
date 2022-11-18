import React from 'react'
import { BsArrowRight, BsChatSquareText } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";

// styles
import {CareerBox} from "./style"

const Career = ({space}) => {
    return (
        <CareerBox className={`flex md:flex-row flex-col py-10 xl:px-10 px-10 justify-between rounded-xl xl:items-center Carrer_div ${space}`}>
            <div className="md:w-[20%]">
                <h4 className="dark:text-black text-white text-4xl leading-normal font-extrabold">
                    Looking for career opportunity?
                </h4>
            </div>
            <div className="xl:w-[20%] xl:mt-0 mt-3 dark:text-black text-white gap-5 leading-loose">
                <div className="flex justify-between">
                    <div className="flex  items-center font-bold">
                        <BsChatSquareText /> <span className="ml-2">Email</span>
                    </div>
                    <div className="w-[70%]">
                        <a href="mailto:contact@threearrow.in">
                        contact@threearrow.in
                        </a>
                    </div>
                </div>
                <div className="flex justify-between ">
                    <span className="flex w-[20%] items-center  font-bold">
                        <FiPhoneCall /> <span className="ml-2">Call</span>
                    </span>
                    <div className="w-[70%]">+91 1234567890</div>
                </div>
            </div>
            <div className="md:w-1/5 md:mt-0 mt-3 flex xl:justify-end xl:mt-0 mt-12 items-center">
                <div
                    className="bg-white flex justify-around rounded-full p-2 w-80 cursor-pointer delay-75 duration-700 transition-all text-black hover:bg-black hover:text-white dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black"
                >
                    <button className="font-extrabold ">Explore more</button>
                    <BsArrowRight className="text-5xl" />
                </div>
            </div>
        </CareerBox>
    )
}

export default Career;
