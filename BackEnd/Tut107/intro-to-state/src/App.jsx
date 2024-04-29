import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//M2 : with Hooks 
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>count is {count} </div>
      <button onClick={() => {setCount(count + 1)}}>Update Count</button>
    </>
  )
}

//M2 : withouot Hooks 
// //Below will not work bcz here "count" is just a plain JS variable. 
// //"count" 's value will be rendered once in the DOM and staty that way.
// //"count" will be incremented on the button's click but the change will not be rendered in the DOM. To get the change in the DOM, you need to use the concept of "state" in React!
// function App() {
//   let count = 100;

//   return (
//     <>
//       <div>count is {count} </div>
//       <button onClick={() => {count++}}>Update Count</button>
//     </>
//   )
// }

export default App
