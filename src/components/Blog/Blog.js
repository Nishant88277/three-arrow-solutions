import { data } from "../../data";
import React from "react";
import { HeadingSection } from "./BlogStyles";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <div>
      <HeadingSection className="font-extrabold xl:text-8xl md:text-7xl text-5xl leading-tight tracking-wide xl:w-3/5 pb-3 md:mb-[80px] Blog_text">
        A lot is happening, <br /> We are blogging about it.
      </HeadingSection>

      <div className="flex flex-col md:grid md:grid-cols-10 gap-[26px] md:gap-[50px]">
        {data.blogs.map((item, index) => (
          <BlogCard key={`${item.Heading}${index}`} data={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
