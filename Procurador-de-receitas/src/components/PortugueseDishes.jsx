import { useEffect, useState } from "react";
import { Header } from "./Header";
import axios from "axios";
import { useNavigate } from "react-router";

export function PortugueseDishes() {

  const [portugueseFoodResults, setPortugueseFoodResults] = useState([]);

  const navigate = useNavigate();

  function renderDetails(id) {
    navigate(`/details/${id}`);
  };

  useEffect(() => {
    const fetchSeafoodData = async () => {
      const response = await axios.get('https://themealdb.com/api/json/v1/1/filter.php?a=portuguese');

      setPortugueseFoodResults(response.data.meals);
    };
    fetchSeafoodData();
  }, []);

  return (
    <>
      <Header />
      <div className="recipes-container">
        {portugueseFoodResults.map((recipe) => {
          return (
            <div className="recipe" 
            key={recipe.idMeal}
            onClick={() => renderDetails(recipe.idMeal)}
            >
              <h3 className="recipe-name">{recipe.strMeal}</h3>
              <img className="recipe-image" src={recipe.strMealThumb} />
            </div>
          )
        })}
      </div>
    </>
  );
};