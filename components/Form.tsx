import { FormEvent } from "react";

export const Form = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    // @ts-ignore
    console.log(event.target[1].value as string[]);
  };
  const inputClass =
    "outline-none rounded bg-bright-turquoise-500 w-11/12 px-2 py-1 text-sm text-blue-zodiac-400 placeholder-blue-zodiac-400";
  return (
    <form className="flex items-center flex-col gap-3" onSubmit={handleSubmit}>
      <h2 className="uppercase text-bright-turquoise-500 text-lg">add task</h2>
      <input className={inputClass} placeholder="Task title" required />
      <textarea cols={30} rows={5} className={inputClass} placeholder="Task body" required />
      <button className="bg-bright-turquoise-500 text-blue-zodiac-400 px-7 py-1 rounded">Add</button>
    </form>
  );
};
