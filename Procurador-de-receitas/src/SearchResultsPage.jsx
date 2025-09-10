import { useState, useEffect } from "react";
import { Header } from "./Header";
import axios from 'axios'
import { useSearchParams } from "react-router";

export function SearchResultsPage() {


  const [searchResults, setSearchResults] = useState([]);
  const [searchParams] = useSearchParams();
  const search = searchParams.get('search'); // Pega o search que recebeu do Header

  useEffect(() => {
   const fetchResults = async () => {
      const urlPath = `https://themealdb.com/api/json/v1/1/search.php?s=${search}`;
      const response = await axios.get(urlPath);
      setSearchResults(response.data.meals || []); // resultado directo do objecto 'meals' da API.
    };
    fetchResults();
  }, [search]);

  return (
    <>
      <Header />
      <div className="recipes-container">
        {searchResults.length === 0 ? 
        (
          <p>No results found for "{search}"</p>
          // adicionar uma imagem
        ) 
        : searchResults.map((recipe) => {
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
}