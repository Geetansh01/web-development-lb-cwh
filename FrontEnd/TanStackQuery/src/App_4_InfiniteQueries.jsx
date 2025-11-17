import { useState } from "react";
import "./App.css";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getUserInfiniteQueryOptions } from "./queryOptions/user_queryOptions";

function App() {
    const { data } = useInfiniteQuery(getUserInfiniteQueryOptions())

  return (
    <>
      <div>Pagination in TanStackQuery</div>
    </>
  );
}

export default App;
