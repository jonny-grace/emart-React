import React from "react";

import womenImg from "../img/woman_hero.png";


import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className=" bg-orange-900 h-[600px] bg-hero bg-no-repeat bg-cover bg-center py-24">
      <div className="flex justify-around container mx-auto h-full">
        {/* text */}
        <div className="flex flex-col justify-center">
          <div className=" font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] bg-red-500 mr-3"></div>New Trend
          </div>


          <h1 className=" text-[70px] leading-[1.1] font-light mb-4">GRACE SALE STYLISH <br />
            <span className="font-semibold">WOMENS</span></h1>

          <Link to={'/'} className="uppercase self-start font-semibold border-b-2 border-primary"> Discover More</Link>
        </div>
        {/* image */}
        <div className="hidden lg:block">
          <img src={womenImg} alt="woman" className="w-full h-[500px]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
