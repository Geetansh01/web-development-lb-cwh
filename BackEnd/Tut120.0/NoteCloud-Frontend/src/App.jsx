import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Root from "./components/Root";
import ErrorPage from "./components/ErrorPage";
import "./App.css";
import NoteStateComponent from "./components/NoteStateComponent";
import Login from "./components/Login";
import LoginStateComponent from "./components/LoginStateComponent";

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
			{
				path: "login",
				element: <Login />,
			},
		],
	},
]);

function App() {
	return (
		<>
			<LoginStateComponent>
				<NoteStateComponent>
					<RouterProvider router={router} />
				</NoteStateComponent>
			</LoginStateComponent>
		</>
	);
}

export default App;
