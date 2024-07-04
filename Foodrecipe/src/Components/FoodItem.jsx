import React from 'react';
import { Link } from 'react-router-dom';

export default function FoodItem({ food, setFoodId }) {
  function handleRecipe() {
    setFoodId(food.id);
  }

  return (
    <div className='fooditem'>
      <img src={food.image} alt={food.title} />
      <p>{food.title}</p>
      <div className="btn">
        <Link to={"/foodrecipe"} onClick={handleRecipe} className='recipebtn'>View Recipe</Link>
      </div>
    </div>
  );
}

