import React from "react";
import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Root from "./components/Root";
import ErrorPage from "./components/ErrorPage";
import "./App.css";
import NoteStateComponent from "./components/NoteStateComponent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <NoteStateComponent>
        <RouterProvider router={router} />
      </NoteStateComponent>
    </>
  );
}

export default App;
