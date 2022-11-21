import React from "react";
import { HeadingSection, StyledTitle } from "./FooterStyles";
import Link from "next/dist/client/link";
import WebsiteLogo from "../WebsiteLogo/WebsiteLogo";
import Career from "../CareerBox/CareerBox";
/* React Icons */
import { IoNewspaperOutline, IoShareSocialOutline } from "react-icons/io5";
import { MdOutlinePrivacyTip, MdWorkOutline } from "react-icons/md";
import { FaBlogger, FaChromecast, FaCreativeCommons, FaQuestionCircle, FaRegAddressCard } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { BiBuilding } from "react-icons/bi";
import { BsQuestionCircle } from "react-icons/bs";
import { GrBlog, GrCafeteria, GrContact } from "react-icons/gr";
import { CgWebsite } from "react-icons/cg";
import { RiContactsBook2Line } from "react-icons/ri";
import { AiOutlineLink } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="mt-0 bg-[#031B34] sm:overflow-hidden md:px-10 xl:px-0 px-0 text-white">
      <div className="container mx-auto">
        <div className="xl:hidden items-center font-bold flex justify-center pt-8 List_item">
          <WebsiteLogo />
        </div>
        <div className="xl:px-96 xl:py-10 px-5">
          <HeadingSection className=" font-extrabold text-4xl xl:text-7xl md:text-6xl xl:text-center text-center leading-tight tracking-wide py-3 Footer_head">
            We are just few steps away to help you grow in this digital world.
          </HeadingSection>
        </div>
        <div className="flex justify-center">
          <button className="border-2 px-20 py-6 transition-all delay-100 duration-700  rounded-full  hover:text-black hover:bg-white font-bold">
            Let's discuss
          </button>
        </div>
        <div>
          <div className=" grid grid-cols-12 my-[48px] font-medium">
            <div className="xl:flex justify-center items-start font-bold hidden col-span-5 ">
              <WebsiteLogo />
            </div>
            <div className="flex justify-center col-span-6 md:col-span-2">
              <ul className="leading-relaxed">
                <li className="my-6 List_item font-extrabold mb-10 flex items-center gap-[8px]">
                  <StyledTitle>&nbsp;Links</StyledTitle>
                </li>
                <li className="my-6 List_item flex items-center gap-[8px]">
                  <FaChromecast />
                  <a href="#">&nbsp;Overons</a>
                </li>
                <li className="my-6 List_item flex items-center gap-[8px]">
                  <IoShareSocialOutline />
                  <a href="#">&nbsp;Social Media</a>
                </li>
                <li className="my-6 List_item flex items-center gap-[8px]">
                  <FaCreativeCommons />
                  <a href="#">&nbsp;Counters</a>
                </li>
              </ul>
            </div>
            <div className="flex justify-center col-span-6 md:col-span-2 mr-[40px]">
              <ul className="leading-relaxed">
                <li className="my-6 List_item font-extrabold mb-10 flex items-center gap-[8px]">
                  <StyledTitle>Company</StyledTitle>
                </li>
                <li className="my-6 List_item flex items-center gap-[8px]">
                  <IoNewspaperOutline />
                  <a href="#">&nbsp;Terms & Conditions</a>
                </li>
                <li className="my-6 List_item flex items-center gap-[8px]">
                  <MdOutlinePrivacyTip />
                  <a href="#">&nbsp;Privacy Policy</a>
                </li>

                <li className="my-6 List_item flex items-center gap-[8px]">
                  <MdWorkOutline />
                  <Link href="/portfolio">&nbsp;Work</Link>
                </li>

                <li className="my-6 List_item flex items-center gap-[8px]">
                  <BsQuestionCircle />
                  <Link href="/faq">&nbsp;FAQ</Link>
                </li>
                <li className="my-6 List_item flex items-center gap-[8px]">
                  <CgWebsite />
                  <Link href="/blog">&nbsp;Blog</Link>
                </li>
                <li className="my-6 List_item flex items-center gap-[8px]">
                  <RiContactsBook2Line />
                  <Link href="/contact">&nbsp;Contact us</Link>
                </li>
              </ul>
            </div>
            <div className="w-full col-span-12 md:col-span-3">
              <ul className="leading-relaxed flex flex-col justify-center items-center md:items-start">
                <li className="my-6 List_item font-extrabold mb-10">
                  <StyledTitle>&nbsp;Get in touch</StyledTitle>
                </li>
                <li className="List_item mb-10 flex justify-center">
                  <span className="text-center md:text-left">
                    6 FF, EF tower, Shreeji Gold, <br /> nr. C.K prajapati
                    school, Laxmipura Rd, <br /> opp. Sona and Bandhan party
                    plot, <br /> Subhanpura, Vadodara, <br /> Gujarat - 390003,
                    &nbsp;
                    <StyledTitle>India</StyledTitle>
                  </span>
                </li>
                <li className="my-6 List_item mb-10">
                  <div className="flex mb-5">
                    <img src="/images/IN.png" alt="" className="w-10" /> &nbsp;
                    +91 9913781537{" "}
                  </div>
                  <div className="flex">
                    <img src="/images/us-flag.png" alt="" className="w-10" />
                    &nbsp; +1 321-613-8080{" "}
                  </div>
                </li>
                {/* <li className="my-6 List_item">
                  <a href="mailto:contact@threearrow.in">
                    contact@threearrow.in
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
        <Career space={"mb-20"} />
      </div>
      <div className="border-t-2 text-center p-5 border-[#BCC0CF] xl:text-2xl text-sm font-bold">
        © 2021 All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
