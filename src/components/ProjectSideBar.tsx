import { useState } from "react";
import Project from "../@types/Project";
import { AiOutlinePlus } from "react-icons/ai";

type ProjectSideBarProps = {
  tabId: string;
  projects: Project[];
  handleClick: (tab: string) => void;
};

const ProjectSideBar = ({
  tabId,
  projects,
  handleClick,
}: ProjectSideBarProps) => {
  const [inputBox, setInputBox] = useState(true);

  const toggleInputBox = () => {
    setInputBox((prev) => !prev);
  };

  const showProjects = projects.map((project: Project) => {
    return (
      <p
        key={project.id}
        className={
          tabId === project.title ? "sidebar-tab-border" : "sidebar-tab"
        }
        onClick={() => handleClick(project.title)}
      >
        {project.title}
      </p>
    );
  });

  return (
    <div className="my-4">
      <div className="flex justify-between">
        <h2 className="sidebar-project">Projects</h2>
        <button
          type="button"
          onClick={toggleInputBox}
          className="flex items-center justify-center gap-2 rounded-md bg-slate-900 px-3 py-2 text-slate-100 hover:bg-slate-950 hover:text-slate-50"
        >
          Add Task
          <AiOutlinePlus />
        </button>
      </div>

      {inputBox && (
        <form
          className="grid w-full grid-cols-2 gap-1 p-3"
          // onSubmit={onInputSubmit}
        >
          <input
            required
            type="text"
            // onChange={(e) => onChange(e)}
            // value={taskObj.task}
            name="task"
            placeholder="Enter Task"
            className="input-box col-span-2"
          />
          <button
            type="submit"
            className="green-button col-span-1 py-1 text-lg font-bold md:text-xl"
          >
            Add
          </button>
          <button
            type="button"
            className="red-button col-span-1 py-1 text-lg font-bold md:text-xl"
            // onClick={cancelSubmit}
          >
            Cancel
          </button>
        </form>
      )}

      {showProjects}
    </div>
  );
};

export default ProjectSideBar;
