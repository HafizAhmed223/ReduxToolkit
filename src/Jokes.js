import React, { useEffect, useState } from "react";
import { getJokes } from "./fetchjokes.js"; // Adjust the import path as needed

const JokesList = () => {
  const [jokes, setJokes] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const jokesData = await getJokes();
      setJokes(jokesData);
      setError(null); // Clear any previous errors
    } catch (error) {
      setError(error.message);
      console.log("error", error?.message);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mt-5 mb-5 text-white">
      <h1 className="text-[35px] text-center text-white font-bold bg-slate-900/50 mt-12 px-10 w-full">
        JOKES
      </h1>
      <button
        className="bg-blue-500 rounded-md h-10 w-[150px] hover:bg-blue-600 text-white font-semibold my-5"
        onClick={fetchData}
        disable={jokes !== ""}
      >
        Get Jokes
      </button>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      <ul className="flex flex-col items-center bg-slate-900/50 mt-[20px] max-w-[400px] text-[20px] font font-semibold my-5 w-full">
        {jokes.map((joke) => (
          <li key={joke.id}>
            <p className="py-2">{joke.joke}</p>
            <p>
              <strong>Reaction:</strong> {joke.reaction}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JokesList;
