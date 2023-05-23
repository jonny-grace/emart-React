import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";


import CartItem from "../components/CartItem";

import { CartContext } from "../contexts/CartContext";
import { SidebarContext } from "../contexts/SidebarContext";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);

  const { cart, clearCart, itemAmount, totalAmount } = useContext(CartContext);
  return (
    <div
      className={` ${isOpen ? "right-0" : "-right-full"
        } bg-white w-full fixed top-0 h-full shadow-2xl 
        md:w-[48vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">
          Shopping Bag ({itemAmount})
        </div>

        {/* icon  */}
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex items-center justify-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>


      <div
        className=" flex flex-col gap-y-2 h-[450px]  overflow-y-auto
       overflow-x-hidden border-b"
      >
        {cart.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </div>
      <div className=" flex flex-col gap-y-1  mt-6">
        <div className="flex w-full justify-between items-center">
          {/* total */}
          <div className=" uppercase font-semibold">
            <span className=" px-2">Total:</span> $
            {parseFloat(totalAmount).toFixed(2)}
          </div>
          {/* clear car icon  */}
          <div className=" cursor-pointer py-4 bg-red-500 text-white w-10 h-10 flex justify-center items-center">
            <FiTrash2 className="text-xl" onClick={clearCart} />
          </div>
        </div>
        <Link
          to="/"
          className=" bg-gray-300 flex justify-center items-center p-4 text-primary w-full font-medium"
        >
          View Cart
        </Link>
        <Link to={`/checkout/${totalAmount}`}>
          <button
            onClick={handleClose}

            className=" bg-orange-500 flex justify-center items-center p-4 text-white w-full font-medium "
          >

            Checkout

          </button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
