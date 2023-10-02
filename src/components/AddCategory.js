// import Category from "./Category";
// import EmptyCategory from "./EmptyCategory";
import { Fragment, useState } from "react";
import Category from "./Category";



//Fucntion for adding category boxes
const AddCategory = () => {
    const [categories, setCategories] = useState([]);
    const [id, setId] = useState(0);
  
    const addCategory = () => {
      setCategories([...categories, { id: id }]);
      setId(id + 1);
    };
  
    const removeCategory = (id) => {
      setCategories(categories.filter((category) => category.id !== id));
    };

    return (
        <div className="category-container">
          {categories.map((category) => (
            <Category key={category.id} id={category.id} removeCategory={removeCategory} />
          ))}
          <button className="addBox-btn" onClick={addCategory}>
            <h1>+</h1>
          </button>
        </div>
      );
    };

export default AddCategory