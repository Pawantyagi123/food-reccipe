import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function FoodRecipe({ foodid }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodid}/information`;
  const API_KEY = "9140fbebc4f846ebbab15501b8c1b567";

  useEffect(() => {
    let isMounted = true; // Flag to track component mount status

    async function fetchRecipe() {
      try {
        const res = await fetch(`${URL}?apiKey=${API_KEY}`);
        const data = await res.json();
        if (isMounted) {
          setFood(data);
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    fetchRecipe();

    return () => {
      isMounted = false; // Cleanup function to set isMounted to false
    };
  }, [foodid]);

  return (
    <>
      <Link to={"/"} className="backbtn">
        <FaArrowLeft /> Back To Home
      </Link>
      <div className="recipecontainer">
        <div className="foodrecipe">
          {isLoading ? (
            <div className="loader"></div>
          ) : (
            <>
              <div>
                <h1 className="title">{food.title}</h1>
                <img src={food.image} alt={food.title} />
                <div className="points">
                  <span>
                    <b>Price $</b> {(food.pricePerServing / 100).toFixed(2)} per
                    serving
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
              </div>
              <div className="ingredients">
                <h2>Ingredients</h2>
                <div>
                  {food.extendedIngredients.map((ingredient) => (
                    <div className="item" key={ingredient.id}>
                      <ul>
                        <li>
                          {ingredient.name}
                          <img
                            src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
                            alt={ingredient.name}
                          />
                        </li>
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              <div className="instruction">
                <h2>Instruction</h2>
                {food.analyzedInstructions &&
                food.analyzedInstructions.length > 0 ? (
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
