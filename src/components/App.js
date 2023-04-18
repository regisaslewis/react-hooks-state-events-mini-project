import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {

  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("All");

  const filteredTasks = tasks.filter(task => category === "All" || task.category === category);
  const notAll = CATEGORIES.filter(e => e !== "All");
  
  function handleDeleteTask(key) {
    const tasksMinus = tasks.filter(e => e.text !== key)
    setTasks(tasksMinus);
  }

  function newTaskFormSubmit(newEntry) {
    setTasks([...tasks, newEntry])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categoryChoice={category} setCategory={setCategory} categories={CATEGORIES} />
      <NewTaskForm categories={notAll} onTaskFormSubmit={newTaskFormSubmit} />
      <TaskList tasks={filteredTasks} handleDeleteTask={handleDeleteTask}/>
    </div>
  );
}

export default App;
