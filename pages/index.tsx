import type { NextPage } from "next";
import type { ContextTask } from "../interfaces/ContextTask";
import { useContext, useEffect } from "react";
import { useLogin } from "../auth/useLogin";
import { Form } from "../components/Form";
import { Card } from "../components/Card";
import { TaskItems } from "../components/TaskItems";
import { TaskContext } from "../context/taskContext";
import { Loading } from "../components/Loading";

const Home: NextPage = () => {
  const { redirect, getUserData, userData } = useLogin();
  const {
    state: { tasks },
  } = useContext(TaskContext) as ContextTask;
  useEffect(() => {
    redirect();
    getUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="bg-blue-zodiac-600 min-h-screen grid place-items-center">
      <header className="absolute top-5 right-5">
        <Card user={userData} />
      </header>
      <div className="container flex items-center justify-center gap-5">
        <aside className="bg-blue-zodiac-400 p-3 w-64 rounded-sm">
          <Form />
        </aside>
        <main className="bg-blue-zodiac-500 w-96 rounded p-3">
          <h1 className="text-bright-turquoise-500 text-xl text-center">
            Tasks
          </h1>
          <div className="overflow-hidden grid gap-1.5">
            {tasks.length ? (
              tasks.map((task) => <TaskItems taskText={task} taskId={task} key={task.id} />)
            ) : (
              <Loading />
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
