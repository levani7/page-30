import React from "react";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { GoDashboard } from 'react-icons/go';
import image1 from "./images/image1.svg";
import image2 from "./images/image2.svg";
import alterhr from "./images/alterhr.svg";
import companies from "./images/companies.svg";
import departments from "./images/departments.svg";
import settings from "./images/settings.svg";
import vacancies from "./images/vacancies.svg";
import candidates from "./images/candidates.svg";
import dashboard from "./images/dashboard.svg";
import reports from "./images/reports.svg";
import positions from "./images/positions.svg";

import "./al.css";

const Navbar = () => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <div className="w-full md:w-[350px] h-screen bg-white px-6">
      <nav className="space-y-4 mt-8 md:mt-[53px]">
        <div className="mb-[77px] flex items-center pl-[50px] font-bold">
          {/* <a href=""><img src={image1} alt="Logo" /></a>
          <a href=""><img className="absolute left-[80px] top-[53px]" src={image2} alt="Logo 2" /></a> */}
          <a href=""><img src={alterhr} className="ml-[10px]" alt="AlterHR" /></a>
        </div>
        {[
          { title: 'მენიუ', url: '/menu', className: 'navbar-link-no-hover' },
          { title: 'დეშბორდი', url: '/dashboard', img: dashboard },
          { title: 'რეკრუტმენტი', className: 'navbar-link-no-hover' },
          { title: 'პარამეტრები', url: '/settings', img: settings },
          { title: 'კომპანიები', url: '/companies', bgColor: 'bg-blue-500', img: companies },
          { title: 'დეპარტამენტები', url: '/departments', img: departments },
          { title: 'პოზიციები', url: '/positions', img: positions, imgStylePositions: { filter: 'brightness(0.8)' } },
          { title: 'ვაკანსიები', url: '/vacancies', img: vacancies },
          { title: 'კანდიდატები', url: '/candidates', img: candidates },
          { title: 'კალენდარი', url: '/calendar', icon: <MdOutlineCalendarMonth /> },
          { title: 'რეპორტები', url: '/reports', img: reports },
        ]
          .map(({ title, url, icon, bgColor, className, img, imgStylePositions }) => (
            <a
              key={title}
              href={url}
              className={`text-[21px] flex items-center rounded-lg pl-[50px] py-2 pr-[40px] hover:bg-[#377DFF] hover:text-slate-50 font-bold ${bgColor} ${className || ''} `}
              style={title === 'მენიუ' || title === 'რეკრუტმენტი' ? { fontSize: '22px', color: '#333333' } : { color: '#C4C4C4' }}
            >
              {img && <img src={img} alt={title} className="mr-4" style={imgStylePositions} />}
              {icon && <span className="mr-4">{icon}</span>}
              {title}
            </a>
          ))}
        <p className="text-[15px] pl-[65px] pt-[100px] text-[#C4C4C4]">{currentDate}</p>
        <p className="text-[11px] pl-[50px] pt-[20px] text-[#C4C4C4]">Created by ALTERA</p>
      </nav>
    </div>
  );
};

export default Navbar;
