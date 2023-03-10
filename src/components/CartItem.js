import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";

import { CartContext } from "../contexts/CartContext";
const CartItem = ({ item }) => {

  const {removeFromCart,increaseQuantity,decreaseQuantity} =useContext(CartContext);
  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[120px] flex items-center gap-x-4">
        {/* image */}
        <Link to={`/products/${item.id}`}>
          <img className=" max-w-[80px]" src={item.image} alt={item.title} />
        </Link>

        <div className="w-full flex flex-col">
          <div className="flex justify-between mb-2">
            {/* title */}
            <Link
              className=" text-sm uppercase font-medium max-w-[240px] text-primary hover:underline"
              to={`/products/${item.id}`}
            >
              {item.title}
            </Link>
            {/* icons */}
            <div className=" text-xl cursor-pointer">
              <IoMdClose className=" text-gray-500 hover:text-red-500 transition  " onClick={()=>{removeFromCart(item.id)}}/>
            </div>
          </div>
          <div className="flex gap-2  h-[36px] text-sm">
            {/* quantity */}
            <div className="flex flex-1 max-w-[100px]  items-center h-full border text-primary font-medium">
              {/* minus icon  */}
              <div className=" flex-1 flex justify-center items-center cursor-pointer hover:bg-gray-100">
                <IoMdRemove onClick={()=>{
                    decreaseQuantity(item.id);
                }} />
              </div>
              <div className=" h-full flex justify-center items-center px-2">{item.quantity}</div>
              <div className=" flex-1 flex justify-center items-center cursor-pointer hover:bg-gray-100">
                <IoMdAdd  onClick={()=>{
                  increaseQuantity(item.id);
                }}/>
              </div>
            </div>
            {/* item price */}
            <div className="flex-1 flex justify-around items-center">{item.price}</div>
            {/* final price */}
            <div className=" flex-1 flex justify-end items-center text-primary font-medium">{`$ ${parseFloat(item.price*item.quantity).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
