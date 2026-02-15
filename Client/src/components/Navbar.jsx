import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      
      {/* Logo */}
      <Link to="/" className="text-xl font-bold">
        FoodApp
      </Link>
      <div className="flex items-center gap-6">

        <Link to="/" className="hover:text-gray-600">
          Home
        </Link>

        {/* Cart with Badge */}
        <Link to="/cart" className="relative hover:text-gray-600">
          Cart

          {cart.length > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
              {cart.length}
            </span>
          )}
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;