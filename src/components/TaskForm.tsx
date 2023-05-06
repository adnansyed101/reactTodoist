type TaskFormProps = {
  taskObj: {
    task: string;
    date: string;
    isCompleted: boolean;
    projectId: string;
  };
  onInputSubmit: (e: React.FormEvent) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  cancelSubmit: () => void;
};

const TaskForm = ({
  taskObj,
  onInputSubmit,
  onChange,
  cancelSubmit,
}: TaskFormProps) => {
  return (
    <form
      className="grid w-full gap-2 py-3 md:w-full md:grid-cols-4 2xl:w-2/4"
      onSubmit={onInputSubmit}
    >
      <input
        required
        type="text"
        onChange={(e) => onChange(e)}
        value={taskObj.task}
        name="task"
        placeholder="Enter Task"
        className="input-box md:col-span-3"
      />
      <input
        required
        name="date"
        value={taskObj.date}
        onChange={(e) => onChange(e)}
        type="date"
        placeholder="mm/dd/yyyy"
        min={new Date().toISOString().split("T")[0]}
        className="input-box inline-flex justify-center sm:block md:col-span-1"
      />
      <button
        type="submit"
        className="green-button py-1 text-xl font-bold md:col-span-2 md:text-2xl"
      >
        Add
      </button>
      <button
        type="button"
        className="red-button py-1 text-xl font-bold md:col-span-2 md:text-2xl"
        onClick={cancelSubmit}
      >
        Cancel
      </button>
    </form>
  );
};

export default TaskForm;
