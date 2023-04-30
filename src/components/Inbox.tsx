import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Task from "../@types/Task";
import EditTask from "../@types/EditTask";
import ShowTaskList from "./ShowTaskList";

type InboxProps = {
  createTask: (e: { task: string; date: string; isCompleted: boolean }) => void;
  tasks: Task[];
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
    <div className="h-full w-full p-2 md:p-10">
      <h1 className="text-5xl font-bold text-slate-900">Inbox</h1>
      <button
        type="button"
        onClick={toggleInputBox}
        className="mt-4 flex items-center justify-center gap-2 rounded-md bg-slate-900 px-3 py-2 text-slate-100 hover:bg-slate-950 hover:text-slate-50 md:px-6 md:py-3"
      >
        Add Task
        <AiOutlinePlus />
      </button>
      {inputBox && (
        <form
          className="grid w-full gap-2 p-3 md:w-2/4 md:grid-cols-4"
          onSubmit={onInputSubmit}
        >
          <input
            required
            type="text"
            onChange={(e) => onChange(e)}
            value={taskObj.task}
            name="task"
            placeholder="Enter Task"
            className="input-box md:col-span-3"
          />
          <input
            required
            name="date"
            value={taskObj.date}
            onChange={(e) => onChange(e)}
            type="date"
            min={new Date().toISOString().split("T")[0]}
            className="input-box md:col-span-1"
          />
          <button
            type="submit"
            className="green-button py-1 text-xl font-bold md:col-span-2 md:text-2xl"
          >
            Add
          </button>
          <button
            type="button"
            className="red-button  py-1 text-xl font-bold md:col-span-2 md:text-2xl"
            onClick={cancelSubmit}
          >
            Cancel
          </button>
        </form>
      )}
      <table className="my-3 w-full table-auto px-4 lg:w-3/4">
        <tbody>{showTaskElement}</tbody>
      </table>
    </div>
  );
};

export default Inbox;
