import { v4 as uuidv4 } from "uuid";
import { ITask } from "types";

interface ITaskOptions {
  title: string;
  description?: string;
}

export const generateTask = (
  options: ITaskOptions
): ITask => {
  return {
    id: uuidv4(),
    title: options.title,
    description: options.description ?? "",
    completed: false,
  };
};
