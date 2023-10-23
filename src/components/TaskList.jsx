import React from "react";

function TaskList({ tasks }) {
  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="bg-gray-100 p-2 rounded-md mb-2">
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
