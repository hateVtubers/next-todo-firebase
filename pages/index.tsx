import type { NextPage } from "next";
import { useEffect } from "react";
import { useLogin } from "../auth/useLogin";
import { Form } from "../components/Form";
import { Th } from "../components/Th";
import { Card } from "../components/Card";

const Home: NextPage = () => {
  const { redirect, getUserData, userData } = useLogin();
  const tableTitles: { title: string; date: string } = {
    title:
      "w-72 bg-bright-turquoise-500 text-blue-zodiac-500 text-sm uppercase border-r border-blue-zodiac-500",
    date: "w-20 text-center bg-bright-turquoise-500 text-blue-zodiac-500 text-sm uppercase border-l border-blue-zodiac-500",
  };
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
      <div className="container grid grid-cols-2 place-items-center grid-flow-col">
        <aside className="bg-blue-zodiac-400 p-3 w-64 rounded-sm">
          <Form />
        </aside>
        <main className="bg-blue-zodiac-500 w-96 rounded p-3">
          <h1 className="text-bright-turquoise-500 text-xl text-center">
            Tasks
          </h1>
          <table className="overflow-hidden rounded-sm">
            <thead>
              <tr>
                {Object.entries(tableTitles).map(([title, className]) => (
                  <Th className={className} key={title}>
                    {title}
                  </Th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>a</td>
                <td>w</td>
              </tr>
            </tbody>
          </table>
        </main>
      </div>
    </div>
  );
};

export default Home;
