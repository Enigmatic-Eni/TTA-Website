import React from "react";
import { Menu, Search, Bell } from "lucide-react";

export default function Navbar({ onMenuClick }) {
  return (
    <div className="bg-white border-b px-4 lg:px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            className="lg:hidden p-1"
            onClick={onMenuClick}
          >
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
          <div className="text-xl lg:text-2xl font-bold text-gray-900 truncate">
            Welcome Samuel Oladokun
          </div>
        </div>
        <div className="flex items-center gap-2 lg:gap-4">
          <div className="relative hidden md:block">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search here..." 
              className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 w-48 lg:w-64"
            />
          </div>
          <div className="flex gap-1 lg:gap-2">
            <div className="w-6 h-6 lg:w-8 lg:h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <Bell className="w-3 h-3 lg:w-4 lg:h-4 text-white" />
            </div>
            <div className="w-6 h-6 lg:w-8 lg:h-8 bg-green-500 rounded-full flex items-center justify-center">
              <Bell className="w-3 h-3 lg:w-4 lg:h-4 text-white" />
            </div>
            <div className="w-6 h-6 lg:w-8 lg:h-8 bg-blue-400 rounded-full flex items-center justify-center">
              <Bell className="w-3 h-3 lg:w-4 lg:h-4 text-white" />
            </div>
            <div className="w-6 h-6 lg:w-8 lg:h-8 bg-pink-500 rounded-full flex items-center justify-center">
              <Bell className="w-3 h-3 lg:w-4 lg:h-4 text-white" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" 
              alt="Profile" 
              className="w-6 h-6 lg:w-8 lg:h-8 rounded-full"
            />
            <span className="font-medium text-gray-900 text-sm lg:text-base hidden sm:block">Psalmzy</span>
          </div>
        </div>
      </div>
    </div>
  );
}
