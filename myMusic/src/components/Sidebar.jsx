import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiCloseLine } from "react-icons/ri";
import { logo } from "../assets";
import { links } from "../assets/constants";
import { HiOutlineMenu } from "react-icons/hi";

const NavLinks = ({ handleClick }) => (
  <div className="mt-10 ">
    {links.map((items) => (
      <NavLink
        key={items.name}
        to={items.to}
        className="flex flex-row justify-start items-center my-4 px-2 py-4 text-sm font-medium text-gray-400 hover:text-green-700 hover:backdrop-brightness-150 focus:text-green-700 active:text-green-700"
        onClick={() => handleClick && handleClick()}
      >
        <items.icon className="w-8 h-8 mr-2 focus:stroke-green-700" />
        {items.name}
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#101711]">
        <img src={logo} alt="logo" className="w-full h-14 object-contain" />
        <NavLinks />
      </div>

      <div className="absolute md:hidden block top-6 right-3 z-20">
        {mobileMenuOpen ? (
          <RiCloseLine
            className="w-6 h-6 text-white mr-2"
            onClick={() => setMobileMenuOpen(false)}
          />
        ) : (
          <HiOutlineMenu
            className="w-6 h-6 text-white mr-2"
            onClick={() => setMobileMenuOpen(true)}
          />
        )}
      </div>

      <div
        className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#0a150c] backdrop-blur-lg z-10 p-6 md:hidden  smooth-transition ${
          mobileMenuOpen ? "right-0" : "left-full"
        }`}
      >
        <img src={logo} alt="logo" className="w-full h-14 object-contain" />
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  );
};

export default Sidebar;
