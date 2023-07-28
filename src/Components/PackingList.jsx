import { useState } from "react";

function PackingList({ items, handleCheck, deleteItem, handleClearList }) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems?.map((item, index) => (
          <li key={index}>
            <input
              type="checkbox"
              // value={item.packed}
              onChange={() => handleCheck(item.id)}
              checked={item.packed}
            />
            <span style={item.packed ? { textDecoration: "line-through" } : {}}>
              {item.quantity} {item.description}
            </span>
            <button onClick={() => deleteItem(item.id)}>❌</button>
          </li>
        ))}
      </ul>
      {items.length > 0 ? (
        <div className="actions">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">sort by input order</option>
            <option value="description">sort by description</option>
            <option value="packed">sort by packed list</option>
          </select>
          <button onClick={handleClearList}>clear list</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default PackingList;
