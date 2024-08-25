import React, { useState } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Alert from "./Alert";

const Root = () => {

	const [alertConfig, setAlertConfig] = useState({ color: "default", msg: "" });

	const showAlert = (alertColor, message) => {
		setAlertConfig({ color: alertColor, msg: message });
		setTimeout(() => {
			setAlertConfig({ color: "default", msg: "" });
		}, 2500);
	};

	return (
		<>
			<Navbar />
			<h6 className="text-center">Because this is a proof of concept website, all user Accounts & notes will be removed from the Database at 12:00 AM IST daily. Thank You!</h6>
			<Alert alertConfig={alertConfig} />
			{/* all the children elements in the nedted routes */}
			<div>
				<Outlet context={[showAlert]}/>
			</div>
		</>
	);
};

export default Root;
