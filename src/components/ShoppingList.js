import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event) {
    setSearch(event.target.value)
  }

  function handleItemSubmit(newItem) {
    setItems([...items, newItem])
  }

  const itemsToDisplay =
    items.filter((item) => item.name.toLowerCase().includes(search.toLocaleLowerCase()))
         .filter((item) => (selectedCategory === "All") || item.category === selectedCategory)

  return (
    <div className="ShoppingList">
      <ItemForm onCategoryChange={handleCategoryChange} onItemFormSubmit={handleItemSubmit}/>
      <Filter selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} search={search} onSearchChange={handleSearchChange}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
