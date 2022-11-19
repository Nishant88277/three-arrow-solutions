import React from "react";
import NavSlideBar from "./NavSlideBar";
import {HeadingTitle} from "../../styles/GlobalComponents";

const BusinessModel = () => {
    return (
            <div className="Main_model">
                <HeadingTitle TextCenter="center" className="Title_div">
                    Business Model
                </HeadingTitle>
                <div className="xl:flex justify-between xl:mt-14 mt-10 Nav_div">
                    <NavSlideBar/>
                </div>
            </div>
    );
};

export default BusinessModel;
