"use cleint";
import { useEffect } from "react";
import { preLoaderAnim } from "./loader";
import "./preloader.css";

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <div className="preloader gap-[5px] overflow-hidden text-[14px] sm:gap-[10px] sm:text-[16px] md:text-[18px] lg:text-[20px]">
      <div className="texts-container w-500 flex h-60 items-center justify-center gap-[5px] overflow-hidden text-[18px] font-medium text-[#e4ded7] opacity-0 sm:gap-[10px] sm:text-[20px] md:text-[22px] lg:text-[24px]">
        <span>Inspire,</span>
        <span>Strive,</span>
        <span>Prosper.</span>
        <div className="sub hidden"></div>
      </div>
    </div>
  );
};

export default PreLoader;
