import React from "react";
import { BiLogoFacebook } from "react-icons/bi";
import { BsTwitter, BsLinkedin, BsYoutube } from "react-icons/bs";

const iconSocial = () => {
  return (
    <div className="flex items-center justify-center gap-5">
      <div className="w-20 h-[2px] bg-orange-800"></div>
      <div className="bg-orange-800 w-8 h-8 flex items-center justify-center rounded-full text-white hover:bg-transparent hover:border hover:border-orange-800 hover:text-orange-800 cursor-pointer transition-all duration-300 hover:-translate-y-2">
        <BiLogoFacebook size={20} />
      </div>
      <div className="bg-orange-800 w-8 h-8 flex items-center justify-center rounded-full text-white hover:bg-transparent hover:border hover:border-orange-800 hover:text-orange-800 cursor-pointer transition-all duration-300 hover:-translate-y-2">
        <BsTwitter size={20} />
      </div>
      <div className="bg-orange-800 w-8 h-8 flex items-center justify-center rounded-full text-white hover:bg-transparent hover:border hover:border-orange-800 hover:text-orange-800 cursor-pointer transition-all duration-300 hover:-translate-y-2">
        <BsLinkedin size={18} />
      </div>
      <div className="bg-orange-800 w-8 h-8 flex items-center justify-center rounded-full text-white hover:bg-transparent hover:border hover:border-orange-800 hover:text-orange-800 cursor-pointer transition-all duration-300 hover:-translate-y-2">
        <BsYoutube size={20} />
      </div>
      <div className="w-20 h-[2px] bg-orange-800"></div>
    </div>
  );
};

export default iconSocial;
