import React from "react";
import { useTheme } from "next-themes";
import { Span } from "./WebsiteStyles";

const WebsiteLogo = () => {
  const { theme } = useTheme();

  return (
    <div>
      <Span className="ml-2 mt-2 text-black dark:text-white">Tech stagers</Span>
    </div>
  );
};

export default WebsiteLogo;
