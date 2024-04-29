import React from "react";
import "./navbar.css";

//M1
// const Navbar = ({logoText}) => {
//     return (
//         <nav className="navbar">
//             <span>{logoText}</span>
//             I am Navbar
//         </nav>
//     )
// }

//M2 : using "props" object
const Navbar = (props) => {
    return (
        <nav className="navbar">
            <p>{props.logoText}</p>
            <p>##I am Navbar##</p>
        </nav>
    )
}

export default Navbar;



