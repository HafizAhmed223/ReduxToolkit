import React from "react";
import { useAppSelector } from "./hooks/index.ts";

const MyComponent = () => {
  const count = useAppSelector((state) => state.counter);
  return (
    <div className="text-[30px] text-center text-white bg-slate-900/50 font-bold mt-20 ">
      Total count in My Component : {count}
    </div>
  );
};

export default MyComponent;
