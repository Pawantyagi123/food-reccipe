import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Search from './Search.jsx';
import FoodList from './FoodList';

export default function Home({ setFoodId }) {
  const [foodData, setFoodData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const handleSetFoodId = (id) => {
    setFoodId(id);
    navigate('/foodrecipe');
  };

  return (
    <div>
      <Search setFoodData={setFoodData} setIsLoading={setIsLoading} />
      <FoodList foodData={foodData} setFoodId={handleSetFoodId} />
    </div>
  );
}


