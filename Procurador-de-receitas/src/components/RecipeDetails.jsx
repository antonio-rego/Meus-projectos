import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

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
    <div className="recipe-details">
      <h1 className="recipe-details-name">{recipeDetails.strMeal}</h1>
      <img className="recipe-details-image" src={recipeDetails.strMealThumb} />
      <p className="recipe-details-country">
        Origin: {recipeDetails.strArea}
      </p>
      <ul className="recipe-details-ingredients">
        Ingredients: {ingredients.map((ing, idx) => {
          return (
            <li key={idx}>{ing}</li>
          );
        })}
      </ul>
      <p className="recipe-details-instructions">
        {recipeDetails.strInstructions}
      </p>
    </div>
  )
}