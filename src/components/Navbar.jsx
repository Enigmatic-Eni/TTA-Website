import React from "react";
import { Menu, Search, Bell } from "lucide-react";
import { Assets } from "../assets/Assets"


export default function Navbar({ onMenuClick }) {
  return (
    <div className="bg-white  px-4 lg:px-6 py-4">

   
        <div className="flex items-center justify-between">


          <div className="relative  ">
            <Search className="w-5 h-5 text-[#6418C3] absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search here" 
              className="pl-10 pr-4 py-2 border  focus:outline-none focus:ring-2 focus:ring-purple-500 w-40 md:w-64 lg:w-96 h-12 bg-[#FAFAFA] rounded-[46px] text-[#AAAAAA]"
            />
          </div>

<div className=" flex gap-8 md:gap-12 items-center">
          <div className="flex gap-3">
            <div className="w-5 h-5 lg:w-7 lg:h-7   flex items-center justify-center">
                <img src={Assets.notification} alt="" />
            </div>
            <div className="w-5 h-5 lg:w-7 lg:h-7  flex items-center justify-center">
                <img src={Assets.gift} alt="" />
              
            </div>
            <div className="w-5 h-5 lg:w-7 lg:h-7  flex items-center justify-center">
              <img src={Assets.check} alt="" />
            </div>
            <div className="w-5 h-5 lg:w-7 lg:h-7  flex items-center justify-center">
              <img src={Assets.folder} alt="" />
            </div>
          </div>


          <div className="flex items-center gap-4">
            <img 
              src={Assets.profile} 
              alt="Profile" 
              className="w-6 h-6 lg:w-8 lg:h-8 rounded-full"
            />
            <div className=" flex items-center gap-2">
<span className="font-medium text-gray-900 text-sm lg:text-base hidden sm:block">Psalmzy</span>

<img src={Assets.arrow} alt="" />
            </div>
            
          </div>
        </div>
  </div>
    </div>
  );
}
