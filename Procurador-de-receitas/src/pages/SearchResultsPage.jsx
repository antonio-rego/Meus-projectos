import { useState, useEffect } from "react";
import { Header } from "../components/Header";
import axios from 'axios'
import { useSearchParams } from "react-router";
import { useNavigate } from "react-router";

export function SearchResultsPage() {

  const navigate = useNavigate();

  function renderDetails(id) {
    navigate(`/details/${id}`);
  };

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
        {searchResults.length === 0 && search ? 
        (
          <p>No results found for "{search}"</p>
          // adicionar uma imagem
        ) 
        : searchResults.map((recipe) => {
          return (
            <div 
            className="recipe" 
            key={recipe.idMeal}
            onClick={() => {renderDetails(recipe.idMeal)}}
            >
              <h3 className="recipe-name">{recipe.strMeal}</h3>
              <img className="recipe-image" src={recipe.strMealThumb} />
              <p>Click the image for details</p>
            </div>
          )
        })}
      </div>
    </>
  );
}