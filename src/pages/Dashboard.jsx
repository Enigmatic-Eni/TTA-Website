import React, { useState } from "react";
import Sidebar from '../components/Sidebar';
import Navbar from '../components/navbar';

import { Outlet } from 'react-router-dom';


export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
        {/* Fixed Sidebar */}
        <div className="fixed w-10 top-0 left-0 ">
            <Sidebar />
        </div>
    
        {/* Main Content Area */}
        <div className=" flex flex-col flex-1">
            {/* Navbar */}
            <header className="  lg:pl-[241px] top-0  w-full ">
                <Navbar />
            </header>
    
            {/* Main Content with Outlet */}
            <main className=" pl-28 lg:pl-64 flex-1 overflow-y-auto p-6">
                <Outlet />
            </main>
        </div>
    </div>
    
  );
}
