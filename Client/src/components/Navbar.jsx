import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
      <h2 className="text-xl font-bold text-indigo-600">🍔 FoodExpress</h2>
      <div className="flex gap-6 text-gray-700 font-medium">
        <Link to="/" className="hover:text-indigo-500">Home</Link>
        <Link to="/cart" className="hover:text-indigo-500">Cart</Link>
        <Link to="/login" className="hover:text-indigo-500">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;