import Footer from "../utilities/Footer";
import Header from "../utilities/Header";
import Sidebar from "../utilities/Sidebar";
import Today from "../utilities/Today";

const TodayPage = (): JSX.Element  => {
  return (
    <div className="grid h-screen w-screen grid-cols-[1fr_4fr] grid-rows-[80px_1fr_35px]">
      <Header />
      <Sidebar />
      <Today />
      <Footer />
    </div>
  );
};

export default TodayPage;
