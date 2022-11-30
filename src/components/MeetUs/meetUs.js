import React from "react";
import { IoIosCall } from "react-icons/io";
import styled from "styled-components";
import {
  Icondiv,
  Buttondiv,
  IcondivGradient,
} from "../../components/Contact/ContactStyle";
import { ImLocation } from "react-icons/im";

const MeetUsStyle = styled.div`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 800;
  /* identical to box height, or 121% */

  letter-spacing: -0.04em;

  background: linear-gradient(89.97deg, #ae67fa 1.84%, #f49867 102.67%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

const MeetUs = () => {
  return (
    <div className="xl:w-[50%]  text-white items-center flex justify-center transition-all duration-500 ">
      <div className="xl:w-[70%] xl:py-0 py-20">
        <MeetUsStyle className="xl:text-8xl text-7xl dark:text-[#fff] text-black">
          Meet Us
        </MeetUsStyle>
        <div className="mt-[32px]">
          <div className="flex mb-9">
            <Icondiv className="text-4xl">
              <IoIosCall />
            </Icondiv>
            <span className="ml-10 text-3xl xl:text-4xl dark:text-[#fff] text-black">
              +91 1234567890
            </span>
          </div>
          <div className="flex mb-9">
            <IcondivGradient className="text-4xl">
              @
            </IcondivGradient>
            <span className="ml-10 text-3xl xl:text-4xl dark:text-[#fff] text-black">
              contact@threearrow.in
            </span>
          </div>
          <div className="flex">
            <Icondiv>
              <ImLocation className="text-4xl" />
            </Icondiv>
            <span className="ml-10 text-3xl xl:text-4xl w-full leading-relaxed dark:text-[#fff] text-black">
              6 ff, EF tower, Shreeji Gold, nr. C.K prajapati school, Laxmipura
              Rd, opp. Sona and Bandhan party plot, Subhanpura, Vadodara,
              Gujarat 390003, India
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MeetUs;
