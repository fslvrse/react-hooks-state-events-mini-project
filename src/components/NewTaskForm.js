import React, { useState } from "react";

function NewTaskForm({ categories, onAddTask }) {
  const [formData, setFormData] = useState({
    text: "",
    category: categories[0],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.text.trim()) {
      onAddTask(formData);
      setFormData({
        text: "",
        category: categories[0],
      });
    }
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={formData.text}
          onChange={(e) => setFormData({ ...formData, text: e.target.value })}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={formData.category}
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })
          }
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
