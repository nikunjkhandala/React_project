import React from 'react'
import myImage from "/Users/js/Full-Stack/ReactJs_projects/nike-page/src/assets/shoes.png";
import myImage1 from "/Users/js/Full-Stack/ReactJs_projects/nike-page/src/assets/filpkart.png";
import myImage2 from "/Users/js/Full-Stack/ReactJs_projects/nike-page/src/assets/a.png";

const Hero = () => {
  return (
    <div>
      <header className="flex ml-[157px] mt-[80px]">
        <div className="w-[595px] h-[613px]">
          <h1 className="font-extrabold h-[306px] text-[108px] leading-[102px] gap-9 mb-9">
            YOUR FEET DESERVE THE BEST
          </h1>
          <p className="text-[16px] w-[404px] h-[91px] text-[#5A5959] font-semiblod mt-9">
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          <div className="gap-10 mt-4">
            <button className="bg-[#D01C28] py-1.5 px-4 m-3 rounded text-white">
              Shop Now
            </button>
            <button className="border-[1px] text-[#5A5959] border-black py-1.5 px-4 rounded ">
              Category
            </button>
          </div>

          <div className="w-[131px] h-[67px]">
            <p className="text-[#5A5959] text-[16px] h-full gap-4">
              Also Available On
            </p>
            <div className="flex w-[80px] h-[32px]">
              <img src={myImage1} alt="filp" />
              <img src={myImage2} alt="amozon" />
            </div>
          </div>
        </div>

        <div>
          <img className="w-[530px] h-[487px]" src={myImage} alt="shoes" />
        </div>
      </header>
    </div>
  );
}

export default Hero