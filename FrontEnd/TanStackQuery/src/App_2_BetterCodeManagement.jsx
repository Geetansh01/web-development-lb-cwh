import { useState } from "react";
import "./App.css";
import { useQuery } from "@tanstack/react-query";
import Loading from "./components/Loading";
import getTodosQueryOptions from "./queryOptions/todos_queryOptions";

function App() {
  // Mostly same as "FrontEnd/TanStackQuery/src/App_1_Intro.jsx" but moved queryOptions to a separate file for better readability + Reusability (you can reuse getTodosQueryOptions() in some other component too!)
  const { data, isPending, refetch } = useQuery(getTodosQueryOptions());

  return (
    <>
      <div>{isPending ? <Loading /> : JSON.stringify(data.slice(0, 10))}</div>
      <button onClick={refetch}> Refetch Data </button>
    </>
  );
}

export default App;
