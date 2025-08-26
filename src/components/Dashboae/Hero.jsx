import React from 'react'
import { Assets } from '../../assets/Assets';

export default function Hero() {
  return (
      <div className="mb-6 lg:mb-8 bg-white p-[15px] lg:p-[29px] rounded-3xl">
      <div className="relative rounded-3xl overflow-hidden h-48 lg:h-[299px] bg-gradient-to-r from-gray-800 to-gray-700">
        <img 
          src={Assets.aop} 
          className="w-full h-full object-cover"
        />

        <div className="absolute bottom-1  right-0 text-white  bg-white/20 backdrop-blur  hover:bg-white/30 transition-colors px-10 py-2 rounded-lg">
          <h2 className="text-[12px] md:text-base lg:text-lg font-bold">The Transformation Arena</h2>
          <p className=" text-[12px] md:text-base lg:text-lg opacity-90">A youth church like no other</p>
        </div>
      
        
      </div>
    </div>
  );
};

