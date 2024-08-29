import React, { useContext } from 'react';
import FoodItem from './FoodItem';
import { FoodContext } from './FoodContext';

export default function FoodList() {
  const { foodData } = useContext(FoodContext);

  if (!foodData || foodData.length === 0) {
    return <div>No food items found.</div>;
  }

  return (
    <div className='foodlist'>
      {foodData.map(food => (
        <FoodItem food={food} key={food.id} />
      ))}
    </div>
  );
}




