import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Search from './Search.jsx';
import FoodList from './FoodList';

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "9140fbebc4f846ebbab15501b8c1b567";

export default function Home({ setFoodId }) {
  const [foodData, setFoodData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const handleSetFoodId = (id) => {
    setFoodId(id);
    navigate('/foodrecipe');
  };

  useEffect(() => {
    const savedQuery = localStorage.getItem('query');
    if (savedQuery) {
      // Re-fetch data if there's a saved query
      setIsLoading(true);
      fetch(`${URL}?query=${savedQuery}&apiKey=${API_KEY}`)
        .then((res) => res.json())
        .then((data) => {
          setFoodData(data.results);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false);
        });
    }
  }, []);

  return (
    <div>
      <Search setFoodData={setFoodData} setIsLoading={setIsLoading} />
      <FoodList foodData={foodData} setFoodId={handleSetFoodId} />
    </div>
  );
}



