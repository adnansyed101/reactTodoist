import { GoChecklist } from "react-icons/go";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

type HeaderProps = {
  showNav: boolean;
  handleToggleNavBar: () => void;
};

const Header = ({ handleToggleNavBar, showNav }: HeaderProps) => {
  return (
    <header className="col-span-2 flex items-center justify-between bg-slate-900 px-4 text-2xl text-slate-100 md:justify-center md:text-5xl">
      <span className="flex items-center justify-start py-2  md:py-3 ">
        <GoChecklist /> Todo
      </span>
      {showNav ? (
        <AiOutlineMenu className="md:hidden" onClick={handleToggleNavBar} />
      ) : (
        <RxCross1 className="md:hidden" onClick={handleToggleNavBar} />
      )}
    </header>
  );
};

export default Header;
