import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="grid h-screen w-screen grid-cols-[1fr_3fr] grid-rows-[80px_1fr_50px]">
      <Header />
      <span className="w-4 bg-black">Something</span>
      <span className="w-4 bg-black">Something</span>
      <Footer />
    </div>
  );
}

export default App;
