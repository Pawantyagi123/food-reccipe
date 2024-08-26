// src/context/FoodContext.js
import React, { createContext, useState } from 'react';

// Create the context
export const FoodContext = createContext();

// Create the provider component
export const FoodProvider = ({ children }) => {
  const [foodid, setFoodId] = useState("655098");
  const [foodData, setFoodData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <FoodContext.Provider value={{ foodid, setFoodId, foodData, setFoodData, isLoading, setIsLoading }}>
      {children}
    </FoodContext.Provider>
  );
};
