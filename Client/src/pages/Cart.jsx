import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeItem } = useCart();

  // Calculate subtotal
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
          🛒 Your Cart
        </h1>
        <p className="text-gray-500 mb-8">
          You have {cart.length} items in your cart
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {/* LEFT SIDE - CART ITEMS */}
          <div className="md:col-span-2 space-y-6">

            {cart.length === 0 && (
              <div className="bg-white p-10 rounded-2xl shadow text-center">
                <h2 className="text-2xl font-semibold mb-2">
                  Your cart is empty 🥺
                </h2>
                <p className="text-gray-500">
                  Add some delicious food to continue!
                </p>
              </div>
            )}

            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-md p-6 flex gap-6 hover:shadow-lg transition"
              >
                {/* IMAGE */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-28 h-28 object-cover rounded-xl"
                />

                {/* DETAILS */}
                <div className="flex-1">
                  <h2 className="text-xl font-semibold capitalize">
                    {item.name}
                  </h2>

                  <p className="text-gray-500 mt-1">
                    ₹{item.price} × {item.quantity}
                  </p>

                  {/* Quantity */}
                  <div className="flex items-center gap-4 mt-4">
                    <span className="font-semibold text-lg">
                      Quantity: {item.quantity}
                    </span>
                  </div>

                  <div className="border-t mt-5 pt-4 flex justify-between items-center">
                    <p className="font-medium text-gray-600">Subtotal</p>
                    <p className="text-lg font-bold text-gray-800">
                      ₹{item.price * item.quantity}
                    </p>
                  </div>
                </div>

                {/* REMOVE BUTTON */}
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-700 font-medium"
                >
                  Remove
                </button>
              </div>
            ))}

          </div>

          {/* RIGHT SIDE - ORDER SUMMARY */}
          {cart.length > 0 && (
            <div className="bg-white rounded-2xl shadow-md p-6 h-fit sticky top-10">
              <h2 className="text-2xl font-bold mb-6">
                Order Summary
              </h2>

              <div className="space-y-3 text-gray-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span>Delivery</span>
                  <span className="text-green-600 font-medium">
                    FREE
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Tax (5%)</span>
                  <span>₹{tax.toFixed(2)}</span>
                </div>
              </div>

              <div className="border-t my-6"></div>

              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span className="text-orange-500">
                  ₹{total.toFixed(2)}
                </span>
              </div>

              <button className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition">
                Proceed to Checkout →
              </button>

              <div className="bg-green-50 mt-6 p-4 rounded-xl text-green-700 text-sm space-y-1">
                <p>✔ Free Delivery</p>
                <p>✔ 30-Minute Guarantee</p>
                <p>✔ Fresh & Hot Food</p>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Cart;