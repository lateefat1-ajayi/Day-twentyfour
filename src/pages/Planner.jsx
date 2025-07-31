import { useState, useEffect } from "react";
import mealData from "../utils/mealData";

const initialPlan = mealData.reduce((acc, day) => {
  acc[day] = { Breakfast: "", Lunch: "", Dinner: "" };
  return acc;
}, {});

export default function Planner() {
  const [mealPlan, setMealPlan] = useState(initialPlan);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("savedMealPlansByDay"));
    if (saved) {
      const merged = { ...initialPlan, ...saved };
      setMealPlan(merged);
    }
  }, []);

  const handleChange = (day, mealType, value) => {
    setMealPlan((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        [mealType]: value,
      },
    }));
  };

  const saveDay = (day) => {
    const currentPlans = JSON.parse(localStorage.getItem("savedMealPlansByDay")) || {};
    const updatedPlans = {
      ...currentPlans,
      [day]: mealPlan[day],
    };
    localStorage.setItem("savedMealPlansByDay", JSON.stringify(updatedPlans));
    alert(`${day}'s meal plan saved!`);
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">🗓 Weekly Meal Planner</h2>
      {mealData.map((day) => (
        <div key={day} className="bg-white shadow p-4 rounded mb-6 border-l-4 border-blue-400">
          <h3 className="text-xl font-semibold mb-2">{day}</h3>
          {["Breakfast", "Lunch", "Dinner"].map((meal) => (
            <div key={meal} className="mb-2">
              <label className="block text-sm font-medium">{meal}:</label>
              <input
                type="text"
                value={mealPlan[day]?.[meal] || ""}
                onChange={(e) => handleChange(day, meal, e.target.value)}
                className="w-full p-2 border rounded mt-1"
                placeholder={`Enter ${meal}`}
              />
            </div>
          ))}
          <button
            onClick={() => saveDay(day)}
            className="mt-2 bg-blue-500 hover:bg-blue-600 text-white py-1 px-4 rounded"
          >
            Save This Day
          </button>
        </div>
      ))}
    </div>
  );
}
