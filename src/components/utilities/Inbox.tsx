import { AiOutlinePlus } from "react-icons/ai";

const Inbox = () => {
  return (
    <div className="h-full w-full pl-10 pt-10">
      <h1 className="text-5xl font-bold text-slate-900">Inbox</h1>
      <button className="mt-4 flex items-center justify-center gap-2 rounded-md bg-slate-900 px-6 py-3 text-slate-100 hover:bg-slate-950 hover:text-slate-50">
        Add Task
        <AiOutlinePlus />
      </button>
    </div>
  );
};

export default Inbox;
