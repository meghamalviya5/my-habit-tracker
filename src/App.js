import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import ArchivedHabits from "./pages/ArchivedHabits.jsx/ArchivedHabits";

function App() {
  return (
    <div className="App">
      <div>
        <h1>Habit Tracker</h1>

        <Link to="archived">Archived Habits</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archived" element={<ArchivedHabits />} />
      </Routes>
    </div>
  );
}

export default App;
