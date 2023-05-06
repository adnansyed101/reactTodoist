import Project from "../@types/Project";
import Task from "../@types/Task";
import EditTask from "../@types/EditTask";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import ShowTaskList from "./ShowTaskList";
import TaskForm from "./TaskForm";

type ProjectPageProps = {
  project: Project;
  tasks: Task[];
  removeTasks: (id: string) => void;
  toggleCompleted: (id: string) => void;
  editTask: EditTask;
  createTask: (e: {
    task: string;
    date: string;
    isCompleted: boolean;
    projectId: string;
  }) => void;
};

const ProjectPage = ({
  project,
  tasks,
  createTask,
  toggleCompleted,
  removeTasks,
  editTask,
}: ProjectPageProps) => {
  const [inputBox, setInputBox] = useState(false);
  const [taskObj, setTaskObj] = useState({
    task: "",
    date: "",
    isCompleted: false,
    projectId: project.title,
  });

  const toggleInputBox = () => {
    setInputBox((prev) => !prev);
  };

  const onInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInputBox(false);
    createTask(taskObj);
    setTaskObj({
      task: "",
      date: "",
      isCompleted: false,
      projectId: "",
    });
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskObj((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const cancelSubmit = () => {
    setInputBox(false);
    setTaskObj({ task: "", date: "", isCompleted: false, projectId: "" });
  };

  const showTaskElement = tasks
    .filter((task: Task) => task.projectId === project.title)
    .map((task) => {
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
      <h1 className="text-5xl font-bold text-slate-900">{project.title}</h1>
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

export default ProjectPage;
