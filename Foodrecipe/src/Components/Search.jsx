import React, { useState, useEffect } from 'react';

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "9140fbebc4f846ebbab15501b8c1b567";

export default function Search({ setFoodData, setIsLoading }) {
  const [query, setQuery] = useState(localStorage.getItem('query') || "ice cream");

  const handleChange = (e) => {
    setQuery(e.target.value);
    localStorage.setItem('query', e.target.value); // Save query to localStorage
  };

  useEffect(() => {
    if (query.trim() === "") {
      setFoodData([]); // Clear previous results when query is empty
      return;
    }

    setIsLoading(true);
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      setFoodData(data.results);
      setIsLoading(false);
    }

    fetchFood();
  }, [query]);

  return (
    <div className='search'>
      <input type="text" value={query} onChange={handleChange} />
    </div>
  );
}
