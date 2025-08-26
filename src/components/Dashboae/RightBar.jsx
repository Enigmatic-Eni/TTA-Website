import React from 'react'
import {ChevronRight
} from "lucide-react";
import { Assets } from '../../assets/Assets';

export default function RightBar() {

    const posts = [
  { title: 'TTA anniversary football games pictures', time: '24m ago' },
  { title: 'TTA anniversary football games pictures', time: '24m ago' },
  { title: 'TTA anniversary football games pictures', time: '5m ago' },
  { title: 'TTA anniversary football games pictures', time: '8hrs ago' }
];

  return (
     <div className=" grid grid-cols-1 xl:w-64 ">
      {/* Date Widget */}
      <div>
      <div className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl p-6 text-white mb-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-5xl font-bold">26</div>
          </div>
          <div>
            <div className="text-sm opacity-90">Today</div>
            <div className="text-xl opacity-90">Sunday</div>
            </div>
          <ChevronRight className="w-5 h-5 opacity-70" />
        </div>
      </div>

      {/* Latest TTA Post */}
      <div className="bg-white rounded-xl p-4 mb-6">
        <h4 className="font-semibold text-gray-900 mb-4">Latest TTA Post</h4>
        <div className="space-y-4">
          {posts.map((post, index) => (
            <div key={index} className="flex gap-14 xl:gap-3 border-b border-[#F5F5F5] pb-4">
                <div className=' flex flex-col gap-3 '>
              <img 
                src={Assets.profile} 
                className="w-8 h-8 rounded-full flex-shrink-0"
              />

              <span className=" w-12 text-[12px] text-gray-500">{post.time}</span>
              </div>

              <div className="flex xl:gap-3 xl:flex-col gap-8">
                <div className="text-xs text-gray-900 font-medium mb-1">{post.title}</div>
                <div className="text-right justify-right">
                  
                  <p className="text-xs text-purple-600 font-medium hover:text-purple-700 transition-colors">
                    View now
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
</div>
      {/* Tithe & Offering */}
      <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-4 text-white flex gap-3">
      <img src={Assets.calendar} alt="" />
        <div className="text-sm opacity-90 mb-3 font-bold">Pay your tithe & offering now</div>
        
      </div>

    </div>
  );
};


