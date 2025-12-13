import { useState } from "react";
import "./App.css";
import { useQuery } from "@tanstack/react-query";
import Loading from "./components/Loading";

function App() {
  const [id, setId] = useState(1);
  const { data, isPending, refetch } = useQuery({
    queryKey: ["todos", id],
    queryFn: () => getTodos(id),
  });

  return (
    <>
      <div>{isPending ? <Loading /> : JSON.stringify(data.slice(0, 10))}</div>
      <button onClick={refetch}> Refetch Data </button>
      <button onClick={() => setId(id + 1)}> Increment Id </button>
    </>
  );
}

const getTodos = async (id) => {
  //Simulate query taking time
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${id}`
  );
  return await response.json();
};

export default App;
