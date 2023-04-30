import Task from "../@types/Task";
import EditTask from "../@types/EditTask";
import ShowTaskList from "./ShowTaskList";
import { isThisWeek, parseISO } from "date-fns";

type ThisWeekProps = {
  tasks: Task[];
  removeTasks: (id: string) => void;
  toggleCompleted: (id: string) => void;
  editTask: EditTask;
};

const ThisWeek = ({
  tasks,
  toggleCompleted,
  removeTasks,
  editTask,
}: ThisWeekProps) => {
  // eslint-disable-next-line array-callback-return
  const showTaskElement = tasks.map((task) => {
    if (isThisWeek(parseISO(task.date))) {
      return (
        <ShowTaskList
          key={task.id}
          task={task}
          toggleCompleted={toggleCompleted}
          removeTask={removeTasks}
          editTask={editTask}
        />
      );
    }
  });
  return (
    <div className="h-full w-full p-2 md:p-10">
      <h1 className="text-5xl font-bold text-slate-900">This Week</h1>
      <table className="my-3 w-full table-auto px-4 lg:w-3/4">
        <tbody>{showTaskElement}</tbody>
      </table>
    </div>
  );
};

export default ThisWeek;
