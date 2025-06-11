import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#072422] flex flex-col items-stretch justify-between gap-[4rem] md:gap-[8.25rem] p-[2rem] md:p-28">
      <div>
        <div className="flex flex-col md:flex-row justify-between items-start gap-5 md:gap-0">
          <div className="flex flex-col gap-[1.5rem] text-[11.23px] md:text-base special-font text-white">
            <div className=" flex flex-row justify-start items-center gap-0">
              <img
                src="/ana-website-logo.svg"
                alt="analogo"
                className="w-10 h-10 md:w-20 md:h-20"
              />
              <img
                src="/oau.svg"
                alt="oaulogo"
                className="w-20 h-12 md:w-40 md:h-24"
              />
            </div>
            <div>
              <p className="font-bold text-[9.5px] md:text-base">
                ASSOCIATION OF NIGERIAN AUTHORS
              </p>
              <p className="text-[0.55rem] leading-[0.85rem] md:text-base md:leading-[1.2rem]">
                OBAFEMI AWOLOWO UNIVERSITY (CHAPTER)
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-4">
            <div className="w-12 h-12 md:w-[4rem] md:h-[4rem] object-contain bg-[#051A17] rounded-full flex justify-center items-center p[1.2rem]">
              <img src="/instagram.svg" alt="ana-logo" />
            </div>
            <div className="w-12 h-12 md:w-[4rem] md:h-[4rem] object-contain bg-[#051A17] rounded-full flex justify-center items-center">
              <img src="/twitter.svg" alt="ana-logo" />
            </div>
            <div className="w-12 h-12 md:w-[4rem] md:h-[4rem] object-contain bg-[#051A17] rounded-full flex justify-center items-center">
              <img src="/whatsapp.svg" alt="ana-logo" />
            </div>
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <img src="/booc-pic.svg" alt="booc-logo" />
      </div>
      <div className="flex items-center justify-between gap-4 lg:w-[49.375rem]">
        <p className="text-white flex flex-col justify-start items-start special-font">
          💚 <span>Designed by</span>{" "}
          <span className="underline">Desire Destiny.</span>
        </p>
        <div className="hidden md:block">
          <img src="/booc-pic.svg" alt="booc-logo" />
        </div>
      </div>
      <div className="relative w-full h-64 mt-[-16rem] lg:mt-[-28rem]">
        <img
          src="/water-paint.svg"
          alt="ana-logo"
          className="w-30 h-30 md:w-64 md:h-64 absolute top-[4.5rem] right-[-2rem] md:top-[7rem] md:right-[-7rem]"
        />
      </div>
    </div>
  );
};

export default Footer;
