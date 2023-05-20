import React, { useState } from "react";
import departments from "./images/departments.svg";
import vacancies from "./images/vacancies.svg";
import dropdownpart from "./images/dropdownpart.svg";

const Rightbox = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleButtonClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <div className="topbox flex flex-col justify-center items-center w-[278px] h-[151px] bg-white mt-[53px] rounded-xl">
        <h2 className="mb-[18px] text-[17px] text-[#6F767E] font-semibold">კანდიდატის სტატუსი</h2>
        <div className="dropdown-container relative">
          <button
            type="button"
            className="flex justify-between w-[236px] h-[44px] bg-[#2CD889] space-x-1 text-[#6F767E] font-bold text-[19px] px-[25px] py-2 ring-white rounded-full"
            id="menu-button"
            aria-expanded={isDropdownOpen}
            aria-haspopup="true"
            onClick={handleButtonClick}
          >
            <p className="text-white">ინტერვიუ</p>
            <img className="mt-[10px] font-white" src={dropdownpart} alt="Dropdown Arrow" />
          </button>
          {isDropdownOpen && (
            <div className="space-y-4 ml-4 dropdown-content absolute flex flex-col left-0 bg-white border border-gray-200">
              <a href="" className="flex justify-center items-center w-[200px] h-[50px] hover:bg-green-300">
                Dropdown content
              </a>
              <a href="" className="flex justify-center items-center w-[200px] h-[50px] hover:bg-green-300">
                Dropdown content
              </a>
              <a href="" className="flex justify-center items-center w-[200px] h-[50px] hover:bg-green-300">
                Dropdown content
              </a>
              <a href="" className="flex justify-center items-center w-[200px] h-[50px] hover:bg-green-300">
                Dropdown content
              </a>
              <a href="" className="flex justify-center items-center w-[200px] h-[50px] hover:bg-green-300">
                Dropdown content
              </a>
            </div>
          )}
        </div>
      </div>
      <div className="bottombox bg-white w-[276px] h-[719px] mt-[30px] mb-[34px] rounded-xl">
        <div className="ml-[47px] pt-[44px]">
          <h2 className="text-[22px] font-semibold text-[#6F767E]">ვაკანსიის <br /> დეტალები</h2>
        </div>
        <nav className="w-[197px] h-[522px] mt-[60px] mx-[40px] flex flex-col sm:justify-center space-y-2">
          <a className="flex text-[#6F767E] font-semibold" href="">
            <img className="mb-2" src={departments} alt="" />
            <div className="ml-4">დეპარტამენტი<span className="text-gray-400 flex flex-col">აიტი</span></div>
          </a>
          <a className="flex text-[#6F767E] font-semibold" href="">
            <img className="mb-2" src={departments} alt="" />
            <div className="ml-4">პოზიცია<span className="text-gray-400 flex flex-col">დეველოპერი</span></div>
          </a>
          <a className="flex text-[#6F767E] font-semibold" href="">
            <img className="mb-2" src={departments} alt="" />
            <div className="ml-4">თარიღი<span className="text-gray-400 flex flex-col">2022-12-30 - 2023-01-29</span></div>
          </a>
          <a className="flex text-[#6F767E] font-semibold" href="">
            <img className="mb-2" src={vacancies} alt="" />
            <div className="ml-4">ვაკანსიის ტიპი<span className="text-gray-400 flex flex-col">სრული-ჰიბრიდული</span></div>
          </a>
          <a className="flex text-[#6F767E] font-semibold" href="">
            <img className="mb-2" src={departments} alt="" />
            <div className="ml-4">სტატუსი<span className="text-gray-400 flex flex-col">მიმდინარე</span></div>
          </a>
          <a className="flex text-[#6F767E] font-semibold" href="">
            <img className="mb-2" src={departments} alt="" />
            <div className="ml-4">ანაზღაურება<span className="text-gray-400 flex flex-col">$3000 - $5000</span></div>
          </a>
          <a className="flex text-[#6F767E] font-semibold" href="">
            <img className="mb-2" src={departments} alt="" />
            <div className="ml-4">სამუშაო საათები<span className="text-gray-400 flex flex-col">09:30:00 - 06:30:00</span></div>
          </a>
          <a className="flex text-[#6F767E] font-semibold" href="">
            <img className="mb-2" src={departments} alt="" />
            <div className="ml-4">გამოცდილება<span className="text-gray-400 flex flex-col">3 წელი</span></div>
          </a>
          <a className="flex text-[#6F767E] font-semibold" href="">
            <img className="mb-2" src={departments} alt="" />
            <div className="ml-4">ლოკაცია<span className="text-gray-400 flex flex-col">თბილისი</span></div>
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Rightbox;
