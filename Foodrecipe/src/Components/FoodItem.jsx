import React from 'react';
import { Link } from 'react-router-dom';

export default function FoodItem({ food, setFoodId }) {
  function handleRecipe() {
    setFoodId(food.id);
  }

  const formatTitle = (title) => {
    if (!title) return ""; // Return an empty string if title is undefined or null
    return title.length > 15 ? `${title.substring(0, 20)}...` : title;
  };

  return (
    <div className='fooditem'>
      <img src={food.image} alt={food.title} />
      <p>{formatTitle(food.title)}</p>
      <div className="btn">
        <Link to={"/foodrecipe"} onClick={handleRecipe} className='recipebtn'>View Recipe</Link>
      </div>
    </div>
  );
}

