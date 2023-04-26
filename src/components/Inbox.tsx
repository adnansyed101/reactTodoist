import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsCheck2All, BsFillTrashFill } from "react-icons/bs";

type InboxProps = {
  createTask: (e: { task: string; date: string }) => void;
  tasks: { id: string; task: string; date: string }[];
};

const Inbox = ({ createTask, tasks }: InboxProps) => {
  const [inputBox, setInputBox] = useState(false);
  const [taskObj, setTaskObj] = useState({
    task: "",
    date: "",
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
    setTaskObj({ task: "", date: "" });
  };

  const showTaskElement = tasks.map((task) => {
    return (
      <div
        className="flex items-center space-x-2 border-b-2 border-slate-500 py-1 text-xl"
        key={task.id}
      >
        <BsCheck2All />
        <span>{task.task}</span>
        <span>{task.date}</span>
        <BsFillTrashFill />
      </div>
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
            type="text"
            onChange={(e) => onChange(e)}
            value={taskObj.task}
            name="task"
            placeholder="Enter Task"
            className="col-span-3 rounded-lg border border-slate-900 p-2 text-xl"
          />
          <input
            name="date"
            value={taskObj.date}
            onChange={(e) => onChange(e)}
            type="date"
            className="col-span-1 rounded-lg border border-slate-900 p-2 text-xl"
          />
          <button
            type="submit"
            className="col-span-2 rounded-lg border border-green-900 bg-green-300 py-1 text-2xl font-bold text-slate-900"
          >
            Add
          </button>
          <button
            type="button"
            className="col-span-2 rounded-lg border border-red-900 bg-red-300 py-1 text-2xl font-bold text-slate-900"
          >
            Cancel
          </button>
        </form>
      )}
      <div className="my-3 px-4">{showTaskElement}</div>
    </div>
  );
};

export default Inbox;
