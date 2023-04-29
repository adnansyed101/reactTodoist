import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Task from "../@types/TaskList";
import EditTask from "../@types/EditTask";
import ShowTaskList from "./ShowTaskList";

type InboxProps = {
  createTask: (e: { task: string; date: string; isCompleted: boolean }) => void;
  tasks: Task;
  removeTasks: (id: string) => void;
  toggleCompleted: (id: string) => void;
  editTask: EditTask;
};

const Inbox = ({
  createTask,
  tasks,
  toggleCompleted,
  removeTasks,
  editTask,
}: InboxProps) => {
  const [inputBox, setInputBox] = useState(false);
  const [taskObj, setTaskObj] = useState({
    task: "",
    date: "",
    isCompleted: false,
  });

  const toggleInputBox = () => {
    setInputBox((prev) => !prev);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskObj((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const onInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInputBox(false);
    createTask(taskObj);
    setTaskObj({ task: "", date: "", isCompleted: false });
  };

  const cancelSubmit = () => {
    setInputBox(false);
    setTaskObj({ task: "", date: "", isCompleted: false });
  };

  const showTaskElement = tasks.map((task) => {
    return (
      <ShowTaskList
        key={task.id}
        task={task}
        toggleCompleted={toggleCompleted}
        removeTask={removeTasks}
        editTask={editTask}
      />
    );
  });

  return (
    <div className="h-full w-full px-10 pt-10">
      <h1 className="text-5xl font-bold text-slate-900">Inbox</h1>
      <button
        type="button"
        onClick={toggleInputBox}
        className="mt-4 flex items-center justify-center gap-2 rounded-md bg-slate-900 px-6 py-3 text-slate-100 hover:bg-slate-950 hover:text-slate-50"
      >
        Add Task
        <AiOutlinePlus />
      </button>
      {inputBox && (
        <form
          className="grid w-2/4 grid-cols-4 gap-2 p-3"
          onSubmit={onInputSubmit}
        >
          <input
            required
            type="text"
            onChange={(e) => onChange(e)}
            value={taskObj.task}
            name="task"
            placeholder="Enter Task"
            className="input-box col-span-3"
          />
          <input
            required
            name="date"
            value={taskObj.date}
            onChange={(e) => onChange(e)}
            type="date"
            min={new Date().toISOString().split("T")[0]}
            className="input-box col-span-1"
          />
          <button
            type="submit"
            className="green-button col-span-2 py-1 text-2xl font-bold"
          >
            Add
          </button>
          <button
            type="button"
            className="red-button  col-span-2 py-1 text-2xl font-bold"
            onClick={cancelSubmit}
          >
            Cancel
          </button>
        </form>
      )}
      <table className="my-3 table w-3/4 table-auto px-4">
        <tbody className="table-row-group">{showTaskElement}</tbody>
      </table>
    </div>
  );
};

export default Inbox;
