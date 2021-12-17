import { TasksList } from "components/TasksList";

export default function Home() {
  return (
    <div className="bg-gray-900 py-12 px-4 text-white min-h-screen">
      <main className="container">
        <TasksList />
      </main>
    </div>
  );
}
