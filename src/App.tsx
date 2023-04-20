import Header from "./components/utilities/Header";
import Footer from "./components/utilities/Footer";
import Sidebar from "./components/utilities/Sidebar";
import Main from "./components/utilities/Main";

function App() {
  return (
    <div className="grid h-screen w-screen grid-cols-[1fr_4fr] grid-rows-[80px_1fr_35px]">
      <Header />
      <Sidebar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
