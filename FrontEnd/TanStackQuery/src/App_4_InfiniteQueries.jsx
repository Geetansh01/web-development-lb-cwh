import { useState } from "react";
import "./App.css";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getUserInfiniteQueryOptions } from "./queryOptions/user_queryOptions";

// This file will NOT run and is for demo of syntax only as I don't have a backend that supports pagination!
function App() {
    const { data, hasNextPage, isFetchingNextPage, fetchNextPage } = useInfiniteQuery(getUserInfiniteQueryOptions())

    // To get the users out of "data" (This "data"'s structure is specific to useInfiniteQuery and is different from useQuery's "data")
    const users = data?.pages.flatMap((page) => page.users); //Again, depends on how your backend sends the data

    /*
        What the above Line is trying to demonstrate:
        say data = {
            pages: [
                { users: [user1, user2] }, // page 1
                { users: [user3, user4] }, // page 2
                ...
            ]
        }
        So to get all users from all pages in a single array we do data.pages.flatMap(...). Now, 
            users = [user1, user2, user3, user4, ...]
    */

  return (
    <>
      <div>Pagination in TanStackQuery</div>
      <button onClick={() => fetchNextPage()} disabled={!hasNextPage || isFetchingNextPage}>
        {isFetchingNextPage ? "Loading..." : hasNextPage ? "Load More" : "No More Users"}
      </button>
    </>
  );
}

export default App;
