import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [item, setItem] = useState({
    name: "",
    category: "Produce",
  });

  const handleItem = (e) => {
    const itemKey = e.target.name;
    const itemValue = e.target.value;

    setItem({ ...item, [itemKey]: itemValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { ...item, id: uuid() };
    onItemFormSubmit(newItem);
  };

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleItem} value={item.name} />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleItem} value={item.category}>
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