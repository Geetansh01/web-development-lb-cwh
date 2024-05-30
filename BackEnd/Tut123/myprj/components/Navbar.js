import React from 'react'

import Link from 'next/link'

const Navbar = () => {
  return (
    <>
        <ul className='p-2 bg-pink-500 flex gap-3' >
            {/* Using "a" tag : Page reloads on click */}
            {/* <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact Us</a></li> */}

            {/* Using "Link" : Page does not reload on click */}
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
        </ul>
    </>
  )
}

export default Navbar