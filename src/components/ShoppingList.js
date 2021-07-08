import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce")
  const [submittedData, setSubmittedData] = useState([...items]);
  const [error, setErrors] = useState([]);

  function handleSubmit(e){
    e.preventDefault()
    console.log(e)
    if (itemName.length > 0){
      const newItem = {
        id: uuid(), // the `uuid` library can be used to generate a unique id
        name: itemName,
        category: itemCategory,
      }; 
      console.log(newItem, submittedData)
      const dataArray = [...submittedData, newItem]
      setSubmittedData(dataArray);
      setItemName("");
      setItemCategory("Produce");
      setErrors([]);
    } else {
      setErrors("Item name is required!")
    }
  }

  function handleSearchChange(event){
    setSearch(event.target.value);
  }

  


  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter(
      (item) => selectedCategory === "All" || item.category === selectedCategory
    ).filter((item) => item.name.toLowerCase().includes(search.toLowerCase())
  )


  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleSubmit}/>
      <Filter onSearchChange={handleSearchChange} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
