import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FoodContext } from './FoodContext';

export default function FoodItem({ food }) {
  const { setFoodId } = useContext(FoodContext);

  const formatTitle = (title) => {
    return title.length > 15 ? `${title.substring(0, 20)}...` : title;
  };

  const handleRecipe = () => {
    setFoodId(food.id); // Using the food id from props
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


