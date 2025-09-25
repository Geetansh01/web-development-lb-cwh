import { useState } from "react";
import "./App.css";
import { useQueries, useQuery } from "@tanstack/react-query";
import Loading from "./components/Loading";
import getTodosQueryOptions from "./queryOptions/todos_queryOptions";
import getUserQueryOptions from "./queryOptions/user_queryOptions";

function App() {
  // Multiple Queries case 1: When you have multiple queries in your app that run independently of each other. Instead of calling each one separately (with multiple useQuery() hooks), you can use, "useQueries()" hook:
  // const [{ data, isPending }, query2] = useQueries({
  //   queries: [
  //     getTodosQueryOptions(), // "data" returned from this query would go in "data"
  //     getUserQueryOptions(), // "data" returned from this query would go in "query2.data"
  //   ],
  // });

  // Multiple Queries case 2: When you have multiple queries in your app that must run in a specific sequence because the results of 1st query are used in the second query:
  const query1 = useQuery(getUserQueryOptions());
  const query2 = useQuery({
    ...getTodosQueryOptions(),
    enabled: !!query1.data, //If "query1" has not got a data yet, "query2" will not run
  });

  return (
    <>

      {/* To be uncommented with Case 1 above */}
      {/* <div>
        {isPending ? <Loading /> : JSON.stringify(data.slice(0, 10))}
      </div>
      <br />
      <div>
        {query2.isPending ? <Loading /> : JSON.stringify(query2.data.slice(0, 3))}
      </div> */}

      {/* To be uncommented with Case 2 above */}
      <div>
        {query1.isPending ? <Loading /> : JSON.stringify(query1.data.slice(0, 3))}
      </div>
      <br />
      <div>
        {query2.isPending ? `Query1 has not got it's data yet! I will run after query1 gets its data.` : JSON.stringify(query2.data.slice(0, 10))}
      </div>
    </>
  );
}

export default App;
