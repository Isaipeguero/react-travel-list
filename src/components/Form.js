import { useState } from "react";
// Form component for adding items to the packing list
export default function Form({ onAddItems }) {
  // State for managing form input values
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;

    // Create a new item object
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    // Add the new item to the packing list
    onAddItems(newItem);

    // Clear form input values
    setDescription("");
    setQuantity(1);
  }

  // Render the form UI
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Needed Items for your trip</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button id="mainButton">Add</button>
    </form>
  );
}
