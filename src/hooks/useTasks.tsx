import React from "react";
import { atom, useRecoilState } from "recoil";
import { ITask } from "types";
import { generateTask } from "utils/tasks.utils";

const tasksState = atom({
  key: "tasksState",
  default: [],
});

export const useTasks = () => {
  const [tasks, setTasks] = useRecoilState(tasksState);

  const addTask = (title: string) => {
    const task = generateTask({ title });
    setTasks([...tasks, task]);
  };

  const removeTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTasks = (id: string) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          task.completed = !task.completed;
        }
        return task;
      })
    );
  }


  return {
    tasks,
    addTask,
    removeTask,
    toggleTasks,
  };
};
