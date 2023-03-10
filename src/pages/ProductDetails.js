import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";
import { CartContext } from "../contexts/CartContext";
const ProductDetails = () => {
  const { id } = useParams();

  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  //get the single product based on the id
  const singleProduct = products.find((product) => product.id === parseInt(id));
  const { title, description, price, image } = singleProduct;
  return (
  <section className=" pt-32 pb-12 lg:py-32 h-screen flex items-center">
      <div className="container mx-auto lg:mx-0">
        {/* image and text wrapper  */}
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
             <img src={image} className=" max-w-[200px] lg:max-w-sms" alt={title}/>
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h1 className=" text-[26px] font-medium mb-2 max-w-[450px] mx-0">{title}</h1>
            <div className=" text-xl text-red-500 mb-5 font-medium">$ {price}</div>
            <p className=" mb-8">{description}</p>
            <button onClick={()=>{addToCart(singleProduct)}} className=" bg-gray-800 py-4 px-8 text-white rounded">Add To Cart</button>
           </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
