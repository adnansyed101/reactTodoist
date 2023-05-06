import { AiFillStar } from "react-icons/ai";
import { IoToday } from "react-icons/io5";
import { MdCalendarMonth } from "react-icons/md";
import ProjectSideBar from "./ProjectSideBar";
import Project from "../@types/Project";

type SidebarProps = {
  tabId: string;
  showNav: boolean;
  projects: Project[];
  onTabClick: (id: string) => void;
  handleToggleNavBar: () => void;
  createProject: (title: string) => void;
  removeProject: (title: string) => void;
};

const Sidebar = ({
  tabId,
  showNav,
  projects,
  onTabClick,
  handleToggleNavBar,
  createProject,
  removeProject,
}: SidebarProps) => {
  const handleClick = (tab: string) => {
    onTabClick(tab);
    handleToggleNavBar();
  };

  return (
    <div
      className={`${
        showNav ? "-translate-x-full transition" : ""
      } md absolute h-full w-2/3 bg-slate-100 p-5 duration-500 ease-out md:w-2/4 md:p-4 lg:static lg:mr-5 lg:block lg:w-full lg:translate-x-0 lg:transition-none xl:p-10`}
    >
      <p
        className={tabId === "inbox" ? "sidebar-tab-border" : "sidebar-tab"}
        onClick={() => handleClick("inbox")}
      >
        <AiFillStar />
        Inbox
      </p>
      <p
        className={tabId === "today" ? "sidebar-tab-border" : "sidebar-tab"}
        onClick={() => handleClick("today")}
      >
        <IoToday /> Today
      </p>
      <p
        className={tabId === "thisWeek" ? "sidebar-tab-border" : "sidebar-tab"}
        onClick={() => handleClick("thisWeek")}
      >
        <MdCalendarMonth /> This Week
      </p>
      <ProjectSideBar
        tabId={tabId}
        projects={projects}
        handleClick={handleClick}
        createProjects={createProject}
        removeProject={removeProject}
      />
    </div>
  );
};

export default Sidebar;
