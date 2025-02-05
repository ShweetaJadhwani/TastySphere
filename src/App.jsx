import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";  // Adjusted according to your folder structure
import Home from "./components/Home";  // Adjusted according to your folder structure
import Recipes from "./components/Recipes";  // Adjusted according to your folder structure

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
      </Routes>
    </Router>
  );
}

export default App;
