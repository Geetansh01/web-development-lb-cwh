import React from 'react'
import { memo } from 'react'

const Navbar = (props) => {
    console.log("Navbar rendered !")
  return (
    <div>
      I am Navbar. My Name is : {props.name}
    </div>
  )
}

export default memo(Navbar)
