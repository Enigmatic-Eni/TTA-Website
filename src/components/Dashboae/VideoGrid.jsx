import React from 'react'
import { Assets } from '../../assets/Assets';

export default function VideoGrid() {
const videos = [
  { title: 'Pre Service 15th October Sunday Service', img: Assets.aop2 },
  { title: 'Pre Service 15th October Sunday Service', img: Assets.aop3 },
  { title: 'Pre Service 15th October Sunday Service', img: Assets.aop4 },
  { title: 'Pre Service 15th October Sunday Service', img: Assets.aop5 },
  { title: 'Pre Service 15th October Sunday Service', img: Assets.aop  },
  { title: 'Pre Service 15th October Sunday Service', img: Assets.aop6 }
];



  return (
    <div>
      <div className="mb-6 lg:mb-8 bg-white p-[15px] lg:p-[29px] rounded-3xl ">
        <p className='font-bold text-2xl pb-5'>TTA Church Programs</p>

        <div className='grid md:grid-cols-2 xl:grid-cols-3'>
          {videos.map((video, index) => (
           <div key={index} className=" relative rounded-3xl overflow-hidden h-48 lg:h-[150px] w-[230px] bg-gradient-to-r from-gray-800 to-gray-700 mt-5">
             <img 
               src={video.img} 
               className="w-full h-full object-cover"
             />
     
             <div className="absolute bottom-5 text-center  right-5 text-white  bg-white/20 backdrop-blur  hover:bg-white/30 transition-colors px-8 py-2 rounded-lg">
               <h2 className="text-[10px] font-bold">Pastor Biodun 25th October</h2>
               <p className=" text-[10px] opacity-90">Sunday Sermon</p>
             </div>
             
           </div>
           ))}

</div>
             <div className="text-center mt-7">
        <p className="text-[#1D2251] font-medium  transition-colors">
          View all videos
        </p>
      </div>
         </div>

          
        
    
    </div>
  );
};
    