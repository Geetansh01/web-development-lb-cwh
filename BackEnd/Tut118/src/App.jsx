import { useCallback, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Navbar2 from "./Components/Navbar2";

function App() {
  const [count, setCount] = useState(0);

  // //M1 : Simple function
  // //"Navbar2()" would be re-rendered every time "App()" is re-rendered. Note that we have used "memo" with "Navbar2()"
  // //This is because whenever "App()" re-renders, the "getCount()" function is created again. Because a reference to the "getCount()" function is passed as a prop to "Navbar2()", when the function is created again, the reference changes, which means the prop changes and hence "Navbar2()" re-renders even though we have used "memo" with it.
  // //Advantage : Bcz "getCount()" is created again evrytime, it always has the latest value of "count"!
  // const getCount =() => {
  //   return count;
  // };

  //M2[A] : with useCallback hook. 
  //Note that bcz "getCount()" has been cached, it will not be created again when "App()" re-renders. So the reference to "getCount()" remains same and "Navbar2()" will NOT be re-rendered every time "App()" is re-rendered.
  // Disadvantage: Because "getCount()" is cached, it holds onto the initial "count" value (due to closures in JS, see Tut 75 + Tut76). So old value of "count" is displayed inside "Navbar2()"
  const getCount = useCallback(() => {
    return count;
  }, []);

  // //M2[B]
  // // To get the latest value, include "count" in the dependency array of useCallback. But this makes it equivalent to M1
  // // Here, "getCount()" is recreated whenever "count" changes, always having the latest "count" value
  // const getCount = useCallback(() => {
  //   return count;
  // }, [count]);

  return (
    <>
      {/* Ex1 : only variables as props */}
      <Navbar name={"A"} />

      {/* Ex2 : variables + functions as props */}
      <Navbar2 name={"B"} func={getCount} />

      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </>
  );
}

export default App;
