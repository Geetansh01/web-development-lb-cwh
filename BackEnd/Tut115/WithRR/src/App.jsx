import React from "react";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import ContactUs from "./Components/ContactUs";
import Profile from "./Components/Profile";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar/>,
  },
  {
    path: "/login",
    element: <><Navbar/><Login/></>,
  },
  {
    path: "/ContactUs",
    element: <><Navbar/><ContactUs/></>,
  },
  {
    // To see this in action, try a route like "/profile/<Any-Name>"
    path: "/profile/:username",
    element: <><Navbar/><Profile/></>,
  }
]);

function App() {
  return <>
    <RouterProvider router={router} />
  </>;
}

export default App;
