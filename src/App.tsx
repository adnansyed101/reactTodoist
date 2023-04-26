import Header from "./components/Header";
import Footer from "./components/Footer";
import Inbox from "./components/Inbox";
import Sidebar from "./components/Sidebar";
import Today from "./components/Today";
import ThisWeek from "./components/ThisWeek";
import { useState } from "react";
import uniqid from "uniqid";

const App = (): JSX.Element => {
  const [tasks, setTasks] = useState<
    { id: string; task: string; date: string }[]
  >([{ id: uniqid(), task: "Learn React", date: '12-12-2021' }]);
  const [tabId, setTabId] = useState<string>("inbox");

  const toggleTabs = (id: string): void => {
    setTabId(id);
  };

  const createTask = (e: { task: string; date: string }) => {
    const task = { id: uniqid(), ...e };
    setTasks((prev) => prev.concat(task));
  };

  return (
    <div className="grid h-screen w-screen grid-cols-[1fr_4fr] grid-rows-[80px_1fr_35px]">
      <Header />
      <Sidebar onTabClick={toggleTabs} tabId={tabId} />
      {tabId === "inbox" && <Inbox createTask={createTask} tasks={tasks} />}
      {tabId === "today" && <Today />}
      {tabId === "thisWeek" && <ThisWeek />}
      <Footer />
    </div>
  );
};

export default App;
