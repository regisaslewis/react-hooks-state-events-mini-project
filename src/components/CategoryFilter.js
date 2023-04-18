import React from "react";

function CategoryFilter({ categories, categoryChoice, setCategory }) {
  
  const catButtons = categories.map(category => {
    const isSelected = category === categoryChoice ? "selected" :null;
    return <button onClick={() => handleClick(category)} className={isSelected} key={category}>{category}</button>});

  function handleClick(e) {
    setCategory(e);
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {catButtons}
    </div>
  );
}

export default CategoryFilter;
