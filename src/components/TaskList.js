import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { taskDeleted } from "../feature/task/taskSlice"; // new
import { deleteTodo } from "../actionsOLD"; // old

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  // eslint-disable-next-line no-unused-vars
  const handleDelete = (id) => {
    // old
    dispatch(deleteTodo(id));
  };

  return (
    <div className="tasklist">
      <div className="display-tasks">
        <h3>Your tasks:</h3>
        {tasks.length > 0 && (
          <ul className="tasks">
            {tasks.map((task) => (
              <li className="task" key={task.id}>
                {task.text}
                <button
                  className="delete-btn"
                  onClick={() => dispatch(taskDeleted({ id: task.id }))}
                >
                  {/*============================== old <button
                className="delete-btn"
                onClick={() => handleDelete(task.id)}
              >*/}
                  delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TaskList;
