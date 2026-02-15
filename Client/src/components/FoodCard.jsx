import React from "react";
import { useCart } from "../context/CartContext";

function FoodCard({ item }) {
  const { addItem } = useCart();

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
    
      <img
        src={item.img}
        alt={item.name}
        className="w-full h-40 object-cover"
      />

      {/* Content */}
      <div className="p-4 flex flex-col gap-2">
        <h3 className="font-semibold text-lg">{item.name}</h3>
        <p className="text-gray-600">₹ {item.price}</p>

        {/* Add Button */}
        <button
          onClick={() => addItem(item)}
          className="bg-black text-white rounded-lg py-2 hover:bg-gray-800"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default FoodCard;