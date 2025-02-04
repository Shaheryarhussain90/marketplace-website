import React from "react";











const Header = () => {
  return (
    <div className="bg-gray-800 text-white text-sm ">
      <div className="flex justify-between items-center px-6 py-3 font-poppins">
        {/* Contact Info */}
        <div className="flex space-x-6 ">
          <span className="flex items-center">
            <i className="fas fa-phone mr-2">

            </i>0317-2662591
          </span>
          <span className="flex items-center">
            <i className="fas fa-envelope mr-2"></i>shaheryarhussain5455@gmail.com
          </span>
        </div>
        {/* Call to Action */}
        <div className="font-bold">
          Follow Us and get a chance to win 80% off
        </div>
        {/* Social Icons */}
        <div className="flex space-x-2  justify-between items-center">
          <h4>Follow Us </h4>
          <a href="#" className="hover:text-yellow-400">
            <i className="fab fa-instagram  flex justify-between items-center">

            </i>
          </a>
          <a href="#" className="hover:text-yellow-400">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="#" className="hover:text-yellow-400">
            <i className="fab fa-facebook flex justify-between items">

            </i>
          </a>
          <a href="#" className="hover:text-yellow-400">
            <i className="fab fa-twitter"> 
            </i>
          </a>
        </div>
      </div>
      <nav className="bg-white shadow-md text-gray-700">
        <div className="flex justify-between items-center px-6 py-4">
          <div className="text-xl font-bold">Bandage</div>
          <div className="flex space-x-6">
            <a href="#Hero"  className="hover:text-blue-500">Home</a>
           <li className="menu-link"> <a href="#shop" className="hover:text-blue-500">Shop</a></li>
            <li className="menu-link"><a href="#about" className="hover:text-blue-500">About</a></li>
            <a href="#bandge" className="hover:text-blue-500">Blog</a>
            <li className="menu-link"><a href="#contact" className="hover:text-blue-500">Contact</a></li>
          </div>
          <div className="flex space-x-4 text-blue-500">
            <a href="#" className="hover:underline">Login / Register</a>
            <i className="fas fa-search">

            </i>
            <i className="fas fa-shopping-cart">
            </i>
          </div>
        </div>
      </nav>
    </div>


// EDitor





  );
};

export default Header