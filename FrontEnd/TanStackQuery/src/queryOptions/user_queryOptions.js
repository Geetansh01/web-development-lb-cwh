import { infiniteQueryOptions, queryOptions } from "@tanstack/react-query";

export default function getUserQueryOptions() {
  return queryOptions({
    queryKey: ["user"],
    queryFn: () => getUsers(),

    // We have more options that we can use with useQuery hook

    // 1) select: when we don't want the entire thing that "queryFn()" returns but only a subset of it. Now, query's "data" will have only that subset. ( See "src/App_3_MultipleQueries.jsx", here, "query1.data" will have only the fields returned by this "select" function )
    select: (data) => {
      // return data.<fields-you-want-to-return>;
    },

    // 2)
    refetchInterval: 10000, // Refetch the data every 10 seconds (10000 milliseconds). Useful for data that changes frequently like stock prices.

    // 3)
    refetchOnWindowFocus: false, // By default, TanStack Query refetches the data when the window regains focus. Setting this to false disables that behavior.

    // Note: staleTime VS refetchOnWindowFocus: staleTime will take precedence over refetchOnWindowFocus. If data is fresh (within staleTime), it will not refetch on window focus even if refetchOnWindowFocus is true. If you want "refetchOnWindowFocus" to take precedence, set: refetchOnWindowFocus: 'always'

    // 4) 
    // placeholderData: [], // While the query is loading for the first time, "data" will have this placeholder data. Once the data is fetched, "data" will have the actual data. Useful for avoiding "undefined" states in your UI.

    // 5)
    // initialData: [], // Similar to placeholderData but different in one key aspect: It is actually cached in the TanStack Query cache. So, if you have staleTime set to say 5s, and you navigate away from the component and come back within 5s, the initialData is still fresh in the cache and won't trigger a refetch. With placeholderData, it is not cached, so navigating away and back will cause a refetch every time.

  });

  /*
  Why use this weird "queryOptions()" and not just return a JS object? You can, it's just that wrapping it in "queryOptions()", you get access to intellisense, so things like "queryKey", "queryFn" would be suggested to you when you are typing.
*/
}

const getUsers = async () => {
  //Simulate query taking time
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  return await response.json();
};

// Below function just for demonstration, I don't actually have a backend that supports pagination!
export function getUserInfiniteQueryOptions(){
  return infiniteQueryOptions({
    queryKey: ["users"],
    queryFn: ({pageParam}) => getUsers_Unimplemented({page: pageParam, limit: 1}), // ChatGPT: TanStack defines the types of "queryFn" in some "d.ts" file, that is where "pageParam" comes from. You can choose to ignore it (as in getUserQueryOptions() above) or, as in case of pagination, use them! 
    // On the 1st fetch: pageParam = initialPageParam
    // After 1st fetch: TanStack Query uses getNextPageParam() to update "pageParam"

    initialPageParam: 1, // What number page do you want to start at?

    // This function will get the next page number
    getNextPageParam: (currentPage) => {
      // Depending on how your backend implements pagination and what data it sends, get the "currentPage"
      return currentPage + 1;
    }
  })
}

function getUsers_Unimplemented(){
  // Implementation dependes on a backend that supports Pagination. I don't have such a backend
}
