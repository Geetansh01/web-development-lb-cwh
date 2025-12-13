import { queryOptions } from "@tanstack/react-query";

export default function getTodosQueryOptions() {
  return queryOptions({
    queryKey: ["todos"],
    queryFn: () => getTodos(),
  });

  /*
  Why use this weird "queryOptions()" and not just return a JS object? You can, it's just that wrapping it in "queryOptions()", you get access to intellisense, so things like "queryKey", "queryFn" would be suggested to you when you are typing.
*/
}

const getTodos = async () => {
  //Simulate query taking time
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  return await response.json();
};
