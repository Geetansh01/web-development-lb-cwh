"use client"
import React from 'react'
import { useState } from 'react'

const Navbar = () => {
    const [count, setcount] = useState(0)
  return (
    <>
        I am Navbar.
        Count is {count}
        <button className='m-3 p-3 border-2 border-red-700' onClick={() => {setcount(count + 1)}} >Click me!</button>
    </>
  )
}

export default Navbar   