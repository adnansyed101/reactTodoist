import { AiFillStar } from "react-icons/ai";
import { IoToday } from "react-icons/io5";
import { MdCalendarMonth } from "react-icons/md";

type SidebarProps = {
  onTabClick: (id: string) => void;
  tabId: string;
  handleToggleNavBar: () => void;
  showNav: boolean;
};

const Sidebar = ({
  onTabClick,
  tabId,
  showNav,
  handleToggleNavBar,
}: SidebarProps) => {
  const handleClick = (tab: string) => {
    onTabClick(tab);
    handleToggleNavBar();
  };

  return (
    <div
      className={`${
        showNav ? "-translate-x-96 transition" : ""
      } absolute h-full w-2/3 bg-slate-100 p-5 duration-500 ease-out md:static md:block md:w-full md:translate-x-0 md:p-10 md:transition-none`}
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
    </div>
  );
};

export default Sidebar;
