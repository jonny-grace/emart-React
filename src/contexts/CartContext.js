import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [itemAmount, setItemAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
    setItemAmount(itemAmount - 1);
  };

//  settotal amount
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((acc, item) => {
        return acc + item.price * item.quantity;
      }, 0);

      setTotalAmount(amount);
    }
  });

  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((acc, item) => {
        return acc + item.quantity;
      }, 0);

      setItemAmount(amount);
    }
  }, [cart]);

  console.log(itemAmount);
  const addToCart = (product) => {
    const newItem = { ...product, quantity: 1 };
    //check if the item already exists in the cart
    const cartItem = cart.find((item) => item.id === product.id);

    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === product.id) {
          setItemAmount(itemAmount + 1);
          return { ...item, quantity: cartItem.quantity + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  //clear cart

  const clearCart = () => {
    setCart([]);
  };

  //increase quantity
  const increaseQuantity = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem);
    // setCart(
    //   cart.map((item) => {
    //     if (item.id === id) {
    //       return { ...item, quantity: item.quantity + 1 };
    //     } else {
    //       return item;
    //     }
    //   })
    // );
  };

  //decrease quantity
  const decreaseQuantity = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem) {
      setCart(
        cart.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        })
      );
    }
    if (cartItem.quantity < 2) {
      removeFromCart(id);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
        itemAmount,
        totalAmount

      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
