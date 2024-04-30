import React from 'react'
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [showBtn, setShowBtn] = useState(false);

  return (
    <>
      <div style={{ height: "100px" }}>
        {/* CONDITIONAL RENDERING : */}

        {/* Conditional Rendering Syntax 1 */}
        {/* {showBtn ? <button>"showBtn" is {`${showBtn}`}</button> : null} */}

        {/* Conditional Rendering Syntax 2 */}
        {showBtn && <button>"showBtn" is {`${showBtn}`}</button>}

      </div>

      <button onClick={() => { setShowBtn(!showBtn) }} >Toggle "showBtn" state</button>

      {/* <div>count is {count} </div>
      <button onClick={() => { setCount(count + 1) }}>Update Count</button> */}
    </>
  )
}

export default App
