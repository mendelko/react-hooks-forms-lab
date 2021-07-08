import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {

  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce")

  function handleNameChange(e){
    setName(e.target.value);
    
  }

  function handleCategoryChange(e){
    setCategory(e.target.value);
    
  }


  function handleSubmit(e){
    console.log(e)
    e.preventDefault()
    onItemFormSubmit({ 
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name,
      category,
    }  )
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input onChange={handleNameChange} type="text" name="name" />
      </label>

      <label>
        Category:
        <select onChange={handleCategoryChange} name="category" defaultValue="Produce">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
