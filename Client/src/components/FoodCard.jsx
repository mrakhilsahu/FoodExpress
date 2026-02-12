import React from "react";

function FoodCard({ item }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-xl transition">
      <img
        src={item.img}
        alt={item.name}
        className="w-full h-32 object-cover rounded-lg mb-3"
      />

      <h3 className="font-semibold text-lg">{item.name}</h3>
      <p className="text-indigo-600 font-bold">₹{item.price}</p>

      <button className="mt-2 w-full bg-indigo-600 text-white py-1 rounded-lg hover:bg-indigo-500">
        Add to Cart
      </button>
    </div>
  );
}

export default FoodCard;