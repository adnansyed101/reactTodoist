import React from "react";
import { useState } from "react";
import Task from "../@types/Task";

type TaskEditProp = {
  task: Task;
  onSubmit: (id: string, editedTask: string, date: string) => void;
  onCancel: () => void;
};

const TaskEdit = ({ task, onSubmit, onCancel }: TaskEditProp) => {
  const [editedTask, setEditedTask] = useState(task);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(editedTask.id, editedTask.task, editedTask.date);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTask((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <form className="my-1" onSubmit={handleSubmit}>
      <input
        type="text"
        value={editedTask.task}
        placeholder="Edit Task"
        className="input-box"
        name="task"
        onChange={(e) => handleChange(e)}
      />
      <input
        name="date"
        type="date"
        className="input-box mx-3"
        value={editedTask.date}
        onChange={(e) => handleChange(e)}
        min={new Date().toISOString().split("T")[0]}
      />
      <button type="submit" className="green-button mx-3 px-4 py-1 text-lg">
        Add
      </button>
      <button
        type="button"
        onClick={onCancel}
        className="red-button px-4 py-1 text-lg"
      >
        Cancel
      </button>
    </form>
  );
};

export default TaskEdit;
