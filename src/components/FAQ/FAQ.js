import React, { useState } from "react";
import { Title } from "./FAQStyles";
import { data } from "../../data";
import Link from "next/link";
import TwoSection from "../TwoSection/TwoSection";
const FAQ = () => {

  return (
    <div className="mt-16">
      <Title className="font-extrabold xl:text-7xl xl:leading-tight tracking-tighter py-4 ">
            Frequently Asked Questions
      </Title>
      <p className="xl:text-3xl text-1xl xl:leading-normal dark:text-[#81AFDD] text-black w-6/12 mb-20">
        Everything you need to know about the product and billing. Can't find the answer you are looking for? Please <Link href='contact'><span className="underline">contact us.</span></Link>
      </p>
      <div className="grid grid-cols-3 gap-20 my-20">
        {
          data.FAQ.Development.map((item, index) => {
            return(
              <div key={index}>
                <h2 className="font-bold mb-3 text-white">{item.question}</h2>
                <p className="">{item.answer}</p>
              </div>
            )
          })
        }
      </div>
      <TwoSection space="mt-20 mb-32"/>
    </div>
  );
};

export default FAQ;
