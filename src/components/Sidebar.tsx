import { AiFillStar } from "react-icons/ai";
import { IoToday } from "react-icons/io5";
import { MdCalendarMonth } from "react-icons/md";

type SidebarProps = {
  onTabClick: (id: string) => void;
  tabId: string;
};

const Sidebar = ({ onTabClick, tabId }: SidebarProps) => {
  return (
    <div className="h-full w-full bg-slate-100 p-10">
      <p
        className={tabId === "inbox" ? "sidebar-tab-border" : "sidebar-tab"}
        onClick={() => onTabClick("inbox")}
      >
        <AiFillStar />
        Inbox
      </p>
      <p
        className={tabId === "today" ? "sidebar-tab-border" : "sidebar-tab"}
        onClick={() => onTabClick("today")}
      >
        <IoToday /> Today
      </p>
      <p
        className={tabId === "thisWeek" ? "sidebar-tab-border" : "sidebar-tab"}
        onClick={() => onTabClick("thisWeek")}
      >
        <MdCalendarMonth /> This Week
      </p>
    </div>
  );
};

export default Sidebar;
