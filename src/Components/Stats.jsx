function Stats({ itemsNum, packedItems }) {
  if (itemsNum === 0) {
    return (
      <p className="stats">
        <em>Start adding some items in your packing list🚀</em>
      </p>
    );
  }

  return (
    <div className="stats">
      {`💼 You have ${itemsNum}
      ${itemsNum === 1 ? "item" : "items"}
        in your list, and you already packed 
      ${packedItems === 0 ? "nothing" : packedItems} 
      (${packedItems === 0 ? 0 : Math.round(packedItems / itemsNum * 100)}%)
      `}
    </div>
  );
}

export default Stats;
