import React from "react";

function Task({ text, category, onHandleDelete }) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={() => onHandleDelete(text)} >X</button>
    </div>
  );
}

export default Task;
