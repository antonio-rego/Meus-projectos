import { HomePage } from "./HomePage"
import { Routes } from "react-router";
import { Route } from "react-router";
import { SearchResultsPage } from "./SearchResultsPage";
import { useEffect, useState } from "react";
import axios from "axios";


function App() {

  const [recipeDetails, setRecipeDetails] = useState([]);

  useEffect(() => {
    const fetchResultsData = async () => {
      const response = await axios.get('')
      setRecipeDetails(response.data.meals)
    }
    fetchResultsData();
  }, [])

  return (
    <Routes>
    <Route index element={<HomePage />}/>
    <Route path="/recipes/search" element={<SearchResultsPage/>}/>
    </Routes>
  )
}

export default App
