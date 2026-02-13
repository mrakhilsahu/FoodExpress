import { useState } from "react";
import React from "react";
import FoodCard from "../components/FoodCard";

const foods = [
  { id: 1, name: "Burger", price: 99, img: "https://source.unsplash.com/300x200/?burger" },
  { id: 2, name: "Pizza", price: 149, img: "https://source.unsplash.com/300x200/?pizza" },
  { id: 3, name: "Fries", price: 79, img: "https://source.unsplash.com/300x200/?fries" },
  { id: 4, name: "Sandwich", price: 89, img: "https://source.unsplash.com/300x200/?sandwich" },
];

function Home() {
  const [search, setSearch] = useState("");

  const filteredFoods = foods.filter((f) =>
  f.name.toLowerCase().includes(search.toLowerCase())
);
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Today's Menu</h1>
      <input
     type="text"
     placeholder="Search food..."
     className="border p-2 rounded mb-6 w-full"
     value={search}
     onChange={(e) => setSearch(e.target.value)}
   />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
       {filteredFoods.map((item) => (
          <FoodCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Home;