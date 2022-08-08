import React from "react";

import styled, { createGlobalStyle } from "styled-components";

const GlobalStyleText = createGlobalStyle`

.pText{
    font-family: 'Manrope';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 30px;
/* or 150% */

text-transform: capitalize;

color: #FFFFFF;

}
.DetailTextHeading2 { 
    font-family: 'Manrope';
font-style: normal;
font-weight: 700;
font-size: 30px;
line-height: 50px;
/* identical to box height, or 167% */


color: #FFFFFF;
}
`;

const DetailsText = () => {
  return (
    <div>
      <GlobalStyleText />
      <div>
        <h1 className="Git_text  dark:text-white text-black font-black text-6xl leading-normal ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
          pellentesque commodo ex.{" "}
        </h1>
        <p className="className='Git_text xl: text-4xl dark:text-[#fff] text-black leading-normal '">
          Nam nunc odio, semper ut sem non, mattis congue ligula. Ut ultricies
          odio non mattis feugiat. Nulla semper neque eget dui consectetur, nec
          pulvinar lectus mollis. Cras efficitur eros sed ipsum consequat,
        </p>
      </div>
      <div className="flex justify-center xl:flex-row flex-col xl:mt-20 md:mx-0 mx-0 mt-0  xl:p-0 px-0 ">
        <div className="mr-44">
          <h2 className="Git_text  dark:text-white text-black font-black text-5xl leading-normal">Lorem ipsum </h2>
          <p className="Git_text  text-4xl dark:text-[#fff] text-black leading-normal mt-20 ">
            Nam nunc odio, semper ut sem non, mattis congue ligula. Ut ultricies
            odio non mattis feugiat. Nulla semper neque eget dui consectetur,
            nec pulvinar lectus mollis. Cras efficitur eros sed ipsum consequat,
          </p>
        </div>
        <div>
          <h2 className="Git_text  dark:text-white text-black font-black text-5xl leading-normal">Lorem ipsum </h2>
          <p className="Git_text  text-4xl dark:text-[#fff] text-black leading-normal mt-20">
            Nam nunc odio, semper ut sem non, mattis congue ligula. Ut ultricies
            odio non mattis feugiat. Nulla semper neque eget dui consectetur,
            nec pulvinar lectus mollis. Cras efficitur eros sed ipsum consequat,
          </p>
        </div>
      </div>
    </div>
  );
};
export default DetailsText;