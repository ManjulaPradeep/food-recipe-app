import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "../styles/CocktailStyles.css";
import CategorySelect from "../components/elements/CategorySelect";
import MealSelect from "../components/elements/MealSelect";
import MealDisplay from "../components/elements/MealDisplay";

const MealPage2 = () => {
  const url1 = "https://www.themealdb.com/api/json/v1/1/categories.php";
  const [categories, setCategories] = useState([]);
  const [mealList, setMealList] = useState([]);
  const [meal, setMeal] = useState([]);
  // const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedMeal,setSelectedMeal] = useState(null);

  //  =====================================================
  const fetchCategories = async () => {
    await axios
      .get(url1)
      .then((response) => {
        const { data } = response;
        setCategories(data.categories);
      })
      .catch((error) => console.log(error));
  };

  const fetchMeals = async (category) => {
    console.log(category);
    await axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then((response) => {
        const { data } = response;
        console.log(data.meals);
        setMealList(data.meals);
      })
      .catch((error) => console.log(error));
  };

  const fetchMealID = async (selectedMeal) => {
    await axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${selectedMeal}`
      )
      .then((response) => {
        const { data } = response;
        setMeal(data.meals);
        console.log(data.meals);
        // console.log("meal is" , meal);
      });
  };

  // const fetchMealID = async (selectedMealValue) => {
  //   try {
  //     const response = await axios.get(
  //       `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${selectedMealValue}`
  //     );
  //     const { data } = response;
  //     setMeal(data.meals);
  //     console.log(data.meals);
  //   } catch (error) {
  //     console.error('Error fetching meal:', error);
  //   }
  // };

  useEffect(() => {
    fetchCategories();
    // if(selectedMeal!=null){
      // const selectedMealValue = selectedMeal;
      // fetchMealID(selectedMealValue);
    // }

  }, []);

  const handleCategoryChange = (category) => {
    // setSelectedCategory(category);
    fetchMeals(category);
  };

  const handleMealChange = (selectedMeal) => {
    setSelectedMeal(selectedMeal);
    fetchMealID(selectedMeal);
    console.log("Selected Meal:", selectedMeal);
  };



    console.log('meal is', meal);



  return (
    <div>
      <h1> Meal Recipe</h1>
      <p>You can select meal category and meal to view</p>

      <div>
        <CategorySelect
          categories={categories}
          onCategoryChange={handleCategoryChange}
        />

        <MealSelect mealList={mealList} onMealChange={handleMealChange} />
        <MealDisplay meal={meal}/>

      </div>
    </div>
  );
};

export default MealPage2;
