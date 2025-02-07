import React from "react";
import { FaPhoneVolume, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { CiFacebook } from "react-icons/ci";
import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-gray-800 text-white text-sm">
      <div className="flex justify-between items-center px-6 py-3 font-poppins">
        {/* Contact Info */}
        <div className="flex space-x-6">
          <span className="flex items-center">
            <FaPhoneVolume className="mr-2" />
            0317-2662591
          </span>
          <span className="flex items-center">
            <AiOutlineMail className="mr-2" />
            shaheryarhussain5455@gmail.com
          </span>
        </div>
        {/* Call to Action */}
        <div className="font-bold">
          Follow Us and get a chance to win 80% off
        </div>
        {/* Social Icons */}
        <div className="flex space-x-2 justify-between items-center">
          <h4>Follow Us</h4>
          <CiFacebook className="hover:text-yellow-400" />
          <FaWhatsapp className="hover:text-yellow-400" />
          <FaInstagram className="hover:text-yellow-400" />
        </div>
      </div>

      <nav className="bg-white shadow-md text-gray-700">
        <div className="flex justify-between items-center px-6 py-4">
          <div className="text-xl font-bold">Bandage</div>
          <ul className="flex space-x-6">
          <Link legacyBehavior href="#shop">
                <a className="hover:text-blue-500 font-semibold text-sm">Home</a>
              </Link>
           <li>
                <a href="/sectionshop" className="hover:text-blue-500 font-semibold text-sm">Shop</a>
                </li>
            <li>
              <a href="/about" className="hover:text-blue-500 font-semibold text-sm">About</a>
            </li>
            <li>
              <a href="#bandge" className="hover:text-blue-500 font-semibold text-sm">Blog</a>
            </li>
            <Link legacyBehavior href="/Contac">
                <a className="font-semibold text-sm text-[#737373]">Contact</a>
              </Link>
            <li>
              <a href="/Pages" className="hover:text-blue-500 font-semibold text-sm">Pages</a>

            </li>
            
          </ul>
          <div className="flex space-x-4 text-blue-500">
            <a href="#" className="hover:underline">Login / Register</a>
            <i className="fas fa-search"></i>
            <i className="fas fa-shopping-cart"></i>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
