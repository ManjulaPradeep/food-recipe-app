import React from "react";
// import '../styles/CocktailStyles.css';
import '../styles/CocktailStyles.css';
import CategorySelect from "../components/elements/CategorySelect";
import MealSelect from "../components/elements/MealSelect";


const MealPage = () => {

    return (
        <div>
            <h1> Meal Recipe</h1>
            <p>You can select meal category and meal to view</p>

            <div>
                {/* <div className="inline"> */}
                    <CategorySelect/>
                {/* </div> */}

                {/* <div className="inline"> */}
                    <MealSelect/>
                {/* </div> */}
            </div>
        </div>
    )
}

export default MealPage;