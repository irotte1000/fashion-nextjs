import Image from "next/image";
import React from "react";
import IconSocial from "./IconSocial";

const Hero = () => {
  return (
    <div className="container h-screen bg-blackish py-10 px-16 mt-12">
      <div className="flex flex-col md:flex-row-reverse justify-between items-center space-y-4">
        <div className="w-[300px] h-[350px] md:w-[400px] md:h-[500px] bg-orange-800 rounded-bl-[150px] relative overflow-hidden pt-10 flex justify-center ">
          <Image
            src="/slide0.png"
            alt="slide1"
            width={300}
            height={400}
            className="bottom-0"
          />
        </div>
        <div className=" flex-1 flex-col justify-center space-y-4 md:space-y-6">
          <h1 className="text-center md:text-left text-2xl md:text-7xl font-bold capitalize tracking-widest">
            Find the best fastion style for you
          </h1>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button className="px-4 py-1 bg-orange-800 text-white tracking-wider uppercase hover:border hover:border-orange-800 hover:bg-transparent hover:text-orange-800 transition-all duration-300">
            Shop Now
          </button>
        </div>
      </div>
      <div className="mt-8 md:mt-20">
        <IconSocial />
      </div>
    </div>
  );
};

export default Hero;
