import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router';


export function Header() {

  const [searchParams] = useSearchParams();
  const searchText = searchParams.get('search');
  
  const navigate = useNavigate();
  const [search, setSearch] = useState(searchText || '');

  function targetValue(event) {
    setSearch(event.value.target);
  }

  function handleSearch() {
    if (search.trim()) {
      navigate(`/recipes?=${search}`); // completar aqui
    }
  }

  return (
    <div className="input-container">
    <input type="text" 
    className="search-bar" 
    placeholder="Search by name, ingredient or type of plate" 
    onChange={targetValue}
    />
    <button 
    className="search-btn"
    onClick={handleSearch}
    >Search</button>
  </div>
  )
  
}