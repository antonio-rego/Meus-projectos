import { HomePage } from "./pages/HomePage"
import { Routes } from "react-router";
import { Route } from "react-router";
import { SearchResultsPage } from "./pages/SearchResultsPage";
import { SeaFood } from "./components/Seafood";
import { PortugueseDishes } from "./components/PortugueseDishes";
import { Desserts } from "./components/Desserts";
import { Breakfasts } from "./components/Breakfasts";
import { RandomMeal } from "./components/RandomMeal";
import { RecipeDetails } from "./components/RecipeDetails";
import './App.css';


function App() {

  return (
    <Routes>
    <Route index element={<HomePage />}/>
    <Route path="/recipes" element={<SearchResultsPage/>}/>
    <Route path="/seafoods" element={<SeaFood />}/>
    <Route path="/portuguese" element={<PortugueseDishes />}/>
    <Route path="/desserts" element={<Desserts />}/>
    <Route path="/breakfasts" element={<Breakfasts />}/>
    <Route path="/random" element={<RandomMeal />}/>
    <Route path="/details/:id" element={<RecipeDetails />} />
    </Routes>
  )
}

export default App
