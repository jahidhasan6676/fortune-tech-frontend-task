import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuLinks = [
    { label: "Sell Online", },
    { label: "How It Works",  },
    { label: "Pricing & Commission",  },
    { label: "Shipping & Returns",  },
  ];

  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-50 w-full">
      <div className="w-11/12 mx-auto flex justify-between items-center py-6">
        {/* Logo */}
        <Link to="/" className="lg:text-3xl text-2xl font-semibold text-[#450000]">
          Care Me
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8 navUl">
          {menuLinks.map((link, idx) => (
            <li key={idx}>
              <Link className="hover:text-[#450000] navMenu text-[17px] font-medium transition">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex gap-6">
            <button className="border px-6 py-2 text-[17px] font-medium rounded hover:bg-[#450000] hover:text-white transition cursor-pointer">Login</button>
            <button className="border px-6 py-2 text-[17px] font-medium rounded bg-[#450000] text-white transition cursor-pointer">Start Selling</button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 lg:hidden border-l border-gray-200`}
      >
        <div className="flex justify-between items-center px-4 py-[38px] border-b border-gray-200">
          <span className="text-xl text-[#450000]">Menu</span>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-[#450000]"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Menu Links */}
        <ul className="p-4 space-y-5">
          {menuLinks.map((link, idx) => (
            <li key={idx}>
              <Link
                onClick={() => setIsMenuOpen(false)}
                className="block hover:text-[#450000] transition font-medium text-[17px]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Bottom Login/Start Selling */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <div className="flex flex-col gap-2">
            <button className="border px-3 py-[6px] text-[17px] font-medium rounded hover:bg-[#450000] hover:text-white transition">
              Login
            </button>
            <button className="border px-3 py-[6px] text-[17px] font-medium rounded bg-[#450000] text-white transition">
              Start Selling
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;