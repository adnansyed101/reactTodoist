import Project from "../@types/Project";

type ProjectSideBarProps = {
  tabId: string;
  project: Project;
  handleClick: (tab: string) => void;
};

const ProjectSideBar = ({
  tabId,
  project,
  handleClick,
}: ProjectSideBarProps) => {
  return (
    <div>
      <h2 className="sidebar-project">Projects</h2>
      <p
        className={
          tabId === project.title ? "sidebar-tab-border" : "sidebar-tab"
        }
        onClick={() => handleClick(project.title)}
      >
        {project.title}
      </p>
    </div>
  );
};

export default ProjectSideBar;
