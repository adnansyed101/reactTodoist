import { BsCheck2All, BsFillTrashFill } from "react-icons/bs";
import { format, parseISO } from "date-fns";
import TaskEdit from "./TaskEdit";
import { AiOutlineEdit } from "react-icons/ai";
import { useState } from "react";
import Task from "../@types/Task";
import EditTask from "../@types/EditTask";

type ShowTaskListProps = {
  task: Task;
  toggleCompleted: (id: string) => void;
  removeTask: (id: string) => void;
  editTask: EditTask;
};

const ShowTaskList = ({
  task,
  toggleCompleted,
  removeTask,
  editTask,
}: ShowTaskListProps) => {
  const [showEdit, setShowEdit] = useState(false);

  const toggleEditBox = () => {
    setShowEdit((prev) => !prev);
  };

  const handleSubmit = (id: string, editedTask: string, date: string) => {
    setShowEdit(false);
    editTask(id, editedTask, date);
  };

  const handleCancel = () => {
    setShowEdit(false);
  };

  const showTask = showEdit ? (
    <td>
      <TaskEdit task={task} onSubmit={handleSubmit} onCancel={handleCancel} />
    </td>
  ) : (
    <td>{task.isCompleted ? <del>{task.task}</del> : task.task}</td>
  );

  const showDate = showEdit ? (
    <td></td>
  ) : (
    <td>Date: {format(parseISO(task.date), "MM-dd-yyyy")}</td>
  );

  return (
    <tr
      className="space-x-10 border-b-2 border-slate-500 py-1 text-xl"
      key={task.id}
    >
      <td onClick={() => toggleCompleted(task.id)}>
        <BsCheck2All />
      </td>
      {showTask}
      {showDate}
      <td>
        <BsFillTrashFill onClick={() => removeTask(task.id)} />
      </td>
      <td>
        <AiOutlineEdit onClick={toggleEditBox} />
      </td>
    </tr>
  );
};

export default ShowTaskList;
