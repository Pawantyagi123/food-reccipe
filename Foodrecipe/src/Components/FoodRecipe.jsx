import React, { useEffect, useState, useContext } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import { FoodContext } from './FoodContext';
import axios from "axios"

export default function FoodRecipe() {
  const { setFoodId, foodid } = useContext(FoodContext);
  const { id } = useParams(); // Get the recipe ID from the URL
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = "https://api.spoonacular.com/recipes/";
  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const getFood = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(`${URL}${foodid}/information?apiKey=${API_KEY}`);
        const data = res.data
                setFood(data);
                setIsLoading(false);
      } catch (error) {
        console.error("Fetch Error:", error);
        setIsLoading(false);
      }
    };
  
    getFood();
  }, [id, foodid]);
  

  return (
    <>
      <Link to="/" className="backbtn">
        <FaArrowLeft /> Back To Home
      </Link>
      <div className="recipecontainer">
        <div className="foodrecipe">
          {isLoading ? (
            <div className="loader"></div>
          ) : (
            <>
              <h1 className="title">{food.title}</h1>
              <img src={food.image} alt={food.title} />
              <div className="points">
                <span>
                  <b>Price $</b> {(food.pricePerServing / 100).toFixed(2)} per serving
                </span>
                <span>
                  <strong>⏰ {food.readyInMinutes} Minutes</strong>
                </span>
                <span>
                  <strong>👨‍👩‍👧 {food.servings} Servings</strong>
                </span>
                <strong>
                  {food.vegetarian ? "🟢 Vegetarian" : "🔴 Non-Vegetarian"}
                </strong>
                <span>{food.vegan ? "🐄 Vegan" : ""}</span>
              </div>
              <div className="ingredients">
                <h2>Ingredients:-</h2>
                <div className="ingredients-list">
                  {food.extendedIngredients ? (
                    food.extendedIngredients.map((ingredient) => (
                      <ul key={ingredient.id}>
                        <li>
                          {ingredient.name}
                          <img
                            src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
                            alt={ingredient.name}
                          />
                        </li>
                      </ul>
                    ))
                  ) : (
                    <p>No ingredients available.</p>
                  )}
                </div>
              </div>
              <div className="instruction">
                <h2>Instructions</h2>
                {food.analyzedInstructions && food.analyzedInstructions.length > 0 ? (
                  food.analyzedInstructions[0].steps.map((step) => (
                    <ul key={step.number}>
                      <li>{step.step}</li>
                    </ul>
                  ))
                ) : (
                  <p>No instructions available.</p>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
