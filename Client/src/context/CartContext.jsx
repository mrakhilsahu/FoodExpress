import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // ADD ITEM
  const addToCart = (food) => {
    const newCart = [...cart];

    const index = newCart.findIndex((item) => item.id === food.id);

    if (index !== -1) {
      newCart[index].qty += 1;
    } else {
      newCart.push({ ...food, qty: 1 });
    }

    setCart(newCart);
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
      value={{ cart, addToCart, removeFromCart, totalItems }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);