import React from "react";
import { List, Span, StyledTitle } from "./HeaderStyles";
import Link from "next/link";
import { RiCloseFill } from "react-icons/ri";
import { data } from "../../header_data";
import { Container } from "../../layout/LayoutStyles";
import WebsiteLogo from "../WebsiteLogo/WebsiteLogo";
import Career from "../CareerBox/CareerBox";

function Nav({ currentTheme, handleModal }) {
  return (
    <>
      <Container>
        <div
          className="h-full w-full dark:bg-[#040C18] bg-white fixed z-50 top-0 left-0 overflow-y-auto CloseNav font-medium"
        >
          <div className="container xl:py-8 py-5">
            <Span className="CloseNav fixed top-10 right-20" onClick={() => handleModal()}>
                <div>
                  <RiCloseFill
                    className={`${currentTheme === "dark" ? "bg-[#fff]" : "bg-[#000]"} cursor-pointer rounded-full`}
                    color={`${ currentTheme === "dark" ? "black" : "white" }`}
                    size="40"
                  />
                </div>
                <span className="font-light text-5xl dark:text-white text-black" />
              </Span>
            <div className="mt-20">
              <Career space={"mb-20 mt-7"}/>
              <div className="">
                <div className="xl:mx-0 mx-5 grid xl:mt-5 mt-20 md:grid-cols-3  gap-8 dark:text-white text-black text-lg ">
                  <div className="flex flex-col">
                    <div>
                      <StyledTitle className="font-bold text-3xl xl:mb-5 mb-16">
                        Mobile App Development
                      </StyledTitle>
                      <ol className="text-2xl mt-10">
                        {data.mobile_app_development.map((item, index) => {
                          return (
                            <Link
                              key={index}
                              href={`/${item.text.replace(/\s/g, "-")}`}
                            >
                              <List
                                onClick={() => handleModal()}
                                className="relative mb-5 cursor-pointer hover:duration-100 hover:font-bold transition-all px-16 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                              >
                                {item.text}
                              </List>
                            </Link>
                          );
                        })}
                      </ol>
                    </div>
                    <div className="mt-16">
                      <StyledTitle className="font-bold text-3xl xl:mb-5 mb-16 mt-3">
                        Web Development
                      </StyledTitle>
                      <ol className="text-2xl mt-10">
                        {data.web_development.map((item, index) => {
                          return (
                            <Link
                              key={index}
                              href={`/${item.text.replace(/\s/g, "-")}`}
                            >
                              <List
                                onClick={() => handleModal()}
                                className="relative mb-5 cursor-pointer hover:font-bold duration-100 transition-all px-16 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                              >
                                {item.text}
                              </List>
                            </Link>
                          );
                        })}
                      </ol>
                    </div>
                  </div>
                  <div className="row-span-2">
                    <StyledTitle className="font-bold text-3xl xl:mb-5 mb-16">
                      Enterprise Mobility Solutions
                    </StyledTitle>
                    <ol className="text-2xl mt-10">
                      {data.enterprise_mobility_solutions.map((item, index) => {
                        return (
                          <Link
                            key={index}
                            href={`/${item.text.replace(/\s/g, "-")}`}
                          >
                            <List
                              onClick={() => handleModal()}
                              className="relative mb-5 cursor-pointer hover:font-bold duration-100 transition-all px-16 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                            >
                              {item.text}
                            </List>
                          </Link>
                        );
                      })}
                    </ol>
                  </div>
                  <div className="flex flex-col">
                    <div>
                      <StyledTitle className="font-bold text-3xl xl:mb-5 mb-16">
                        Hire Dedicated Developers
                      </StyledTitle>
                      <ol className="text-2xl mt-10">
                        {data.dedicated_developers.map((item, index) => {
                          return (
                            <Link
                              key={index}
                              href={`/${item.text.replace(/\s/g, "-")}`}
                            >
                              <List
                                onClick={() => handleModal()}
                                className="relative mb-5 cursor-pointer hover:font-bold duration-100 transition-all px-16 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                              >
                                {item.text}
                              </List>
                            </Link>
                          );
                        })}
                      </ol>
                    </div>

                    <div className="mt-16">
                      <StyledTitle className="font-bold text-3xl xl:mb-3 mb-16 mt-2">
                        About Us
                      </StyledTitle>
                      <ol className="text-2xl mt-10">
                        {data.about_us.map((item, index) => {
                          return (
                            <Link key={index} href={item.link}>
                              <List
                                className="relative mb-5 cursor-pointer hover:font-bold duration-100 transition-all px-16 before:ml-8 before:absolute before:-left-4 before:bottom-1
                    before:border-2 before:border-solid before:rounded-full before:contents:(' ') before:w-5
                    before:h-5"
                              >
                                {item.text}
                              </List>
                            </Link>
                          );
                        })}
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Nav;
