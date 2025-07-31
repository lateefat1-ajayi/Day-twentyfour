import { useState, useEffect } from "react";

export default function SavedPlans() {
  const [savedPlans, setSavedPlans] = useState({});

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("savedMealPlansByDay")) || {};
    setSavedPlans(data);
  }, []);

  const clearAll = () => {
    localStorage.removeItem("savedMealPlansByDay");
    setSavedPlans({});
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Saved Meal Plans</h2>
      {Object.keys(savedPlans).length === 0 ? (
        <p className="text-gray-500">No saved plans yet.</p>
      ) : (
        <>
          {Object.entries(savedPlans).map(([day, meals]) => (
            <div key={day} className="bg-white shadow p-4 rounded mb-6 border-l-4 border-green-400">
              <h3 className="text-xl font-semibold mb-2">{day}</h3>
              <ul className="text-gray-700 space-y-1">
                <li><strong>Breakfast:</strong> {meals.Breakfast || "—"}</li>
                <li><strong>Lunch:</strong> {meals.Lunch || "—"}</li>
                <li><strong>Dinner:</strong> {meals.Dinner || "—"}</li>
              </ul>
            </div>
          ))}
          <button
            onClick={clearAll}
            className="mt-4 bg-red-500 hover:bg-red-600 text-white py-1 px-4 rounded"
          >
            Clear All Plans
          </button>
        </>
      )}
    </div>
  );
}
