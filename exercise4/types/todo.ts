export type Priority = "low" | "medium" | "high";

export type Todo = {
  _id: string;
  title: string;
  completed: boolean;
  priority: Priority;
  createdAt: Date;
  updatedAt: Date;
};