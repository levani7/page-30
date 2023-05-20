import React from "react";

const Leftbox = () => {
  return (
    <div className="rounded-xl w-[482px] ml-[37px] mt-[52px] mb-[34px] bg-white">
      <div className="w-[434px] bg-[#377DFF] mx-[25px] mt-[23px] pb-[28px] rounded-xl">
        <h2 className="text-[25px] font-bold text-white pt-[34px] pl-[29px] pr-[125px]">
          სახელი გვარიგვარი
        </h2>
        <p className="text-white pt-[36px] pl-[29px]">პოზიცია: Backend Developer</p>
        <p className="text-white pl-[29px]">სასურველი ანაზღაურება: 10 000 ₾</p>
        <p className="text-white pl-[29px]">გამოცდილება: 8 წელი</p>
      </div>
      <form className="mt-[40px] ml-[48px]">
        <label className="block">
          <span className="mb-[8px] ml-[8px] block text-[15px] font-bold text-[#6F767E]">
            ტელ. ნომერი
          </span>
          <input
            type="tel"
            className="mb-[38px] rounded-full w-[354px] h-[40px] bg-[#FAFBFD]"
          />
        </label>
        <label className="block">
          <span className="mb-[8px] ml-[8px] block text-[15px] font-bold text-[#6F767E]">
            ელ-ფოსტა
          </span>
          <input
            type="email"
            className="mb-[38px] rounded-full w-[354px] h-[40px] bg-[#FAFBFD]"
          />
        </label>
        <label className="block">
          <span className="mb-[8px] ml-[8px] block text-[15px] font-bold text-[#6F767E]">
            პირადი ნომერი
          </span>
          <input
            type="text"
            className="mb-[38px] rounded-full w-[354px] h-[40px] bg-[#FAFBFD]"
          />
        </label>
        <label className="block">
          <span className="mb-[8px] ml-[8px] block text-[15px] font-bold text-[#6F767E]">
            მისამართი
          </span>
          <input
            type="text"
            className="mb-[38px] rounded-full w-[354px] h-[40px] bg-[#FAFBFD]"
          />
        </label>
        <label className="block">
          <span className="mb-[8px] ml-[8px] block text-[15px] font-bold text-[#6F767E]">
            სქესი
          </span>
          <input
            type="text"
            className="mb-[38px] rounded-full w-[354px] h-[40px] bg-[#FAFBFD]"
          />
        </label>
        <label className="block">
          <span className="mb-[8px] ml-[8px] block text-[15px] font-bold text-[#6F767E]">
            ეროვნება
          </span>
          <input
            type="text"
            className="rounded-full w-[354px] h-[40px] bg-[#FAFBFD]"
          />
        </label>
      </form>
    </div>
  );
};

export default Leftbox;
