import TaskList from "../@types/TaskList";
import EditTask from "../@types/EditTask";
import ShowTaskList from "./ShowTaskList";
import { isThisWeek, parseISO } from "date-fns";

type ThisWeekProps = {
  tasks: TaskList;
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
    <div className="h-full w-full pl-10 pt-10">
      <h1 className="text-5xl font-bold text-slate-900">This Week</h1>
      <table className="my-3 table w-3/4 table-auto px-4">
        <tbody className="table-row-group">{showTaskElement}</tbody>
      </table>
    </div>
  );
};

export default ThisWeek;
