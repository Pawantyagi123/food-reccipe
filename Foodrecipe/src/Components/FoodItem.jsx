import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FoodContext } from './FoodContext';

export default function FoodItem({ food }) {
  const { setFoodId } = useContext(FoodContext);
  const navigate = useNavigate();

  const handleRecipe = () => {
    setFoodId(food.id); // Set the food ID correctly
    navigate(`/foodrecipe/${food.id}`); // Navigate to the recipe page with the correct ID
  };

  const formatTitle = (title) => {
    return title.length > 20 ? `${title.substring(0, 20)}...` : title; // Consistent truncation limit
  };

  return (
    <div className='fooditem'>
      <img src={food.image} alt={food.title} />
      <p>{formatTitle(food.title)}</p>
      <div className="btn">
        <Link to={`/foodrecipe/${food.id}`} onClick={handleRecipe} className='recipebtn'>
          View Recipe
        </Link>
      </div>
    </div>
  );
}
