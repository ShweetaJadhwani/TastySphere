import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";  // Adjusted according to your folder structure
import Home from "./Components/Home";  // Adjusted according to your folder structure
import Recipes from "./Components/Recipes";  // Adjusted according to your folder structure
import TopRestaurants from "./Components/TopResturants";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/top-restaurants" element={<TopRestaurants />} />
      </Routes>
    </Router>
  );
}

export default App;
