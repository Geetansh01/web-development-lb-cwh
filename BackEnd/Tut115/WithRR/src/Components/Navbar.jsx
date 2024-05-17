import React from "react";
import "./Navbar.css"

// //M1 : Using "Link"
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <div>
//       I am Navbar
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/login">Login</Link>
//         </li>
//         <li>
//           <Link to="/ContactUs">Contact Us</Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

//M2 : Using "NavLink". Yaha pe additional functionality hai ki jo current link active hoga usko style kr skte hai (Like i am making the background color as red)
import { NavLink } from "react-router-dom";

const Navbar = () => {

  function styleIt(element) {
    return (element.isActive ? "red" : "")
  }

  return (
    <div>
      I am Navbar
      <ul>
        <li>
          {/* I am passing a reference of the function "styleIt()". Now chatGPT says NavLink will automatically pass relevent arguments to "styleIt()" to determine if the current element is the active link! */}
          {/* Below i have done the same thing but using Arrow Functions */}
          <NavLink className={styleIt} to="/">Home</NavLink>
        </li>
        <li>
          <NavLink className={(element) => {return (element.isActive ? "red" : "")}} to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink className={(element) => {return (element.isActive ? "red" : "")}} to="/ContactUs">Contact Us</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
