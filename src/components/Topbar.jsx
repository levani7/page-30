import React, { useState } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import dropdownpart from "./images/dropdownpart.svg";
import georgiaflag from "./images/georgiaflag.png";
import profilepicture from "./images/profilepicture.svg";
import profilesetting from "./images/profilesetting.svg";

const Topbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleButtonClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="w-full flex justify-around items-center ml-[369px] md:w-[1149px] h-[70px] bg-white mt-4 md:mt-[23px] rounded-full">
      <div>
        <label className="flex">
          <input
            className="pl-4 placeholder:italic rounded-full placeholder:text-slate-400 block bg-[#FAFBFD] h-[50px] w-[452px] border border-slate-300 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-lg placeholder:text-[16px] placeholder:pl-[50px]"
            placeholder="ძებნა"
            type="text"
            name="search"
          />
          <div className="flex justify-center items-center bg-[#377DFF] w-[50px] h-[50px] rounded-full ml-[-40px]">
            <a className="text-[23px] text-white " href="">
              <CiSearch />
            </a>
          </div>
        </label>
      </div>

      <div className="dropdown-container relative">
        <button
          type="button"
          className="space-x-1 text-[#6F767E] font-bold text-[19px] flex justify-center gap-x-1.5 bg-[#FAFBFD] px-3 py-2 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 rounded-full"
          id="menu-button"
          aria-expanded={isDropdownOpen}
          aria-haspopup="true"
          onClick={handleButtonClick}
        >
          <img className="mr-1" src={georgiaflag} alt="" />
          <span className="mt-1">GEO</span>
          <img className="mt-[10px] " src={dropdownpart} alt="" />
        </button>
        {isDropdownOpen && (
          <div className="space-y-4 ml-4 dropdown-content absolute flex flex-col left-0 bg-white border border-gray-200">
            <a
              href=""
              className="flex justify-center items-center w-[100px] h-[30px] hover:bg-gray-300"
            >
              content
            </a>
            <a
              href=""
              className="flex justify-center items-center w-[100px] h-[30px] hover:bg-gray-300"
            >
              content
            </a>
            <a
              href=""
              className="flex justify-center items-center w-[100px] h-[30px] hover:bg-gray-300"
            >
              content
            </a>
            <a
              href=""
              className="flex justify-center items-center w-[100px] h-[30px] hover:bg-gray-300"
            >
              content
            </a>
            <a
              href=""
              className="flex justify-center items-center w-[100px] h-[30px] hover:bg-gray-300"
            >
              content
            </a>
          </div>
        )}
      </div>

      <div className="justify-around flex w-[355px] h-[50px] bg-[#377DFF] rounded-full">
        <span className="text-[45px] text-white">
          <IoIosNotificationsOutline />
        </span>
        <img className="w-[40px]" src={profilepicture} alt="" />
        <p className="text-white font-semibold mt-[10px]">ლაშა კოხრეიძე</p>
        <img href="#" className="w-[40px]" src={profilesetting} alt="" />
      </div>
    </div>
  );
};

export default Topbar;
