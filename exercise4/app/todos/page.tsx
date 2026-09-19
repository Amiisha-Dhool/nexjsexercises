import TodoForm from "./TodoForm";
import { getDatabase } from "../lib/mongodb";

export default async function TodosPage({
  searchParams,
}: {
  searchParams: Promise<{
    search?: string;
    status?: string;
  }>;
}) {
  const params = await searchParams;

  const search = params.search || "";
  const status = params.status || "all";

  const db = await getDatabase();

  const query: any = {};

  // Search
  if (search) {
    query.title = {
      $regex: search,
      $options: "i",
    };
  }

  // Filter
  if (status === "completed") {
    query.completed = true;
  }

  if (status === "incomplete") {
    query.completed = false;
  }

  const todos = await db
    .collection("todos")
    .find(query)
    .sort({
      priority: -1,
    })
    .toArray();

  return (
    <div>
      <h1>Todo App</h1>

      <TodoForm />

      <hr />

      {/* Search */}
      <form method="GET">
        <input
          name="search"
          placeholder="Search todos..."
          defaultValue={search}
        />

        <select
          name="status"
          defaultValue={status}
        >
          <option value="all">All</option>
          <option value="completed">
            Completed
          </option>
          <option value="incomplete">
            Incomplete
          </option>
        </select>

        <button type="submit">
          Search
        </button>
      </form>

      <hr />

      {/* Todo List */}
      {todos.map((todo) => (
        <div key={todo._id.toString()}>
          <h3>{todo.title}</h3>

          <p>
            Priority: {todo.priority}
          </p>

          <p>
            Status:{" "}
            {todo.completed
              ? "Completed"
              : "Incomplete"}
          </p>

          <p>
            Created:{" "}
            {todo.createdAt.toLocaleString()}
          </p>

          <p>
            Updated:{" "}
            {todo.updatedAt.toLocaleString()}
          </p>

          <hr />
        </div>
      ))}
    </div>
  );
}