import React, {useEffect, useState} from "react";
import { useTheme } from "next-themes";

const WebsiteLogo = ({type}) => {
  const { theme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState("");

  useEffect(() => {
    setCurrentTheme(theme);
  }, [theme]);

  const source = () => {
    if(currentTheme !== "dark"){
      return "/images/LogoBlack.svg"
    } else {
      return "/images/LogoWhite.svg"
    }
  }

  return (
    <div>
      <img src={type !== "nav" ? "/images/LogoWhite.svg" : source()} alt="logo" width={type !== "nav" ? "150" : "100"} />
    </div>
  );
};

export default WebsiteLogo;
