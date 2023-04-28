import Header from "./components/Header";
import Footer from "./components/Footer";
import Inbox from "./components/Inbox";
import Sidebar from "./components/Sidebar";
import Today from "./components/Today";
import ThisWeek from "./components/ThisWeek";
import { useState } from "react";
import uniqid from "uniqid";
import Task from "./@types/Task";

const App = (): JSX.Element => {
  const [tasks, setTasks] = useState<Task>([
    {
      id: uniqid(),
      task: "Learn React",
      date: "2023-12-20",
      isCompleted: true,
    },
  ]);
  const [tabId, setTabId] = useState<string>("inbox");

  const toggleTabs = (id: string): void => {
    setTabId(id);
  };

  const createTask = (e: {
    task: string;
    date: string;
    isCompleted: boolean;
  }) => {
    const task = { id: uniqid(), ...e };
    setTasks((prev) => prev.concat(task));
  };

  const toggleIsCompleted = (id: string) => {
    setTasks((prev: Task) => {
      return prev.map((task) => {
        if (task.id === id) {
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
      });
    });
  };

  const removeTasks = (id: string) => {
    setTasks((prev: Task) => {
      return prev.filter((task) => task.id !== id);
    });
  };

  return (
    <div className="grid h-screen w-screen grid-cols-[1fr_4fr] grid-rows-[80px_1fr_35px]">
      <Header />
      <Sidebar onTabClick={toggleTabs} tabId={tabId} />
      {tabId === "inbox" && (
        <Inbox
          createTask={createTask}
          tasks={tasks}
          toggleCompleted={toggleIsCompleted}
          removeTasks={removeTasks}
        />
      )}
      {tabId === "today" && <Today />}
      {tabId === "thisWeek" && <ThisWeek />}
      <Footer />
    </div>
  );
};

export default App;
