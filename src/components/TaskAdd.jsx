import React, { useState } from "react";

function TaskAdd({ onAddTask }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== "") {
      onAddTask(task);
      setTask("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center">
          <input
            type="text"
            className="w-full rounded-l-md p-2 border outline-none"
            placeholder="Write a Task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button
            className="bg-indigo-500 text-white rounded-r-md p-2"
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default TaskAdd;
