import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FoodContext } from './FoodContext';
import Search from './Search.jsx';
import FoodList from './FoodList';

export default function Home() {
  const { foodData, setFoodData, isLoading, setIsLoading, setFoodId } = useContext(FoodContext);
  const navigate = useNavigate();

  const handleSetFoodId = (id) => {
    setFoodId(id);
    navigate(`/foodrecipe/${id}`);
  };

  useEffect(() => {
    // Fetch data or use saved data from localStorage
  }, []);

  return (
    <div>
      <Search setFoodData={setFoodData} setIsLoading={setIsLoading} />
      <FoodList foodData={foodData} setFoodId={handleSetFoodId} />
    </div>
  );
}
