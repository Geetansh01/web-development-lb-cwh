import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar.jsx";

import { CountContext } from "./Context/Context.js";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* M1 : passing only one variable i.e "count" in value [Use with M1 code in "Component1.jsx"] */}
      {/* <CountContext.Provider value={count}> */}

      {/* M2 : passing an object in value, this object has "count" and "setCount" as properties [Use with M2 code in "Component1.jsx"] */}
      {/* <CountContext.Provider value={{ "count": count, "setCount": setCount }}>  */}

      {/* Below line is Same as above but Using Object Literal Syntax */}
      <CountContext.Provider value={{count, setCount}}> 
      
        <Navbar />
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </CountContext.Provider>
    </>
  );
}

export default App;
