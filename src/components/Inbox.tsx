import { useState } from "react";
import { AiOutlinePlus, AiOutlineEdit } from "react-icons/ai";
import { BsCheck2All, BsFillTrashFill } from "react-icons/bs";
import { format, parseISO } from "date-fns";
import Task from "../@types/Task";

type InboxProps = {
  createTask: (e: { task: string; date: string; isCompleted: boolean }) => void;
  tasks: Task;
  toggleCompleted: (id: string) => void;
};

const Inbox = ({ createTask, tasks, toggleCompleted }: InboxProps) => {
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

  const showTaskElement = tasks.map((task) => {
    return (
      <tr
        className="space-x-10 border-b-2 border-slate-500 py-1 text-xl"
        key={task.id}
      >
        <td onClick={() => toggleCompleted(task.id)}>
          <BsCheck2All />
        </td>
        <td>{task.isCompleted ? <del>{task.task}</del> : task.task}</td>
        <td>Date: {format(parseISO(task.date), "MM-dd-yyyy")}</td>
        <td>
          <BsFillTrashFill />
        </td>
        <td>
          <AiOutlineEdit />
        </td>
      </tr>
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
            className="col-span-3 rounded-lg border border-slate-900 p-2 text-xl"
          />
          <input
            required
            name="date"
            value={taskObj.date}
            onChange={(e) => onChange(e)}
            type="date"
            min={new Date().toISOString().split("T")[0]}
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
      <table className="my-3 table w-2/3 table-auto px-4">
        <tbody className="table-row-group">{showTaskElement}</tbody>
      </table>
    </div>
  );
};

export default Inbox;
