import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [submittedData, setSubmittedData] = useState([...items]);

  

  function handleSubmit(newItem) {
    setSubmittedData([...items, newItem]);
  } 

  function handleSearchChange(event){
    setSearch(event.target.value);
  }


  const itemsToDisplay = submittedData.filter(
      (item) => selectedCategory === "All" || item.category === selectedCategory
    ).filter((item) => item.name.toLowerCase().includes(search.toLowerCase())
  )


  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleSubmit}/>
      <Filter onSearchChange={handleSearchChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
