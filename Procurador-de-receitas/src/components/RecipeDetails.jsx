import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import './RecipeDetails.css';

export function RecipeDetails() {

  const [recipeDetails, setRecipeDetails] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchDetailsData = async () => {
      const response = await axios.get(`https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      setRecipeDetails(response.data.meals[0]);
    }
    fetchDetailsData();
  }, [id]);


  if (!recipeDetails) return <p className="loading-msg">Loading...</p>;

  const ingredients = []
  for (let i = 1; i < 20; i++) {
    const ingredient = recipeDetails[`strIngredient${i}`];
    const measure = recipeDetails[`strMeasure${i}`];
    if (ingredient) {
      ingredients.push(`${ingredient} - ${measure}`);
    }
  }

  return (
    <>
      <h1 className="recipe-details-name">{recipeDetails.strMeal}</h1>
      <div className="recipe-details">
        <div className="recipe-img-container">
          <img className="recipe-details-image" src={recipeDetails.strMealThumb} />
        </div>
        <div className="recipe-details-information">
          <h2 className="recipe-details-country">
            Origin: {recipeDetails.strArea}
          </h2>
          <h3>Ingredients:</h3>
          <ul className="recipe-details-ingredients">
            {ingredients.map((ing, idx) => {
              return (
                <li key={idx}>{ing}</li>
              ); // no map o segundo valor devolve sempre o index
            })}
          </ul>
        </div>
      </div>
      <div className="recipe-instructions">
        <h3>Instructions:</h3>
        <p>
          {recipeDetails.strInstructions}
        </p>
      </div>
    </>
  )
}