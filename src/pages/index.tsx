import { TasksList } from "components/TasksList";

export default function Home() {
  return (
    <>
      <main className="container min-h-screen grid pt-48 md:pt-0 md:place-items-center">
        <TasksList/>        
      </main>
    </>
  );
}
