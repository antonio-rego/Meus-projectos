import { useEffect, useState } from "react";
import { Header } from "../Header";
import axios from "axios";

export function DailyPlate() {

  const [randomMealResult, setRandomMealResult] = useState([]);

  useEffect(() => {
    const fetchSeafoodData = async () => {
      const response = await axios.get('https://themealdb.com/api/json/v1/1/random.php');
      setRandomMealResult(response.data.meals)
    };
    fetchSeafoodData();
  }, []);

  return (
    <>
      <Header />
      <div className="seafood-container">
            <div className="recipe" key={randomMealResult.idMeal}>
              <h3 className="recipe-name">{randomMealResult.strMeal}</h3>
              <img className="recipe-image" src={randomMealResult.strMealThumb} />
            </div>
      </div>
    </>
  );
};