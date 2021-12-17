import { useTasks } from "hooks/useTasks";
import React, { ReactElement } from "react";
import { ITask } from "types";

interface Props {
  task: ITask;
}

export default function Task({ task }: Props): ReactElement {
  const { toggleTask, removeTask } = useTasks();

  const handleToggleTask = () => {
    toggleTask(task.id);
  };

  const handleRemoveTask = () => {
    removeTask(task.id);
  };

  return (
    <li>
      <input type="checkbox" checked={task.completed} onChange={handleToggleTask} />
      <span>{task.title}</span>
      <button onClick={handleRemoveTask}>X</button>
    </li>
  );
}
