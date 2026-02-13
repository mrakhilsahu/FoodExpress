import React from "react";
function FoodCard({ item }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      <img
        src={item.img}
        alt={item.name}
        className="w-full h-40 object-cover"
      />

      <div className="p-4 flex flex-col gap-2">
        <h3 className="font-semibold text-lg">{item.name}</h3>
        <p className="text-gray-600">₹ {item.price}</p>

        <button className="bg-black text-white rounded-lg py-2 hover:bg-gray-800">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default FoodCard;