import React, { useState } from "react";
import Task from "components/Task";
import { useTasks } from "hooks/useTasks";

interface Props {}

export const TasksList = (props: Props) => {
  const [input, setInput] = useState<string>();
  const { tasks, addTask } = useTasks();

  const handleAddTask = () => {
    if (!input) return;
    addTask(input);
    setInput("");
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInput(e.target.value);
  };

  const handleKeyPress = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <div className="bg-gray-500">
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        className="p-2 bg-gray-100 border border-gray-400 rounded-lg text-black"
      />
      <button onClick={handleAddTask}>ADD</button>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};
