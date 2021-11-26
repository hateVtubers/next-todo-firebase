import type { NextPage } from "next";
import type { ContextTask } from "../interfaces/ContextTask";
import { useContext, useEffect } from "react";
import { useLogin } from "../auth/useLogin";
import { Form } from "../components/Form";
import { Card } from "../components/Card";
import { TaskItems } from "../components/TaskItems";
import { TaskContext } from "../context/taskContext";
import { Loading } from "../components/Loading";
import { SwitchTheme } from "../components/SwitchTheme";

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
    <div className="dark:bg-blue-zodiac-600 bg-bright-turquoise-600  min-h-screen grid place-items-center transition-colors">
      <SwitchTheme />
      <header className="absolute top-5 right-5">
        <Card user={userData} />
      </header>
      <div className="container flex items-center justify-center gap-5 flex-col lg:flex-row">
        <aside className="dark:bg-blue-zodiac-400 bg-bright-turquoise-400 p-3 w-64 rounded-sm transition-colors">
          <Form />
        </aside>
        <main className="dark:bg-blue-zodiac-500 bg-bright-turquoise-500 lg:w-96 w-11/12 rounded p-3 transition-colors">
          <h1 className="dark:text-bright-turquoise-500 text-blue-zodiac-500 text-xl text-center transition-colors">
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
