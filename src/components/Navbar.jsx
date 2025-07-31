import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white px-6 py-4 shadow mb-6">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link to="/" className="font-bold text-xl text-white">
          MealMap
        </Link>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/planner" className="hover:underline">Planner</Link>
          <Link to="/saved" className="hover:underline">Saved Plans</Link>
        </div>
      </div>
    </nav>
  );
}
