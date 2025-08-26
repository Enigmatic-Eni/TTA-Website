import React, { useState } from "react";
import Sidebar from '../components/Sidebar';
import Navbar from '../components/navbar';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className=" top-0 left-0 h-full w-16 lg:w-[275px]">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 ">
        {/* Navbar */}
        <header className="w-full">
          <Navbar />
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto ">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
