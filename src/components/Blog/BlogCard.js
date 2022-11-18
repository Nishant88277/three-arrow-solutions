import React from 'react';

const BlogCard = ({data, index}) => {

  const {imgsrc, Heading, date} = data;

  if(index === 0){
    return (
      <div
        className={`bg-[#042C54] text-white flex flex-col  h-full ${
          index === 0
            ? "md:row-span-1 md:col-span-5 xl:row-span-2 xl:col-span-4"
            : ""
        }`}
      >
        <div className="md:h-[130px] xl:h-[290px] overflow-hidden">
          <img width="100%" src={imgsrc} />
        </div>

        <div className="md:h-[calc(100%-290px)] flex flex-col py-[32px] px-[24px]">
          <h4 className="text-lg">{date}</h4>
          <h1 className="text-2xl font-extrabold">{Heading}</h1>

          <button className="mt-auto text-lg font-semibold text-left">
            Read Full Article
          </button>
        </div>
      </div>
    );
  }else{
     return (
       <div
         className={`bg-[#042C54] min-h-[323px]  text-white flex flex-col md:col-span-5 xl:col-span-3`}
       >
         <div className="h-[130px] overflow-hidden">
           <img width="100%" src={imgsrc} />
         </div>

         <div className="min-h-[calc(323px-130px)] flex flex-col py-[20px] px-[24px]">
           <h4 className="text-lg">{date}</h4>
           <h1 className="text-2xl font-extrabold">{Heading}</h1>

           <button className="mt-auto text-lg font-semibold text-left">
             Read Full Article
           </button>
         </div>
       </div>
     );
  }
}

export default BlogCard