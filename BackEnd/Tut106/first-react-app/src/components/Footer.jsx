import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    // How to add inline CSS here:
    //   1)use style = {{CSS here}} 
    //   2)1st set of {} means you are writing JS. 
    //   3)2nd set of {} means you are making a JS object that contains the CSS 
    
    <footer style={{backgroundColor: 'brown'}}>
        Made with ❤️ by Geetansh
    </footer>
  )
}

export default Footer
