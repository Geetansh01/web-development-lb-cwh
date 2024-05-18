import React from "react";
import { useContext } from "react";
import { CountContext } from "../Context/Context";

const Component1 = () => {
//   //M1 : passing only one variable i.e "count" in value [Use with M1 code in "App.jsx"]
//   const count = useContext(CountContext);
//   return (
//     <div style={{ border: "2px solid red", padding: "10px" }}>
//       <div>I am Component1. count is : {count}</div>
//     </div>
//   );

  //M2 : passing an object in value, this object has "count" and "setCount" as properties [Use with M2 code in "App.jsx"]
  const obj = useContext(CountContext);
  return (
    <div style={{ border: "2px solid red", padding: "10px" }}>
      <div>I am Component1. count is : {obj.count}</div>
      <button
        onClick={() => {
          obj.setCount(obj.count + 1);
        }}
      >
        Update Count from inside Component1
      </button>
    </div>
  );

};

export default Component1;
