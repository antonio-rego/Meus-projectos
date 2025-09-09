import { useState, useEffect } from "react";
import { Header } from "./Header";
import { axios } from 'axios'
import { useSearchParams } from "react-router";

export function SearchPage() {


  const [results, setResults] = useState([]);
  const [searchParams] = useSearchParams();
  const search = searchParams.get('s');

  useEffect(() => {
    async function renderResults() {
      const urlPath = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      const response = await axios.get(urlPath);

      setResults(response.data);

    }
  }, [search]);

  return (
    <>
      <Header />
      <div className="recipes-container">
        <div className="recipe">
          {results}
        </div>
      </div>
    </>
  );
}