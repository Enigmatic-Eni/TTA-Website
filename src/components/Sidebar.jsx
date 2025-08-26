import { useState } from "react";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import {
  User,
  Book,
  MessageCircle,
  Newspaper,
  BookOpen,
  Gift,
  Settings,
  ChevronDown,
  ChevronRight,
  MoveRight,
} from "lucide-react";

import {Assets} from "../assets/Assets"; 
import { Link, useLocation } from "react-router-dom";

const navigationItems = [
  { icon: User, label: "Dashboard", active: true, path: `/Dashboard` },
  { icon: User, label: "TTA About us", hasArrow: <ChevronDown /> },
  { icon: Book, label: "Online Bible" },
  { icon: MessageCircle, label: "TTA Testimonies", hasArrow: <ChevronRight /> },
  { icon: Newspaper, label: "TTA News" },
  { icon: BookOpen, label: "Hymn Book" },
  { icon: Gift, label: "Tithe & Offering" },
  { icon: Settings, label: "Account Settings" },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const path = useLocation().pathname;

  
  
const SidebarContent = ({ isMobile = false }) => (
  <div className="flex flex-col h-full bg-white px-3">
    {/* Logo */}
    <div className="flex flex-col items-center gap-2 py-6 px-2">
      <img src={Assets.logo} alt="Logo" className="w-10" />
      {(!isMobile || isOpen) && (
        <p className="text-lg font-bold text-center">
          The Transformation Arena
        </p>
      )}
    </div>

    {/* Main scrollable section: nav + prayer request */}
    <div className="flex-1 flex flex-col gap-4 overflow-y-auto ">
      {/* Navigation */}
      <div className="flex text-sm xl:text-base flex-col gap-2 xl:gap-7">
        {navigationItems.map((item, index) => (
          <div
            key={index}
           
          >
            <Link to={item.path} className={`flex items-center justify-between gap-3 px-4 py-3 rounded-lg cursor-pointer transition-all ${
              item.active
                ? "text-[#6418C3] font-medium"
                : "text-[#A5A5A5] hover:text-gray-500"
            }`} >
            <div className="flex items-center gap-3">
              <item.icon className="w-5 h-5" />
              {(!isMobile || isOpen) && <span>{item.label}</span>}
            </div>
            {(!isMobile || isOpen) && item.hasArrow}
            </Link>
          </div>
        ))}
      </div>

      {/* Prayer Request CTA */}
      <div className="bg-[#5C46A6] flex flex-col lg:mt-20 xl:mt-14 justify-between p-4 w-[150px] xl:w-[200px] rounded-lg cursor-pointer">
        <div className="flex flex-col  gap-6">
          <img src={Assets.dots} alt="" className="w-5 h-5" />
          {(!isMobile || isOpen) && (
            <p className="text-white font-medium text-lg md:text-xl pb-5">Send your prayer request</p>
          )}
        </div>
        {(!isMobile || isOpen) && <MoveRight className="text-white" />}
      </div>
    </div>

    {/* Footer */}
 <div className=" shrink-0 text-xs text-center py-4 text-gray-400 lg:mt-20 lg:mt-14">
    {(!isMobile || isOpen) ? (
      <>
        TTA Online Portal Version 1 <br /> <br /> Made with ♥ by TTA Tech guys
      </>
    ) : (
      "©2025"
    )}
  </div>
  </div>
);

  

  return (
    <div className="flex">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block w-[18rem]">
        <SidebarContent />
      </div>

      {/* Mobile Sidebar */}
      <div className="lg:hidden relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed left-2.5 top-4 z-20 p-3 bg-white"
        >
          {isOpen ? <MdClose size={24} /> : <FiMenu size={24} />}
        </button>

        <div
          className={`fixed top-0 left-0 h-screen transition-all duration-300 ${
            isOpen ? "w-[15rem]" : "w-16"
          } z-10`}
        >
          <SidebarContent isMobile />
        </div>
      </div>
    </div>
  );
}
