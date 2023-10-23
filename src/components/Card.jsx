import React, { useState } from "react";
import TaskAdd from "./TaskAdd";
import TaskList from "./TaskList";

function Card() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-slate-800 dark:bg-gray-200 p-4 rounded-lg shadow-md">
        <TaskAdd onAddTask={addTask} />
        <TaskList tasks={tasks} />
      </div>
    </div>
  );
}

export default Card;
