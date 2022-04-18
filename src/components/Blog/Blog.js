import React from "react";
import { HeadingSection } from "./BlogStyles";
const Blog = () => {
  return (
    <div className="mt-52">
      <HeadingSection className="font-extrabold text-8xl leading-tight tracking-wide w-3/5">
        A lot is happening, We are blogging about it.
      </HeadingSection>
      <div class="grid grid-rows-2 mt-40 text-white  grid-flow-col gap-24 w-full">
        <div class="row-span-2 col-span-3  bg-[#042C54] text-white">
          <div className="max-w-fit flex flex-col">
            <img src="/images/Rectangle 22.jpg" />
            <div className="relative h-96 p-10">
              <div className="absolute px-10 leading-normal">
                <h5 className="text-2xl">Sep 26, 2021</h5>
                <p className="font-extrabold text-5xl">
                  Curabitur vulputate dui dui, vel rutrum odio semper et.
                </p>
                <div className="text-2xl relative top-28">
                  Read Full Article
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-3 grid-flow-row grid-rows-2  flex justify-around ">
          <div className="w-2/5 bg-[#042C54]">
            <div className="max-w-fit flex flex-col">
              <img src="/images/Rectangle 22 (1).jpg" />
              <div className="relative ">
                <div className="absolute p-7">
                  <h5 className="text-xl">Sep 26, 2021</h5>
                  <p className="font-extrabold text-3xl">
                    Curabitur vulputate dui dui, vel rutrum odio semper et.
                  </p>
                  <div className="relative top-16 text-xl">
                    Read Full Article
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>{" "}
          <div className="w-2/5 bg-[#042C54]">
            <div className="max-w-fit flex flex-col">
              <img src="/images/Rectangle 22 (2).jpg" />
              <div className="relative ">
                <div className="absolute p-7">
                  <h5 className="text-xl">Sep 26, 2021</h5>
                  <p className="font-extrabold text-3xl">
                    Curabitur vulputate dui dui, vel rutrum odio semper et.
                  </p>
                  <div className="relative top-16 text-xl">
                    Read Full Article
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
        <div class="col-span-3 grid-flow-row grid-rows-2 flex justify-around ">
          <div className="w-2/5 bg-[#042C54]">
            <div className="max-w-fit flex flex-col">
              <img src="/images/Rectangle 22 (3).jpg" />
              <div className="relative ">
                <div className="absolute p-7">
                  <h5 className="text-xl">Sep 26, 2021</h5>
                  <p className="font-extrabold text-3xl">
                    Curabitur vulputate dui dui, vel rutrum odio semper et.
                  </p>
                  <div className="relative top-16 text-xl">
                    Read Full Article
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>{" "}
          <div className="w-2/5 bg-[#042C54]">
            <div className="max-w-fit flex flex-col">
              <img src="/images/Rectangle 22 (4).jpg" />
              <div className="relative ">
                <div className="absolute p-7">
                  <h5 className="text-xl">Sep 26, 2021</h5>
                  <p className="font-extrabold text-3xl">
                    Curabitur vulputate dui dui, vel rutrum odio semper et.
                  </p>
                  <div className="relative top-16 text-xl">
                    Read Full Article
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>

      {/* <div class="container mx-auto px-4">
        <section class="py-8 px-4">
          <div class="flex flex-wrap -mx-4">
            <div class="hidden md:block md:w-1/2 px-4">
              <div class=" max-w-2xl w-full bg-cover rounded shadow-md">
                <div class="rounded overflow-hidden shadow-lg">
                  <img
                    class="w-full"
                    src="https://source.unsplash.com/random/1280x720'"
                    alt="Sunset in the mountains"
                  />
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                    <p class="text-gray-700 text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Voluptatibus quia, nulla! Maiores et perferendis eaque,
                      exercitationem praesentium nihil.
                    </p>
                  </div>
                  <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #photography
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #travel
                    </span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      #winter
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <section class="md:w-1/2 px-4">
              <div class="flex flex-wrap -mx-4 -mb-8">
                <div class=" max-w-md md:w-3/6 px-4 mb-8">
                  <div class=" w-full bg-cover rounded shadow-md">
                    <div class="rounded overflow-hidden shadow-lg">
                      <img
                        class="w-full"
                        src="https://source.unsplash.com/random/1280x720'"
                        alt="Sunset in the mountains"
                      />
                      <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">
                          The Coldest Sunset
                        </div>
                        <p class="text-gray-700 text-base">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Voluptatibus quia, nulla! Maiores et perferendis
                          eaque, exercitationem praesentium nihil.
                        </p>
                      </div>
                      <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                          #photography
                        </span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                          #travel
                        </span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                          #winter
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="md:w-3/6 px-4 mb-8">
                  <div class="w-full bg-cover rounded shadow-md">
                    <div class="rounded overflow-hidden shadow-lg">
                      <img
                        class="w-full"
                        src="https://source.unsplash.com/random/1280x720'"
                        alt="Sunset in the mountains"
                      />
                      <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">
                          The Coldest Sunset
                        </div>
                        <p class="text-gray-700 text-base">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Voluptatibus quia, nulla! Maiores et perferendis
                          eaque, exercitationem praesentium nihil.
                        </p>
                      </div>
                      <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                          #photography
                        </span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                          #travel
                        </span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                          #winter
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="md:w-3/6 px-4 mb-8">
                  <div class="w-full bg-cover rounded shadow-md">
                    <div class="rounded overflow-hidden shadow-lg">
                      <img
                        class="w-full"
                        src="https://source.unsplash.com/random/1280x720'"
                        alt="Sunset in the mountains"
                      />
                      <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">
                          The Coldest Sunset
                        </div>
                        <p class="text-gray-700 text-base">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Voluptatibus quia, nulla! Maiores et perferendis
                          eaque, exercitationem praesentium nihil.
                        </p>
                      </div>
                      <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                          #photography
                        </span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                          #travel
                        </span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                          #winter
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="md:w-3/6 px-4 mb-8">
                  <div class="w-full bg-cover rounded shadow-md">
                    <div class="rounded overflow-hidden shadow-lg">
                      <img
                        class="w-full"
                        src="https://source.unsplash.com/random/1280x720'"
                        alt="Sunset in the mountains"
                      />
                      <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">
                          The Coldest Sunset
                        </div>
                        <p class="text-gray-700 text-base">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Voluptatibus quia, nulla! Maiores et perferendis
                          eaque, exercitationem praesentium nihil.
                        </p>
                      </div>
                      <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                          #photography
                        </span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                          #travel
                        </span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                          #winter
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div> */}

      {/* <div className="flex">
        <div className="w-2/5">
          <div className="relative ">
            <img src="/images/Rectangle 22.jpg" />
            <div className="bg-[#042C54] h-96 relative w-full text-2xl bottom-0">
              <h5>Sep 25, 2021</h5>
              <h4>Curabitur vulputate dui dui, vel rutrum odio semper et.</h4>
            </div>
          </div>
        </div>
        <div className="w-3/5 flex flex-wrap ">
          <div className="w-2/5 ">
            <div className="relative">
              <img src="/images/Rectangle 22.jpg" />
              <div className="bg-[#042C54] absolute w-full text-2xl bottom-0">
                <h5>Sep 25, 2021</h5>
                <h4>Curabitur vulputate dui dui, vel rutrum odio semper et.</h4>
              </div>
            </div>
          </div>
          <div className="w-2/5  ">
            <div className="relative">
              <img src="/images/Rectangle 22.jpg" />
              <div className="bg-[#042C54] absolute w-full text-2xl bottom-0">
                <h5>Sep 25, 2021</h5>
                <h4>Curabitur vulputate dui dui, vel rutrum odio semper et.</h4>
              </div>
            </div>
          </div>

          <div className="w-2/5 ">
            <div className="relative">
              <img src="/images/Rectangle 22.jpg" />
              <div className="bg-[#042C54] absolute w-full text-2xl bottom-0">
                <h5>Sep 25, 2021</h5>
                <h4>Curabitur vulputate dui dui, vel rutrum odio semper et.</h4>
              </div>
            </div>
          </div>
          <div className="w-2/5 ">
            <div className="relative">
              <img src="/images/Rectangle 22.jpg" />
              <div className="bg-[#042C54] absolute w-full text-2xl bottom-0">
                <h5>Sep 25, 2021</h5>
                <h4>Curabitur vulputate dui dui, vel rutrum odio semper et.</h4>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Blog;