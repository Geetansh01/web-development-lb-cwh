import { infiniteQueryOptions, queryOptions } from "@tanstack/react-query";

export default function getUserQueryOptions() {
  return queryOptions({
    queryKey: ["user"],
    queryFn: () => getUsers(),
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
