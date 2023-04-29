import Header from "./components/Header";
import Footer from "./components/Footer";
import Inbox from "./components/Inbox";
import Sidebar from "./components/Sidebar";
import Today from "./components/Today";
import ThisWeek from "./components/ThisWeek";
import { useState } from "react";
import uniqid from "uniqid";
import TaskList from "./@types/TaskList";

const App = (): JSX.Element => {
  const [tasks, setTasks] = useState<TaskList>([
    {
      id: uniqid(),
      task: "Learn React",
      date: "2023-04-30",
      isCompleted: true,
    },
  ]);
  const [tabId, setTabId] = useState<string>("today");

  const toggleTabs = (id: string): void => {
    setTabId(id);
  };

  const createTask = (e: {
    task: string;
    date: string;
    isCompleted: boolean;
  }) => {
    const task = { id: uniqid(), ...e };
    setTasks((prev: TaskList) => [task, ...prev]);
  };

  const toggleIsCompleted = (id: string) => {
    setTasks((prev: TaskList) => {
      return prev.map((task) => {
        if (task.id === id) {
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
      });
    });
  };

  const removeTasks = (id: string) => {
    setTasks((prev: TaskList) => {
      return prev.filter((task) => task.id !== id);
    });
  };

  const editTask = (id: string, editedTask: string, date: string) => {
    setTasks((prev: TaskList) => {
      return prev.map((task) => {
        if (task.id === id) {
          return { ...task, task: editedTask, date };
        }
        return task;
      });
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
          editTask={editTask}
        />
      )}
      {tabId === "today" && (
        <Today
          tasks={tasks}
          toggleCompleted={toggleIsCompleted}
          removeTasks={removeTasks}
          editTask={editTask}
        />
      )}
      {tabId === "thisWeek" && <ThisWeek />}
      <Footer />
    </div>
  );
};

export default App;
