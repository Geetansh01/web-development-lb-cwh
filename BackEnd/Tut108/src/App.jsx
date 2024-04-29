import React from 'react'
import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0);

    //Case 1 : Runs only on 1st render of the component (i.e App() here)
    useEffect(() => {
      alert("1st time App() render hua hai! 🥇")
    }, [])

    //Case 2 : Runs on every Render
    useEffect(() => {
      alert("App() render hua hai !")
    })

    //Case 3 : Runs on change of something (like a state). This will fire when state "count" is changed
    useEffect(() => {
      alert("count change hua hai")
    }, [count])
 
  return (
    <>
      <Navbar/>

      {/* Note : when the state "count" changes, the entire App() component will re-render */}
      <div>count is {count} </div>
      <button onClick={() => {setCount(count + 1)}}>Update Count</button>
    </>
  )
}

export default App
