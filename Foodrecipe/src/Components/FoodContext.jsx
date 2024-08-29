// src/context/FoodContext.js
import React, { createContext, useState } from 'react';

// Create the context
export const FoodContext = createContext();

// Create the provider component
export const FoodProvider = ({ children }) => {
  const [foodId, setFoodId] = useState("655098");
  const [foodData, setFoodData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState(null)
  return (
    <FoodContext.Provider value={{ foodId, setFoodId, foodData, setFoodData, isLoading, setIsLoading, error, setError }}>
      {children}
    </FoodContext.Provider>
  );
};
