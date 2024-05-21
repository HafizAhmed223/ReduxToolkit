import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/index.ts";
import {
  increment,
  decrement,
  reset,
  addByAmount,
} from "./features/counter/counterSlice.js";
import MyComponent from "./MyComponent.js";
import JokesList from "./Jokes.js";

const App = () => {
  const count = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  const [number, setNumber] = useState(0);

  return (
    <div className="App bg-slate-950 text-white">
      <h1 className="text-[40px] text-center bg-slate-900/50 font-bold">
        Redux Toolkit
      </h1>
      <p className="text-[35px] text-center text-white font-bold bg-slate-900/50 mt-12">
        COUNTER APP
      </p>
      <div className="flex justify-center items-center gap-8 mt-10">
        <button
          className="bg-green-500 rounded-md h-10 w-[150px] hover:bg-green-600 text-white font-semibold"
          onClick={() => dispatch(increment())}
        >
          INCREMENT
        </button>
        <button
          className="bg-blue-500 rounded-md h-10 w-[150px] hover:bg-blue-600 text-white font-semibold"
          onClick={() => dispatch(decrement())}
        >
          DECREMENT
        </button>
        <button
          className="bg-blue-500 rounded-md h-10 w-[150px] hover:bg-blue-600 text-white font-semibold"
          onClick={() => dispatch(reset())}
        >
          RESET
        </button>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(Number(e.target.value))}
          className="bg-gray-200 rounded-md h-10 w-[150px] text-center text-black"
        />
        <button
          className="bg-purple-500 rounded-md h-10 w-[150px] hover:bg-purple-600 text-white font-semibold"
          onClick={() => dispatch(addByAmount(number))}
        >
          ADD NUMBER
        </button>
      </div>
      <p className="text-[30px] text-center text-white font-bold bg-slate-900/50 mt-20">
        Total Count in App Component : {count}
      </p>
      <MyComponent />
      <JokesList />
    </div>
  );
};

export default App;
