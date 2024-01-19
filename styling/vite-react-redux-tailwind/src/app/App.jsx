import { useState } from "react";
import { Counter } from "../components/Counter";
import { ToDoList } from "../components/ToDoList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-gray-100">
        <div className="container m-4">
          <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="p-6">
              <h5 className="text-blue-gray-900 mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal antialiased">
                Base counter with hook
              </h5>
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                count is {count}
              </p>
            </div>
            <div className="p-6 pt-0">
              <button
                className="select-none rounded-lg bg-blue-800 px-6 py-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                onClick={() => setCount((count) => count + 1)}
              >
                count up
              </button>
            </div>
          </div>
        </div>
        <div className="m-4 container">
          <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="p-6">
              <h5 className="text-blue-gray-900 mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal antialiased">
                React-redux counter:
              </h5>
              <Counter />
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                text text text
              </p>
            </div>
            <div className="p-6 pt-0">
              <button
                className="select-none rounded-lg bg-pink-500 px-6 py-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                Button
              </button>
            </div>
          </div>
        </div>
        <div className="container m-4">
          <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="p-6">
              <h5 className="text-blue-gray-900 mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal antialiased">
                React-redux ToDo List:
              </h5>
              <ToDoList />
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                text text text
              </p>
            </div>
            <div className="p-6 pt-0">
              <button
                className="select-none rounded-lg bg-pink-500 px-6 py-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                Button
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
