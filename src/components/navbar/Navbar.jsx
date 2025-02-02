import React, { useState } from "react";
import navLogo from "../../../public/nav__logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to toggle mobile menu visibility

  const menuItem = [
    { id: 0, item: "Solution", link: "#", subItem: ["Any", "Any", "Any"] },
    { id: 1, item: "Service", link: "#" },
    { id: 2, item: "About", link: "#" },
  ];

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="absolute top-0 w-full z-40">
      <div className="container pt-[17px] pb-[25px] flex justify-between items-center">
        <div>
          <img src={navLogo} alt="navLogo" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <ul className="flex items-center gap-x-12">
            {menuItem.map((item) => (
              <div key={item.id} className="relative">
                <li
                  className={`font-Inter text-[16px] text-white cursor-pointer ${
                    item.subItem && "group"
                  }`}
                >
                  {item.item}
                </li>
                {item.subItem && (
                  <u className="absolute bottom-[-80px]">
                    {/* You can list the sub-items here */}
                  </u>
                )}
              </div>
            ))}
            <select className="border border-white px-8 py-[14px] text-white rounded-[132px]">
              <option value="English">EN</option>
              <option value="Bangla">BN</option>
            </select>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white">
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-[70px] left-0 w-full bg-black text-white p-4">
            <ul>
              {menuItem.map((item) => (
                <li key={item.id} className="py-2 cursor-pointer">
                  {item.item}
                </li>
              ))}
              <select className="border border-white w-full py-[14px] text-white rounded-[132px] mt-4">
                <option value="English">EN</option>
                <option value="Bangla">BN</option>
              </select>
            </ul>
          </div>
        )}

        <div>
          <button className="py-[13px] px-[24px] font-Inter text-[18px] text-white border border-white rounded cursor-pointer">
            Contact us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
