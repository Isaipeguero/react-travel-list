import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

// Main App component
export default function App() {
  // State for managing items in the packing list
  const [items, setItems] = useState([]);

  // Add a new item to the packing list
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  // Delete an item from the packing list based on its id
  function handleDeleteItems(id) {
    console.log(id);
    setItems((items) => items.filter((item) => item.id !== id));
  }

  // Toggle the packed status of an item in the packing list
  function handleToggleItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  //Clear all added items by setting items to a new empty array
  function clearItems() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setItems([]);
  }

  // Render the main application UI
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItems}
        onToggleItem={handleToggleItems}
        onClearItems={clearItems}
      />
      <Stats items={items} />
    </div>
  );
}
