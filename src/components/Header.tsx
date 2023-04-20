import { GoChecklist } from "react-icons/go";

function Header() {
  return (
    <header className="bg-slate-800">
      <span className="text-slate-100 text-5xl py-3 flex items-center justify-center">
        <GoChecklist /> Todo
      </span>
    </header>
  );
}

export default Header;
