import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

type InboxProps = {
  createTask: (task: string) => void;
  tasks: { id: string; task: string }[];
};

const Inbox = ({ createTask, tasks }: InboxProps) => {
  const [inputBox, setInputBox] = useState(false);
  const [taskInput, setTaskInput] = useState("");

  const toggleInputBox = () => {
    setInputBox((prev) => !prev);
  };

  const onInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setTaskInput(e.currentTarget.value);
  };

  const onInputSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    createTask(taskInput);
    setInputBox(false);
    setTaskInput("");
  };

  const showTaskElement = tasks.map((task) => {
    return <div key={task.id}>{task.task}</div>;
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
          className="grid w-2/3 grid-cols-2 gap-2 p-3"
          onSubmit={onInputSubmit}
        >
          <input
            type="text"
            onChange={(e) => onInputChange(e)}
            value={taskInput}
            placeholder="Enter Task"
            className="col-span-2 rounded-lg border border-slate-900 p-3 text-2xl"
          />
          <button
            type="submit"
            className="rounded-lg border border-green-900 bg-green-300 py-2 text-2xl font-bold text-slate-900"
          >
            Add
          </button>
          <button
            type="button"
            className="rounded-lg border border-red-900 bg-red-300 py-2 text-2xl font-bold text-slate-900"
          >
            Cancel
          </button>
        </form>
      )}
      <ul>{showTaskElement}</ul>
    </div>
  );
};

export default Inbox;
