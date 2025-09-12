import { useEffect, useState } from "react";
import { Header } from "./Header";
import axios from "axios";
import { useNavigate } from "react-router";

export function RandomMeal() {

  const [randomMealResult, setRandomMealResult] = useState([]);

  const navigate = useNavigate();

  function renderDetails(id) {
    navigate(`/details/${id}`);
  };

  useEffect(() => {
    const fetchSeafoodData = async () => {
      const response = await axios.get('https://themealdb.com/api/json/v1/1/random.php');
      setRandomMealResult(response.data.meals[0]); // devolve logo o único objecto que tem
    };
    fetchSeafoodData();
  }, []);

  return (
    <>
      <Header />
      <div className="seafood-container">
            <div className="recipe" 
            key={randomMealResult.idMeal}
            onClick={() => renderDetails(randomMealResult.idMeal)}
            >
              <h3 className="recipe-name">{randomMealResult.strMeal}</h3>
              <img className="recipe-image" src={randomMealResult.strMealThumb} />
            </div>
      </div>
    </>
  );
};