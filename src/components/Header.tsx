import { GoChecklist } from "react-icons/go";

function Header() {
  return (
    <header className="col-span-2 bg-slate-800">
      <span className="flex items-center justify-center py-3 text-5xl text-slate-100">
        <GoChecklist /> Todo
      </span>
    </header>
  );
}

export default Header;
