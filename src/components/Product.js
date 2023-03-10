import React,{useContext} from  "react";
//import Link 
import { Link } from "react-router-dom";
//import icon
import { BsPlus, BsEyeFill } from "react-icons/bs";

//import cartContext

import {CartContext} from "../contexts/CartContext";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  //destructure product 
  const { id, title, price, image, category } = product;
  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex  items-center">
          {/* image  */}
          <div className="w-[200px] mx-auto flex justify-center ">
            <img
              className="max-h-[160px] group-hover:scale-110  transition duration-300"
              src={image}
              alt={title}
            />
          </div>
        </div>
        {/* buttons */}
        <div
          className="absolute top-6 -right-11 group-hover:right-5  p-2 flex flex-col items-center justify-center 
        gap-y-1 opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <button onClick={()=>{addToCart(product)}}>
            <div className=" flex justify-center items-center text-white w-12 h-12 bg-red-500">
              <BsPlus />
            </div>
          </button>
          <Link
            to={`/product/${id}`}
            className=" w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl"
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>
      {/* category,title and price */}

      <div>
        <div className="text-sm capitalize text-gray-500 mb-1">{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className=" font-semibold mb-1 text-orange-800">{title}</h2>
        </Link>

        <div className=" font-semibold text-red-400">$ {price}</div>
      </div>
    </div>
  );
};

export default Product;
