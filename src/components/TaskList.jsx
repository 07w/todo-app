import React from "react";

function TaskList({ tasks }) {
  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            className="bg-slate-700 dark:bg-gray-100 text-gray-100 dark:text-slate-700 p-2 rounded-md mb-2"
          >
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
