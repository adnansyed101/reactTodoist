import InboxPage from "./components/Pages/InboxPage";
import TodayPage from "./components/Pages/TodayPage";
import ThisWeekPage from "./components/Pages/ThisWeekPage";
import { useState } from "react";

import uniqid from "uniqid";

const App = (): JSX.Element => {
  const [task, setTask] = useState([{ id: uniqid(), task: "learn react" }]);
  return (
    <div className="App">
      <InboxPage />
      <TodayPage />
      <ThisWeekPage />
    </div>
  );
};

export default App;
