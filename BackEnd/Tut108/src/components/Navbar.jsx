import React from 'react'
import { useEffect } from 'react'
import "./Navbar.css"

const Navbar = () => {

    //Example of cleanup function
    useEffect(() => {
        
        return ( 
            // Below is the cleanup function (in the form of an arrow function)
            () => {
                alert("Navbar unmounted (removed) from DOM")
            }
        )

    }, [])


    return (
        <nav>
            I am Navbar
        </nav>
    )
}

export default Navbar

