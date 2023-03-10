import React from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import logo from "../img/logo.svg";

import { BsBag } from "react-icons/bs";
const Header = () => {
  //header state
  const [isActive, setIsActive] = React.useState(false);
  const { isOpen, setIsOpen } = React.useContext(SidebarContext);
  const { itemAmount } = React.useContext(CartContext);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  })
  return (
    <header className={`${isActive ?' bg-white py-4 shadow-md':' bg-none py-6'} fixed w-full z-10 transition-all lg:px-16`}>
      <div className="container mx-auto flex items-center justify-between h-full">
        {/* logo  */}
        
          <Link to="/">
          <div>  <img className="w-[40px]" src={logo} alt="logo" /></div>
          </Link>
        
      
      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="cursor-pointer flex relative"
      >
        <BsBag className=" text-2xl" />
        <div
          className=" bg-red-500 absolute -right-2 -bottom-2 
        text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center"
        >
          {itemAmount}
        </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
