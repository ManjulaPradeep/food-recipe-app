import React from "react";
// import CategorySelect from "./CategorySelect";

// const MealSelect = () => {
//     return (
//         <div className="inline">
//             <label>Meal</label>
//             <select>
//                 <option>Select a Meal Recipe</option>
//                 <option>Recipe 1</option>
//                 <option>Recipe 2</option>
//             </select>
//         </div>
//     )
// }

const MealSelect = ({ mealList,onMealChange }) => {
  const handleMealChange = (e) => {
    const selectedMeal = e.target.value;
    onMealChange(selectedMeal);
  };

  return (
    // <div className="inline">
    <select onChange={handleMealChange}>
      <option value="">Select a Meal</option>
      {mealList.map((meal) => (
        <option key={meal.idMeal} value={meal.idMeal}>
          {meal.strMeal}
        </option>
      ))}
    </select>
    // </div>


  );


};

export default MealSelect;

// class MealSelect extends component{
//     constructor(props){
//         super(props);
//         this.handleSelectedCategory = this.handleSelectedCategory.bind(this);
//         this.state = {
//             category: '',
//         };
//     }

//     handleSelectedCategory(e) {
//         const {value, category} = e.target;
//         this.setState({[category]: value});
//     }

//     render(){
//         const {test} =this.state;
//         return (
//             <CategorySelect test={test} handleSelectedCategory={this.handleSelectedCategory} />
//           );
//     }

// }
