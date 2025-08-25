import React, { useState } from "react";
import {
  User,
  Book,
  MessageCircle,
  Newspaper,
  BookOpen,
  Gift,
  Settings,
} from "lucide-react";
import { Assets } from "../assets/Assets";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const navigationItems = [
    { icon: User, label: "Dashboard", active: true },
    { icon: User, label: "TTA About us" },
    { icon: Book, label: "Online Bible" },
    { icon: MessageCircle, label: "TTA Testimonies", hasArrow: true },
    { icon: Newspaper, label: "TTA News" },
    { icon: BookOpen, label: "Hymn Book" },
    { icon: Gift, label: "Tithe & Offering" },
    { icon: Settings, label: "Account Settings" },
  ];

  return (
    <div>
      {/* Desktop Sidebar */}
      <div className="px-3 shadow w-[18rem] min-h-screen lg:flex flex-col justify-between hidden">
        <div>
          <div className=" flex justify-between">
          <div className="flex flex-col items-center gap-2 py-5">
            <img src={Assets.logo} alt="" className="w-[20%]" />
            <p className="text-lg font-bold">The Transformation Arena</p>
          </div>
          
          </div>
          <div className="flex flex-col gap-3 px-4 pt-4">
            {navigationItems.map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 px-4 py-3 mx-2 rounded-lg cursor-pointer ${
                  item.active
                    ? "bg-purple-100 text-purple-700 font-medium"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed left-7 top-4 z-10 p-2 lg:hidden"
        >
          {isOpen ? <MdClose size={24} /> : <FiMenu size={24} />}
        </button>

        <div
          className={`flex flex-col ${
            isOpen ? "w-[15rem]" : "w-20 shadow"
          } transition-all duration-300 bg-white relative overflow-hidden`}
        >
          <div className="px-3 shadow w-[15rem] min-h-screen flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 py-5 pl-4">
                {isOpen && <img src={Assets.logo} alt="" className="w-[20%]" />}
                {isOpen && (
                  <p className="text-xl font-bold">DimeDiary</p>
                )}
              </div>
              <div className="flex flex-col gap-3 px-2 pt-4">
               {navigationItems.map((items, index) => (
  <div
    key={index}
    className={`flex items-center font-medium text-text-color gap-2 w-[90%] transition-all duration-500 ease-in-out py-3 pl-3 hover:bg-[#c2b2d9] hover:text-brand-color rounded-lg`}
  >
    <items.icon className="w-4 h-4" />
    {isOpen && <span>{items.label}</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className="flex h-screen">
    //   {/* Sidebar */}
    //   <div
    //     className={`${
    //       isOpen ? "translate-x-0" : "-translate-x-full"
    //     } lg:translate-x-0 lg:static fixed inset-y-0 left-0 z-50 
    //     w-64 lg:w-52 bg-white border-r-2 border-blue-500 flex flex-col 
    //     transition-transform duration-300 ease-in-out`}
    //   >
    //     {/* Logo Section */}
    //     <div className="p-4 border-b flex items-center justify-between">
    //       <div className="flex items-center gap-2">
    //         <img src={Assets.logo} alt="Logo" className="w-8 h-8" />
    //         <span className="text-sm font-medium text-gray-800">
    //           The Transformation Arena
    //         </span>
    //       </div>
    //       {/* Show toggle icons only on mobile */}
    //       <button className="lg:hidden p-1" onClick={() => setIsOpen(!isOpen)}>
    //         {isOpen ? (
    //           <X className="w-5 h-5 text-black" />
    //         ) : (
    //           <Menu className="w-5 h-5 text-gray-600" />
    //         )}
    //       </button>
    //       {/* Show close button only on desktop */}
    //       <button className="hidden lg:block p-1" onClick={() => setIsOpen(false)}>
    //         <X className="w-5 h-5 text-black" />
    //       </button>
    //     </div>

    //     {/* Navigation */}
    //     <div className="flex-1 py-4">
    //       {navigationItems.map((item, index) => {
    //         const Icon = item.icon;
    //         return (
    //           <div
    //             key={index}
    //             className={`flex items-center justify-between px-4 py-3 mx-2 rounded-lg cursor-pointer ${
    //               item.active
    //                 ? "bg-purple-100 text-purple-700 font-medium"
    //                 : "text-gray-600 hover:bg-gray-50"
    //             }`}
    //           >
    //             <div className="flex items-center gap-3">
    //               <Icon className="w-4 h-4" />
    //               <span className="text-sm">{item.label}</span>
    //             </div>
    //             {item.hasArrow && <ChevronRight className="w-4 h-4" />}
    //           </div>
    //         );
    //       })}
    //     </div>

    //     {/* Prayer Request Button */}
    //     <div className="p-4">
    //       <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-4 text-white flex items-center justify-between">
    //         <div className="text-sm font-medium">Send your prayer request</div>
    //         <ArrowRight className="w-5 h-5" />
    //       </div>
    //     </div>

    //     {/* Footer */}
    //     <div className="p-4 text-xs text-gray-500 border-t">
    //       <div>TTA Online Portal Version 1</div>
    //       <div className="flex items-center gap-1 mt-1">
    //         Made with <span className="text-red-500">♥</span> by TTA Tech govt
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
