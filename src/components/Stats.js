// Stats component for displaying statistics about the packing list
export default function Stats({ items }) {
  // If no items, display a message encouraging the user to start adding items
  if (!items.length)
    return (
      <p className="stats">
        <em> 🚀 Let's get ready to travel 🚀</em>
      </p>
    );

  // Calculate the number of items, number of packed items, and the packing percentage
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  // Render statistics based on the packing progress
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You are ready to travel my friend ✈️🚢"
          : `💼 You have ${numItems} items on your list, and you already packed
        ${numPacked} of them (${percentage}%)`}
      </em>
    </footer>
  );
}
