import { useState } from "react";

function Form({ items, setItems }) {
  const [item, setItem] = useState({
    id: null,
    description: "",
    quantity: 1,
    packed: false,
  });
  let getInputValue = (e) => {
    let myItem = { ...item, id: Date.now() };
    if (e.target.name === "quantity") {
      myItem[e.target.name] = Number(e.target.value);
    } else {
      myItem[e.target.name] = e.target.value;
    }
    console.log(myItem);
    setItem(myItem);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    if (item.description === "") return;
    let myItems = [...items, item];
    setItems(myItems);
    setItem({
      id: null,
      description: "",
      quantity: 1,
      packed: false,
    });
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select name="quantity" value={item.quantity} onChange={getInputValue}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item..."
        name="description"
        value={item.description}
        onChange={getInputValue}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default Form;
