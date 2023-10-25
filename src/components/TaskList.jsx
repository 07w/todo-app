import React from "react";

function TaskList({ tasks, onDeleteTask }) {
  const handleDeleteTask = (index) => {
    onDeleteTask(index);
  };

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="flex justify-between items-center">
            <span>{task}</span>
            <button
              onClick={() => handleDeleteTask(index)}
              className="text-red-600 ml-2 p-1 rounded-full hover:bg-red-100"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
