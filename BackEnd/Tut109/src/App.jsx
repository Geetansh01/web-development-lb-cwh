import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//Problem : Whenever "count" is updated, the entire component i.e App(), is re-rendered. So, upon each rerendering, the variable "a" is set to 0. So the value of "a" does not persist b/w renderings.

//Solution : To solve this problem, we use "useRef()" hook.

function App() {
  const [count, setCount] = useState(0)
  let a = 0;
  //Use 1 of "useRef()" : persisting the value of "a" b/w renderings
  const b = useRef(0);

  useEffect(() => {
    a = a + 1;
    b.current = b.current + 1;
    console.log(`Value of "a" : ${a}`);
    console.log(`Value of "b" : ${b.current}`);
  })

  //Use 2 of "useRef()" : reference DOM elements & modify them w/o doing any actual DOM manipulation the old way (like we did in pure JS : document.getElementById("...") etc...)
  const btnRef = useRef(); //references the <button> below
  useEffect(() => {
    btnRef.current.style.backgroundColor = "red";
    console.log("Button made red")
  }, [])


  return (
    <>
      <div>count is {count} </div>
      <button ref={btnRef} onClick={() => { setCount(count + 1) }}>Update Count</button>
    </>
  )
}

export default App
