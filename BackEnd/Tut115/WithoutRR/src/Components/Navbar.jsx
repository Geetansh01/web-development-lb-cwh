import React from 'react'

const Navbar = () => {
  return (
    <div>
      I am Navbar
      <div>
        <a href="/">Home</a>
      </div>
      <div>
        {/* "./login.html is relative path" */}
        <a href="./login">Login</a> 
      </div>
      <div>
        {/* "/ContactUs.html is absolute path to root of server" */}
        <a href="/ContactUs.html">Contact Us</a>
      </div>
    </div>
  )
}

export default Navbar
