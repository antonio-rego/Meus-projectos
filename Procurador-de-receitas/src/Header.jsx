import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router';


export function Header() {

  const [searchParams] = useSearchParams();
  const searchText = searchParams.get('search');
  
  const navigate = useNavigate();
  const [search, setSearch] = useState(searchText || '');

  function targetValue(event) {
    setSearch(event.target.value); // search transforma-se depois no valor na query
  }

  function handleSearch() {
    if (search.trim()) {
      navigate(`/recipes?search=${search}`); // navega para a página que vai buscar o API
    }
  }

  return (
    <div className="input-container">
    <input type="text" 
    className="search-bar" 
    placeholder="Search by recipe name..." 
    value={search}
    onChange={targetValue}
    />
    <button 
    className="search-btn"
    onClick={handleSearch}
    >Search</button>
  </div>
  )
  
}