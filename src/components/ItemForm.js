import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {
  const [name, setName] = useState("")
  const [category, setCategory] = useState("Produce")

  function handleNameChange(event) {
    setName(event.target.value)
  }

  function handleCategoryChange(event) {
    setCategory(event.target.value)
  }

  function handleFormSubmit(event) {
    event.preventDefault()
    const newItem = {
      id: uuid(),
      name: name,
      category: category
    }
    console.log(newItem) // have new object with id
  }

  // need to add new object to items array

  return (
    <form className="NewItem" onSubmit={handleFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleNameChange} value={name}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCategoryChange} value={category}>
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
