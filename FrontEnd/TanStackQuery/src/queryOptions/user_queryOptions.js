import { queryOptions } from "@tanstack/react-query";

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
