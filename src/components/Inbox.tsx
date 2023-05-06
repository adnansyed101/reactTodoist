import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Task from "../@types/Task";
import EditTask from "../@types/EditTask";
import ShowTaskList from "./ShowTaskList";
import TaskForm from "./TaskForm";

type InboxProps = {
  createTask: (e: {
    task: string;
    date: string;
    isCompleted: boolean;
    projectId: string;
  }) => void;
  tasks: Task[];
  removeTasks: (id: string) => void;
  toggleCompleted: (id: string) => void;
  editTask: EditTask;
};

const Inbox = ({
  tasks,
  createTask,
  toggleCompleted,
  removeTasks,
  editTask,
}: InboxProps) => {
  const [inputBox, setInputBox] = useState(false);
  const [taskObj, setTaskObj] = useState({
    task: "",
    date: "",
    isCompleted: false,
    projectId: "Inbox",
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
    setTaskObj({ task: "", date: "", isCompleted: false, projectId: "inbox" });
  };

  const cancelSubmit = () => {
    setInputBox(false);
    setTaskObj({ task: "", date: "", isCompleted: false, projectId: "inbox" });
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
        <TaskForm
          taskObj={taskObj}
          onChange={onChange}
          onInputSubmit={onInputSubmit}
          cancelSubmit={cancelSubmit}
        />
      )}
      <table className="my-3 w-full table-auto px-4 lg:w-3/4">
        <tbody>{showTaskElement}</tbody>
      </table>
    </div>
  );
};

export default Inbox;
