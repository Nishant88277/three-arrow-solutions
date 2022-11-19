import React from "react";
import Footer from "../../components/Footer/Footer";
import { data } from "../../data";
import Blog from "../../components/Blog/Blog"
import { Layout } from "../../layout/Layout";
import { SubscribeCard } from "../../components/SubscribeCard/SubscribeCard";
import { TalkExpertBox } from "../../components/TalkExpertBox/TalkExpertBox"

export const index = () => {
  return (
    <div className="h-full w-full dark:bg-[#040C18] bg-white pt-1">
      <Layout>
        <Blog/>
        <SubscribeCard/>
        <div>
          <div className="md:grid grid-cols-10 gap-y-28 gap-x-28 justify-center flex-wrap  ">
            {data.blogs.map((item, index) => {
              if (index !== 0)
                return (
                  <div
                    key={index}
                    className="col-span-5 md:col-span-5 sm:w-full xl:mb-0 mb-10 bg-[#042C54] Rest_blog "
                  >
                    <div
                      className="xl:max-w-fit flex flex-col"
                      style={{
                        clipPath:
                          "polygon(0% 5%,10% 0%, 100% 0%, 100% 5%, 100% 100%, 95% 100%,5% 100%,0 100%)",
                      }}
                    >
                      <img alt={item.imgsrc} src={item.imgsrc} />
                      <div className="relative h-72">
                        <div className="absolute p-7">
                          <p className="font-extrabold text-3xl">
                            {item.Heading}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
            })}
          </div>
          <TalkExpertBox/>
        </div>
      </Layout>

      <Footer />
    </div>
  );
};
export default index;
