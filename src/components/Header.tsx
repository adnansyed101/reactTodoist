import { GoChecklist } from "react-icons/go";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

type HeaderProps = {
  showNav: boolean;
  handleToggleNavBar: () => void;
};

const Header = ({ handleToggleNavBar, showNav }: HeaderProps) => {
  return (
    <header className="col-span-2 flex items-center justify-between bg-slate-900 px-4 text-2xl text-slate-100 md:text-5xl lg:justify-center">
      <span className="flex items-center justify-start py-2  md:py-3 ">
        <GoChecklist /> Todo
      </span>
      {showNav ? (
        <AiOutlineMenu className="lg:hidden" onClick={handleToggleNavBar} />
      ) : (
        <RxCross1 className="lg:hidden" onClick={handleToggleNavBar} />
      )}
    </header>
  );
};

export default Header;
