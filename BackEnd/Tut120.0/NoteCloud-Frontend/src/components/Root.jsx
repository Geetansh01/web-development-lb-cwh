import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Alert from "./Alert";

const Root = () => {
	return (
		<>
			<Navbar />
			<Alert message={"Aler!"} />
			{/* all the children elements in the nedted routes */}
			<div>
				<Outlet />
			</div>
		</>
	);
};

export default Root;
