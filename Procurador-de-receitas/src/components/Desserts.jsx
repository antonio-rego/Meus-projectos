import { useEffect, useState } from "react";
import { Header } from "../Header";
import axios from "axios";

export function Desserts() {

  const [dessertsResults, setDessertResults] = useState([]);

  useEffect(() => {
    const fetchSeafoodData = async () => {
      const response = await axios.get('https://themealdb.com/api/json/v1/1/filter.php?c=desserts');
      setDessertResults(response.data.meals)
    };
    fetchSeafoodData();
  }, []);

  return (
    <>
      <Header />
      <div className="seafood-container">
        {dessertsResults.map((recipe) => {
          return (
            <div className="recipe" key={recipe.idMeal}>
              <h3 className="recipe-name">{recipe.strMeal}</h3>
              <img className="recipe-image" src={recipe.strMealThumb} />
            </div>
          )
        })}
      </div>
    </>
  );
};