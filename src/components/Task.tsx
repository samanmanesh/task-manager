import { useTasks } from "hooks/useTasks";
import React, { ReactElement } from "react";
import { ITask } from "types";

interface Props {
  task: ITask;
}

export default function Task({
  task,
}: Props): ReactElement {
  const { toggleTask, removeTask } = useTasks();

  const handleToggleTask = () => {
    toggleTask(task.id);
  };

  const handleRemoveTask = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.stopPropagation();
    removeTask(task.id);
  };

  return (
    <li
      className="list-none select-none cursor-pointer flex items-center space-x-3 p-2"
      onClick={handleToggleTask}
    >
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleToggleTask}
      />
      <span
        className={`
      text-lg font-medium
      transition
      hover:text-blue-100
      ${task.completed && "line-through"}`}
      >
        {task.title}
      </span>
      <button
        className="bg-red-500 hover:bg-red-700 text-white 
        font-bold w-8 h-8 grid place-items-center rounded-full"
        onClick={handleRemoveTask}
      >
        <span className="sr-only">
          Remove task
        </span>
        <span aria-hidden="true">&times;</span>
      </button>
    </li>
  );
}
