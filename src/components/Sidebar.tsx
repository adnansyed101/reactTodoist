import { AiFillStar } from "react-icons/ai";
import { IoToday } from "react-icons/io5";
import { MdCalendarMonth } from "react-icons/md";

type SidebarProps = {
  onTabClick: (id: string) => void;
};

const Sidebar = ({ onTabClick }: SidebarProps) => {
  return (
    <div className="h-full w-full bg-slate-100 p-10">
      <p className="sidebar-tab" onClick={() => onTabClick("inbox")}>
        <AiFillStar />
        Inbox
      </p>
      <p className="sidebar-tab" onClick={() => onTabClick("today")}>
        <IoToday /> Today
      </p>
      <p className="sidebar-tab" onClick={() => onTabClick("thisWeek")}>
        <MdCalendarMonth /> This Week
      </p>
    </div>
  );
};

export default Sidebar;
