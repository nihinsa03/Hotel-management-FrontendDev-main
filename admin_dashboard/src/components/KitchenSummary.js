import React, { useState } from "react";
import "../styles/KitchenSummary.css";

const KitchenSummary = () => {
  // State to manage selected category
  const [category, setCategory] = useState("None");

  // State to manage status counts
  const [statusCounts, setStatusCounts] = useState({
    new: 0,
    preparing: 0,
    completed: 0,
    served: 0
  });

  // Handle Category Change
  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setCategory(selectedCategory);

    // Update the numbers based on the selected category
    switch (selectedCategory) {
      case "Pastry":
        setStatusCounts({ new: 5, preparing: 3, completed: 6, served: 2 });
        break;
      case "Hot Kitchen":
        setStatusCounts({ new: 8, preparing: 4, completed: 7, served: 5 });
        break;
      default: // "None" selected
        setStatusCounts({ new: 0, preparing: 0, completed: 0, served: 0 });
    }
  };

  return (
    <div className="kitchen-summary">
      <h3>Kitchen real time summary</h3>
      <div className="summary-container">
        <select value={category} onChange={handleCategoryChange} className="category-dropdown">
          <option value="None">None</option>
          <option value="Pastry">Pastry</option>
          <option value="Hot Kitchen">Hot Kitchen</option>
        </select>

        <div className="status-box new">
          <h4>{statusCounts.new < 10 ? `0${statusCounts.new}` : statusCounts.new}</h4>
          <p>New</p>
        </div>

        <div className="status-box preparing">
          <h4>{statusCounts.preparing < 10 ? `0${statusCounts.preparing}` : statusCounts.preparing}</h4>
          <p>Preparing</p>
        </div>

        <div className="status-box completed">
          <h4>{statusCounts.completed < 10 ? `0${statusCounts.completed}` : statusCounts.completed}</h4>
          <p>Completed</p>
        </div>

        <div className="status-box served">
          <h4>{statusCounts.served < 10 ? `0${statusCounts.served}` : statusCounts.served}</h4>
          <p>Served</p>
        </div>
      </div>
    </div>
  );
};

export default KitchenSummary;
