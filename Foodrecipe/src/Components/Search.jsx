import React, { useState, useEffect, useContext } from 'react';
import { FoodContext } from './FoodContext';

const URL = import.meta.env.VITE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export default function Search() {
  const { setFoodData, setIsLoading, isLoading, error, setError } = useContext(FoodContext);
  const [query, setQuery] = useState(localStorage.getItem('query') || "ice cream");

  useEffect(() => {
    if (query.trim() === "") {
      setFoodData([]); // Clear previous results when query is empty
      return;
    }

    async function fetchFood() {
      setIsLoading(true);
      setError(null); // Clear previous errors

      try {
        const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
        setFoodData(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchFood();
  }, [query]);
  
  const handleChange = (e) => {
    setQuery(e.target.value);
    localStorage.setItem('query', e.target.value); // Save query to localStorage
  };

  if (isLoading) {
    return <div className='loader'></div>;
  }

  if (error) {
    return <div className='error'>{error}</div>;
  }

  return (
    <div className='search'>
      <input type="text" value={query} onChange={handleChange} />
    </div>
  );
}
