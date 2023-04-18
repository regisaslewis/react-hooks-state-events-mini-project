import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [details, setDetails] = useState("");
  const [category, setCategory] = useState("Code");

  const categoryList = categories.map(e => <option key={e}>{e}</option>);

  function handleCategorySelect(event) {
    setCategory(event.target.value)
  }

  function handleInput(event) {
    setDetails(event.target.value)
  }

  function submitForm(event) {
    event.preventDefault();
    onTaskFormSubmit({
      category: category,
      text: details
    });
  }
  
  return (
    <form className="new-task-form" onSubmit={submitForm} >
      <label>
        Details
        <input type="text" name="text" value={details} onChange={handleInput} />
      </label>
      <label>
        Category
        <select value={category} onChange={handleCategorySelect} name="category">
          {categoryList}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
