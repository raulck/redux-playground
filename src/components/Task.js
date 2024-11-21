import { useRef, useState } from "react";
import { useDispatch } from "react-redux";

import { taskAdded } from "../feature/task/taskSlice"; // new
import { addTodo } from "../actionsOLD"; // old

const Task = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  // eslint-disable-next-line no-unused-vars
  function addNewTask() {
    // old
    const task = inputRef.current.value.trim();
    if (task !== "") {
      dispatch(addTodo(task));
      inputRef.current.value = "";
    }
  }

  return (
    <div className="task-component">
      <div className="add-task">
        <input
          type="text"
          placeholder="Add task here..."
          ref={inputRef}
          className="taskInput"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        {/* ========================== new */}
        <button
          onClick={() =>
            dispatch(taskAdded({ id: Date.now() + Math.random(), text: value }))
          }
        >
          {/*============================== old <button onClick={addNewTask}>*/}
          Add task
        </button>
      </div>
    </div>
  );
};

export default Task;
