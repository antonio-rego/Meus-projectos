import { useEffect, useState } from "react";
import { Header } from "./Header";
import axios from "axios";

export function SeaFood() {

  const [seafoodResults, setSeafoodResults] = useState([])

  useEffect(() => {
    const fetchSeafoodData = async () => {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
      setSeafoodResults(response.data.meals)
    };
    fetchSeafoodData();
  },[])

  return (
    <>
      <Header />
      <div className="seafood-container">
        { seafoodResults.map((recipe) => {
          return (
            <div className="recipe" key={recipe.idMeal}>
              <h3 className="recipe-name">{recipe.strMeal}</h3>
              <img className="recipe-image" src={recipe.strMealThumb} />
            </div>
          )
        }) }
      </div>
    </>
  )
}