import React from "react";
import Footer from "../components/Footer/Footer";
import Blog from "../components/Blog/Blog";
import TwoSections from "../components/TwoSection/TwoSection"
import EnquiryForm from "../components/ Enquiry form/ enquiryForm";
import MeetUs from "../components/MeetUs/meetUs";
import DetailsText from "../components/DetailsText.js/detailsText";
import { TalkExpertBox } from "../components/TalkExpertBox/TalkExpertBox";
import CompanyProgressCard from "../components/CompanyProgressNoCard/companyProgressCard";
import TextBulletopt from "../components/TextBulletOpt/textBulletOpt";
import DetailHero from "../components/DetailHero/detailHero";
import { data } from "../header_data";

export const getStaticPaths = () => {
  const mobileDetail = data.mobile_app_development.map((curElem) => {
    return {
      params: {
        index: curElem.text.replace(/\s/g, "-"),
      },
    };
  });
  const webDetail = data.web_development.map((curElem) => {
    return {
      params: {
        index: curElem.text.replace(/\s/g, "-"),
      },
    };
  });
  const enterpriseMobilityDetail = data.enterprise_mobility_solutions.map(
    (curElem) => {
      return {
        params: {
          index: curElem.text.replace(/\s/g, "-"),
        },
      };
    }
  );
  const hireDevelopersDetail = data.dedicated_developers.map((curElem) => {
    return {
      params: {
        index: curElem.text.replace(/\s/g, "-"),
      },
    };
  });

  return {
    paths: [
      ...mobileDetail,
      ...webDetail,
      ...enterpriseMobilityDetail,
      ...hireDevelopersDetail,
    ],
    fallback: false,
  };
};
export const getStaticProps = (context) => {
  const text = context.params.index;
  const mobileDetail = data.mobile_app_development.filter((e) => {
    return e.text.replace(/\s/g, "-") == text;
  });
  const webDetail = data.web_development.filter((e) => {
    return e.text.replace(/\s/g, "-") == text;
  });
  const enterpriseMobilityDetail = data.enterprise_mobility_solutions.filter(
    (e) => {
      return e.text.replace(/\s/g, "-") == text;
    }
  );
  const hireDevelopersDetail = data.dedicated_developers.filter((e) => {
    return e.text.replace(/\s/g, "-") == text;
  });

  const detailsData = [
    mobileDetail,
    webDetail,
    enterpriseMobilityDetail,
    hireDevelopersDetail,
  ];
  const details = detailsData.filter((e) => {
    return e.length === 1;
  });

  const detail = details.flat();

  return {
    props: {
      detail,
    },
  };
};

const index = ({ detail }) => {
  return (
    <>
      <div className="h-full w-full dark:bg-[#040C18] bg-white mb-[100px]">
        <DetailHero detail={detail} />
        <div className="container py-[80px] flex flex-col gap-[50px] xl:mt-[50px] px-[16px] xl:px-0">
          <div className="w-full flex justify-center xl:flex-row xl:justify-between flex-col gap-[16px] md:gap-[32px]">
            <div className="basis-[50%]">
              <TextBulletopt />
            </div>
            <div className="basis-[45%]">
              <EnquiryForm />
            </div>
          </div>
          <CompanyProgressCard />
          <TalkExpertBox />
          <DetailsText />
          <TwoSections />
          <Blog />
          <div className="flex justify-center xl:flex-row flex-col xl:mt-[80px] md:mx-5 mx-0 mt-10  xl:p-0 px-5">
            <MeetUs />
            <EnquiryForm />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default index;
