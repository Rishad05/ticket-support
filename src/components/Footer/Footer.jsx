import React from 'react';
import { FaFacebook, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
 return (
  <footer className="bg-black text-gray-400 mt-15">
   <div className="max-w-7xl mx-auto px-6 py-16">

    {/* Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

     {/* Logo / Description */}
     <div>
      <h2 className="text-white text-xl font-bold mb-4">
       CS — Ticket System
      </h2>
      <p className="text-sm leading-7">
       Lorem Ipsum is simply dummy text of the printing and typesetting
       industry. Lorem Ipsum has been the industry's standard dummy text
       ever since the 1500s.
      </p>
     </div>

     {/* Company */}
     <div>
      <h3 className="text-white font-semibold mb-4">Company</h3>
      <ul className="space-y-3">
       <li className="hover:text-white cursor-pointer">About Us</li>
       <li className="hover:text-white cursor-pointer">Our Mission</li>
       <li className="hover:text-white cursor-pointer">Contact Sales</li>
      </ul>
     </div>

     {/* Services */}
     <div>
      <h3 className="text-white font-semibold mb-4">Services</h3>
      <ul className="space-y-3">
       <li className="hover:text-white cursor-pointer">
        Products & Services
       </li>
       <li className="hover:text-white cursor-pointer">
        Customer Stories
       </li>
       <li className="hover:text-white cursor-pointer">
        Download Apps
       </li>
      </ul>
     </div>

     {/* Information */}
     <div>
      <h3 className="text-white font-semibold mb-4">Information</h3>
      <ul className="space-y-3">
       <li className="hover:text-white cursor-pointer">
        Privacy Policy
       </li>
       <li className="hover:text-white cursor-pointer">
        Terms & Conditions
       </li>
       <li className="hover:text-white cursor-pointer">Join Us</li>
      </ul>
     </div>

     {/* Social */}
     <div>
      <h3 className="text-white font-semibold mb-4">Social Links</h3>
      <ul className="space-y-4">

       <li className="flex items-center gap-3 hover:text-white">
        <FaXTwitter />
        <span>@CS — Ticket System</span>
       </li>

       <li className="flex items-center gap-3 hover:text-white">
        <FaLinkedin />
        <span>@CS — Ticket System</span>
       </li>

       <li className="flex items-center gap-3 hover:text-white">
        <FaFacebook />
        <span>@CS — Ticket System</span>
       </li>

       <li className="flex items-center gap-3 hover:text-white">
        <FaEnvelope />
        <span>support@cst.com</span>
       </li>

      </ul>
     </div>

    </div>

    {/* Bottom */}
    <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
     © 2026 CS — Ticket System. All rights reserved.
    </div>

   </div>
  </footer>
 );
};

export default Footer;