import React from "react";
import { useState } from "react";
import Task from "../@types/Task";

type TaskEditProp = {
  task: Task;
};

const TaskEdit = ({ task }: TaskEditProp) => {
  const [editedTask, setEditedTask] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTask(e.target.value);
  };

  return (
    <form className="my-1">
      <input
        type="text"
        value={editedTask}
        placeholder="Edit Task"
        className="rounded-lg border border-slate-900 p-2 text-xl"
        onChange={(e) => handleChange(e)}
      />
      <button
        type="submit"
        className="mx-3 rounded-lg border border-green-900 bg-green-300 p-2 text-lg text-slate-900"
      >
        Add
      </button>
      <button
        type="button"
        className="rounded-lg border border-red-900 bg-red-300 p-2 text-lg text-slate-900"
      >
        Cancel
      </button>
    </form>
  );
};

export default TaskEdit;
