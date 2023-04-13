import { FC, ChangeEvent, useState, useEffect } from "react";
import Input from "./components/Input";
import Task from "./components/Task";
import { ITask } from "./Interfaces";

const App: FC = () => {
  const [taskTitle, setTaskTitle] = useState<string>("");
  const [deadLine, setDeadLine] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = ({
    target: { value, name },
  }: ChangeEvent<HTMLInputElement>): void => {
    if (name === "task") {
      setTaskTitle(value);
    } else {
      setDeadLine(+value);
    }
  };

  function addTask(): void {
    const newTask: ITask = {
      id: Date.now(),
      taskTitle,
      deadLine,
    };
    setTodoList([...todoList, newTask]);
    setTaskTitle("");
    setDeadLine(0);
  }

  function completeTask(taskId: number): void {
    setTodoList(todoList.filter((task) => task.id !== taskId));
  }

  useEffect(() => {
    console.log(todoList);
  }, [todoList]);

  return (
    <section className="m-5">
      <div className="flex flex-col gap-3">
        <Input
          onChange={handleChange}
          value={taskTitle}
          label="Title"
          name="task"
          placeholder="Task..."
        />
        <Input
          onChange={handleChange}
          value={deadLine}
          label="Deadline"
          type="number"
          name="deadline"
        />
        <button
          onClick={addTask}
          className="text-xl font-semibold text-white bg-blue-500 rounded-lg p-3"
        >
          Add
        </button>
      </div>

      <div className="mt-12">
        <h1 className="text-2xl font-medium">Tasks</h1>
        {todoList.map((task: ITask, key: number) => {
          return (
            <Task key={key} completeTask={completeTask} task={task}></Task>
          );
        })}
      </div>
    </section>
  );
};

export default App;
