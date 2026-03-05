import React from 'react';
import InprogressBanner from './InprogressBanner/InprogressBanner';
import ResolvedBanner from './ResolvedBanner/ResolvedBanner';

const Banner = () => {
 return (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-15">
   <InprogressBanner
    title="In-Progress"
    count={5}
    gradient="bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"
   />
   <ResolvedBanner
    title="Resolved"
    count={10}
    gradient="bg-gradient-to-r from-[#54CF68] to-[#00827A]"
   />
  </div>
 );
};

export default Banner;