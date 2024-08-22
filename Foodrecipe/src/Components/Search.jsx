import React, { useState, useEffect } from 'react';

const URL = import.meta.env.VITE_URL
const API_KEY = import.meta.env.VITE_API_KEY;

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
