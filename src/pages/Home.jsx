import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-4xl font-bold mb-4">Welcome to MealMap</h1>
      <p className="text-lg text-gray-600 mb-6">
        Plan your weekly meals and stay organized with ease.
      </p>
      <Link
        to="/planner"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
      >
        Go to Meal Planner
      </Link>
    </div>
  );
}
