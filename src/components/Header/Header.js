import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTheme } from "next-themes";
import { NavLink, SocialIcons, HeaderContainer } from "./HeaderStyles";
import { RiMenu4Fill } from "react-icons/ri";
import Nav from "./nav";
import WebsiteLogo from "../WebsiteLogo/WebsiteLogo";

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme("undefined");
  const [navWidth, setNavWidth] = useState("hidden");
  const { pathname } = useRouter();

  const [currentTheme, setCurrentTheme] = useState("");

  const renderThemeChanger = () => {
    const currentTheme1 = theme === "system" ? systemTheme : theme;
    if (currentTheme1 === "dark") {
      return (
        <img
          src="/images/Vector.png"
          alt="dark_mode.png"
          width="30px"
          onClick={() => setTheme("light")}
        />
      );
    } else if (currentTheme1 === "light") {
      return (
        <img
          src="/images/dark mode.png"
          alt="dark_mode.png"
          width="30px"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  useEffect(() => {
    setCurrentTheme(theme);
  }, [theme]);

  useEffect(() => {
    document.body.classList.remove("overflow-hidden");
  }, []);

  const handleModal = (type) => {
    if (type) {
      document.body.classList.add("overflow-hidden");
      setNavWidth("block");
    } else {
      document.body.classList.remove("overflow-hidden");
      setNavWidth("hidden");
    }
  };

  /* Change color on scroll  */
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  
  useEffect(()=>{
    document.addEventListener("scroll", changeNavbarColor); 
  })

  return (
    <>
      <HeaderContainer
        currentTheme={currentTheme}
        colorChange={colorChange}
        className={`container pt-10 pb-5 sticky top-0`}
      >
        <div className="flex justify-between ">
          <Link href="/">
            <NavLink className="flex items-center font-bold ">
              <WebsiteLogo type="nav" />
            </NavLink>
          </Link>
          {pathname !== "/404" && (
            <div className="flex">
              <SocialIcons className=" dark:hover:bg-[#212d45] hover:bg-[#fff] ">
                {renderThemeChanger()}
              </SocialIcons>
              <SocialIcons className="dark:hover:bg-[#212d45] hover:bg-[#fff]">
                <RiMenu4Fill
                  id="MenuOpen"
                  className="text-black dark:text-white"
                  onClick={() => handleModal("open")}
                />
              </SocialIcons>
            </div>
          )}
        </div>
      </HeaderContainer>
      {navWidth === "block" && (
        <Nav
          currentTheme={currentTheme}
          colorChange={colorChange}
          handleModal={(e) => handleModal(e)}
        />
      )}
    </>
  );
};

export default Header;
