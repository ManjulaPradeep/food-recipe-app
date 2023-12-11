import React from "react";
import CategorySelect from "./CategorySelect";

const MealSelect = () => {
    return (
        <div className="inline">
            <label>Meal</label>
            <select>
                <option>Select a Meal Recipe</option>
                <option>Recipe 1</option>
                <option>Recipe 2</option>
            </select>
        </div>
    )
}

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