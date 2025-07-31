import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Planner from "./pages/Planner";
import SavedPlans from "./pages/SavedPlan";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="p-6 max-w-6xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/planner" element={<Planner />} />
          <Route path="/saved" element={<SavedPlans />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
