import React, { useState } from 'react';
import FoodItem from './FoodItem'; // Adjust the import path as necessary

export default function FoodList({ foodData }) {
  const [foodId, setFoodId] = useState(null);

  return (
    <div className='foodlist'>
      {foodData.map(food => (
        <FoodItem key={food.id} food={food} setFoodId={setFoodId} />
      ))}
    </div>
  );
}



