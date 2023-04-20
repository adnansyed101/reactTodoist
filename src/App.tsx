import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

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
