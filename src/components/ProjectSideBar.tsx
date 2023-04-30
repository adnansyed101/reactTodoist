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
  const [inputBox, setInputBox] = useState(false);

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
          // onClick={toggleInputBox}
          className="flex items-center justify-center gap-2 rounded-md bg-slate-900 px-3 py-2 text-slate-100 hover:bg-slate-950 hover:text-slate-50"
        >
          Add Task
          <AiOutlinePlus />
        </button>
      </div>
      {showProjects}
    </div>
  );
};

export default ProjectSideBar;
