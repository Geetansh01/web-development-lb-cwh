import React from 'react'
import { memo } from 'react'

const Navbar2 = (props) => {
    console.log("Navbar2 rendered !")

  return (
    <div style={{border: '2px solid red', padding: '10px'}}>
      I am Navbar2. My Name is : {props.name}. 
      Value of count is : {props.func()}
    </div>
  )
}

export default memo(Navbar2)
