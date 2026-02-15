import React from "react";
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // ADD ITEM
  const addItem = (food) => {
  const existingItem = cart.find((item) => item.id === food.id);

  if (existingItem) {
    const updatedCart = cart.map((item) =>
      item.id === food.id
        ? { ...item, quantity: (item.quantity || 1) + 1 }
        : item
    );

    setCart(updatedCart);
  } else {
    setCart([...cart, { ...food, quantity: 1 }]);
  }
};
 
  // REMOVE ITEM
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  // TOTAL COUNT
  const totalItems = () => {
    let total = 0;

    for (let item of cart) {
      total += item.qty;
    }

    return total;
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeFromCart, totalItems }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);