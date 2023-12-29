import React from "react";

const MealDisplay = (meal) => {
    return (
        <div>
            <p>Meal is :</p>
            <h1>{meal.strMeal}</h1>
        </div>
    );
};

export default MealDisplay;