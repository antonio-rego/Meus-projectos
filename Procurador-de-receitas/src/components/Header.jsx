import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router';
import './Header.css';


export function Header() {

  const [searchParams] = useSearchParams();
  const searchText = searchParams.get('search');
  
  const navigate = useNavigate();
  const [search, setSearch] = useState(searchText || '');

  function targetValue(event) {
    setSearch(event.target.value); // search transforma-se depois no valor na query
  }

  function handleKey(event) {
    const key = event.key;

    if (key === 'Enter') {
      handleSearch();
    }
    if (key === 'Escape') {
      setSearch('');
    }
  }

  function handleSearch() {
    if (search.trim()) {
      navigate(`/recipes?search=${search}`); // navega para a página que vai buscar o API
    }
  }

  return (
    <div className="header-input-container">
    <input type="text" 
    className="search-bar" 
    placeholder="Search by recipe name..." 
    value={search}
    onChange={targetValue}
    onKeyDown={handleKey}
    />
    <button 
    className="search-btn"
    onClick={handleSearch}
    >Search</button>
  </div>
  )
  
}