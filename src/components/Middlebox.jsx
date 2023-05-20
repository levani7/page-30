import React from "react";
import { ImUpload3 } from "react-icons/im";

const Middlebox = () => {
  return (
    <div className="mt-[52px] mx-[30px] mb-[34px] bg-white w-[663px] h-[899px] rounded-xl">
      <nav className="flex space-x-10 mt-[45px] md:justify-center">
        <a
          className="text-[#6F767E] text-[19px] font-bold hover:text-[#2CD889] hover:border-b-4 hover:border-[#2CD889]"
          href=""
        >
          თაიმლაინი
        </a>
        <a
          className="text-[#2CD889] text-[19px] font-bold border-b-4 border-[#2CD889] pb-2"
          href=""
        >
          ფაილები
        </a>
        <a
          className="text-[#6F767E] text-[19px] font-bold hover:text-[#2CD889] hover:border-b-4 hover:border-[#2CD889]"
          href=""
        >
          კომენტარი / კრიტერიუმები
        </a>
      </nav>
      <div className="flex flex-col md:flex-row">
        <button className="flex w-[209px] h-[62px] ml-[61px] mr-[21px] mt-[59px] text-[17px] text-white font-semibold bg-[#377DFF] rounded-xl justify-center items-center tracking-wide">
          <span className="mr-[15px] text-[20px] text-white w-6 h-6 transform rotate-180">
            <ImUpload3 />
          </span>
          რეზიუმე
        </button>
        <button className="flex w-[209px] h-[62px] mt-[59px] text-[17px] text-white font-semibold bg-[#FEA500] rounded-xl justify-center items-center tracking-wide">
          <span className="mr-[15px] text-[20px] text-white w-6 h-6 transform rotate-180">
            <ImUpload3 />
          </span>
          სამოტივაციო
        </button>
      </div>
      <div className="flex w-[440px] h-[91px] mt-[33px] ml-[61px] border-dashed border-4 border-[#377DFF]">
        <button className="text-[19px] font-semibold text-[#377DFF] flex justify-center items-center ml-[152px]">
          <span className="text-[#377DFF] text-[20px] mr-[12px]">
            <ImUpload3 />
          </span>
          ატვირთვა
        </button>
      </div>
    </div>
  );
};

export default Middlebox;
