import Header from "./components/Header";
import Footer from "./components/Footer";
import Inbox from "./components/Inbox";
import Sidebar from "./components/Sidebar";
import Today from "./components/Today";
import ThisWeek from "./components/ThisWeek";
import ProjectPage from "./components/ProjectPage";
import { useState, useEffect } from "react";
import Task from "./@types/Task";
import Project from "./@types/Project";
import { v4 as uuidv4 } from "uuid";

const App = (): JSX.Element => {
  const [tasks, setTasks] = useState<Task[]>(
    () => JSON.parse(localStorage.getItem("tasks")!) || []
  );
  const [projects, setProjects] = useState<Project[]>(
    () => JSON.parse(localStorage.getItem("projects")!) || []
  );
  const [tabId, setTabId] = useState<string>("inbox");
  const [showNav, setShowNav] = useState<boolean>(true);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  const toggleTabs = (id: string): void => {
    setTabId(id);
  };

  const createTask = (e: {
    task: string;
    date: string;
    isCompleted: boolean;
    projectId: string;
  }) => {
    const task = { id: uuidv4(), ...e };
    setTasks((prev: Task[]) => [task, ...prev]);
  };

  const createProject = (title: string) => {
    const projObj = { id: uuidv4(), title };
    setProjects((prev: Project[]) => [...prev, projObj]);
  };

  const toggleNavBar = () => setShowNav((prev) => !prev);

  const toggleIsCompleted = (id: string) => {
    setTasks((prev: Task[]) => {
      return prev.map((task) => {
        if (task.id === id) {
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
      });
    });
  };

  const removeTasks = (id: string) => {
    setTasks((prev: Task[]) => {
      return prev.filter((task) => task.id !== id);
    });
  };

  const removeProject = (title: string) => {
    setTabId("inbox");

    setProjects((prev: Project[]) =>
      prev.filter((proj: Project) => proj.title !== title)
    );

    setTasks((prev: Task[]) =>
      prev.filter((task: Task) => task.projectId !== title)
    );
  };

  const editTask = (id: string, editedTask: string, date: string) => {
    setTasks((prev: Task[]) => {
      return prev.map((task) => {
        if (task.id === id) {
          return { ...task, task: editedTask, date };
        }
        return task;
      });
    });
  };

  const showProjectPage = projects.map((project: Project) => {
    return (
      tabId === project.title && (
        <ProjectPage
          key={project.id}
          project={project}
          createTask={createTask}
          tasks={tasks}
          toggleCompleted={toggleIsCompleted}
          removeTasks={removeTasks}
          editTask={editTask}
        />
      )
    );
  });

  return (
    <div className="relative h-screen w-screen md:static md:grid md:grid-cols-[1fr_4fr] md:grid-rows-[80px_1fr_35px]">
      <Header handleToggleNavBar={toggleNavBar} showNav={showNav} />
      <Sidebar
        tabId={tabId}
        showNav={showNav}
        projects={projects}
        onTabClick={toggleTabs}
        handleToggleNavBar={toggleNavBar}
        createProject={createProject}
        removeProject={removeProject}
      />
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
      {tabId === "thisWeek" && (
        <ThisWeek
          tasks={tasks}
          toggleCompleted={toggleIsCompleted}
          removeTasks={removeTasks}
          editTask={editTask}
        />
      )}
      {showProjectPage}
      <Footer />
    </div>
  );
};

export default App;
