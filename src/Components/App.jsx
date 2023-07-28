import { useState } from "react";
import Form from "./Form";
import Logo from "./Logo";
import PackingList from "./PackingList";
import Stats from "./Stats";

function App() {
  const [items, setItems] = useState([]);
  
  let handleCheck = (id) => {
    setItems((items) =>
      items?.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  let deleteItem = (id) => {
    setItems((items) => items?.filter((item) => item.id !== id));
  };

  let handleClearList = () => {
    const confirmed = window.confirm(
      "Are you sure, you want to delete all items"
    );
    if (confirmed) setItems([]);
  };

  // console.log(items)
  return (
    <div className="app">
      <Logo />
      <Form items={items} setItems={setItems} />
      <PackingList
        items={items}
        handleCheck={handleCheck}
        deleteItem={deleteItem}
        handleClearList={handleClearList}
      />
      <Stats
        itemsNum={items.length}
        packedItems={items.filter((item) => item.packed === true).length}
      />
    </div>
  );
}

export default App;
