import React, { useState, useEffect, useContext } from 'react';
import { FoodContext } from './FoodContext';
import axios from "axios";
import { debounce } from 'lodash';

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
    const fetchFood = debounce(async () => {
      setError(null); // Clear previous errors

      try {
        const res = await axios.get(`${URL}?query=${query}&apiKey=${API_KEY}`);
        const data = await res.data;
        setFoodData(data.results);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      } 
    }, 500); // Adjust the delay time as needed (500ms is common)

    fetchFood();

    return () => {
      fetchFood.cancel(); // Cancel the debounce on cleanup
    };
  }, [query]);

  const handleChange = (e) => {
    setQuery(e.target.value);
    localStorage.setItem('query', e.target.value); // Save query to localStorage
  };

  if (isLoading) {
    return <div className='loader' style={{margin:"auto"}}></div>;
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
