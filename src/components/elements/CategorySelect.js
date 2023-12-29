import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
// import useFetch from "../customHooks/useFetch";

// const CategorySelect = () => {

// const [categories, setData] = useState([]);
// const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
// const [selectedCategory, setSelected] = useState()

// //  =====================================================
// const fetchData = () => {
//     axios
//         .get(url)
//         .then((response) => {
//             const { data } = response;
//             console.log(response);
//             setData(data.categories);
//         })
//         .catch((error) => console.log(error));
// };

// useEffect(() => {
//     fetchData();
// }, [])

// return (
//     <div className="inline">
//         <label>Category</label>
//         <select
//         disabled={false}
//         value={selectedCategory}
//         onChange={(e) => setSelected(e.currentTarget.value)}
//         // onChange={this.SetSelectedCat}
//         >
//             {categories.map((categories, index) => (
//                 <option key={index} value={categories.strCategory}>
//                     {categories.strCategory}
//                 </option>
//             ))}
//         </select>

//         <h1>{selectedCategory}</h1>

//     </div>

// )

// }

const CategorySelect = ({ categories, onCategoryChange }) => {
  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    onCategoryChange(selectedCategory);
  };

  return (
    <select onChange={handleCategoryChange}>
      <option value="">Select a Category</option>

      {categories.map((categories, index) => (
        <option key={index} value={categories.strCategory}>
          {categories.strCategory}
        </option>
      ))}
    </select>
  );
};

export default CategorySelect;
