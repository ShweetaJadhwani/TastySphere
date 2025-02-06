import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";  
import Home from "./Components/Home";  
import Recipes from "./Components/Recipes";  
import TopRestaurants from "./Components/TopResturants";
import FoodBlog from "./Components/FoodBlog";
import CookingTips from "./Components/CookingTips";
import MeetTheChefs from "./Components/MeetTheChefs";
import SpecialOffers from "./Components/SpecialOffers";
import CookingChallenges from "./Components/CookingChallenges";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/top-restaurants" element={<TopRestaurants />} />
        <Route path="/food-blog" element={<FoodBlog />} />
        <Route path="/cooking-tips" element={<CookingTips />} />
        <Route path="/meet-the-chefs" element={<MeetTheChefs />} />
        <Route path="/special-offers" element={<SpecialOffers />} />
        <Route path="/cooking-challenges" element={<CookingChallenges />} />





      </Routes>
    </Router>
  );
}

export default App;
