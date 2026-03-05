import React from 'react';
import shape1 from '../../../assets/vector1.png';
import shape2 from '../../../assets/vector2.png';

const InprogressBanner = ({ title, count, gradient }) => {
 return (
  <div
   className={`relative min-h-40 md:h-45
      ${gradient}
      rounded-xl shadow-lg px-6 md:px-10 py-5
      text-white flex flex-col justify-center text-center
      overflow-hidden`}
  >
   <img
    src={shape1}
    alt=""
    className="absolute left-0 top-0 h-full w-auto object-contain opacity-50"
   />

   <img
    src={shape2}
    alt=""
    className="absolute right-0 top-0 h-full w-auto object-contain opacity-50"
   />


   <div className="relative z-10">
    <h3 className="text-sm md:text-base opacity-90">{title}</h3>

    <h1 className="text-3xl md:text-4xl font-bold mt-3">{count}</h1>
   </div>
  </div>
 );
};

export default InprogressBanner;