import Header from "../utilities/Header";
import Footer from "../utilities/Footer";
import Sidebar from "../utilities/Sidebar";
import ThisWeek from "../utilities/ThisWeek";

const ThisWeekPage = (): JSX.Element  => {
  return (
    <div className="grid h-screen w-screen grid-cols-[1fr_4fr] grid-rows-[80px_1fr_35px]">
      <Header />
      <Sidebar />
      <ThisWeek />
      <Footer />
    </div>
  );
};

export default ThisWeekPage;
