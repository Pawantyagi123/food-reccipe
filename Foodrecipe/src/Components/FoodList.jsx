import React from 'react';
import FoodItem from './FoodItem';

export default function FoodList({ foodData, setFoodId }) {
  return (
    <div className='foodlist'>
      {foodData.map((food) => (
        <FoodItem key={food.id} food={food} setFoodId={setFoodId} />
      ))}
    </div>
  );
}


