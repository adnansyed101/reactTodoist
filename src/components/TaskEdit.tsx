import React from "react";
import { useState } from "react";
import Task from "../@types/Task";

type TaskEditProp = {
  task: Task;
};

const TaskEdit = ({ task }: TaskEditProp) => {
  const [editedTask, setEditedTask] = useState<string>(task.task);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTask(e.target.value);
  };

  return (
    <form className="my-1">
      <input
        type="text"
        value={editedTask}
        placeholder="Edit Task"
        className="input-box"
        onChange={(e) => handleChange(e)}
      />
      <input type="date" className="input-box mx-3" />
      <button type="submit" className="green-button mx-3 px-4 py-1 text-lg">
        Add
      </button>
      <button type="button" className="red-button px-4 py-1 text-lg">
        Cancel
      </button>
    </form>
  );
};

export default TaskEdit;
