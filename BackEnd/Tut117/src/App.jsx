import { useState, useMemo } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  // let expensiveCalcResult = 1 + 1; //Assume it's a very Expensive Calculation !!
  let expensiveCalcResult = useMemo(() => (1 + 1), [])

  return (
    <>  
        <div>Expensive Calculation Result is : {expensiveCalcResult} </div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
    </>
  )
}

export default App
