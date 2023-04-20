import { AiFillStar } from "react-icons/ai";
import { IoToday } from "react-icons/io5";
import { MdCalendarMonth } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="h-full w-full bg-slate-100 p-10">
      <p className="sidebar-tab">
        <AiFillStar />
        Inbox
      </p>
      <p className="sidebar-tab">
        <IoToday /> Today
      </p>
      <p className="sidebar-tab">
        <MdCalendarMonth /> This Week
      </p>
    </div>
  );
};

export default Sidebar;
