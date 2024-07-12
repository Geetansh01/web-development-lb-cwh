import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Profile from "./Components/Profile";
import { Link, NavLink } from "react-router-dom";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Using "Link" */}
      {/* <nav>
        <ul className="Navbar">
          <li>NAVBAR</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/profile/Geetansh Bhardwaj">Profile</Link>
          </li>
        </ul>
      </nav> */}

      {/* Using "NavLink" */}
      <nav>
        <ul className="Navbar">
          <li>NAVBAR</li>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/profile/Geetansh Bhardwaj">Profile</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<div> Home Page </div>} />
        <Route path="/about" element={<div> About Page </div>} />
        <Route path="/login" element={<div> Login Page </div>} />
        <Route path="/profile/:user" element={<Profile />} />
        <Route path="*" element={<div>404 Page Not Found 😐</div>} />{" "}
        {/* Agr upr kisi path se match nhi hua to isse match hoga. */}
      </Routes>
    </>
  );
}

export default App;
