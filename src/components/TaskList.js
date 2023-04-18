import React from "react";
import Task from "./Task";

function TaskList({ tasks, handleDeleteTask }) {
  const theTasks = tasks.map(e => <Task text={e.text} category={e.category} key={e.text} onHandleDelete={handleDeleteTask} />)
  
  return (
    <div className="tasks">
      {theTasks}
    </div>
  );
}

export default TaskList;