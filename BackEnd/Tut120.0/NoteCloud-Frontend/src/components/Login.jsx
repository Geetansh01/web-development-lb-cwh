import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import { useOutletContext } from "react-router-dom";
import Alert from "./Alert";

const Login = () => {
	const [formInput, setformInput] = useState({ email: "", password: "" });
	const [networkCallInProgress, setNetworkCallInProgress] = useState(false);

	const { loginUser } = useContext(AuthContext);
	const [showAlert] = useOutletContext();

	const navigate = useNavigate();

	function handleInput(event) {
		setformInput({ ...formInput, [event.target.name]: event.target.value });
	}

	async function handleSubmit(event) {
		event.preventDefault();
		setNetworkCallInProgress(true);
		let response = await loginUser(formInput.email, formInput.password);
		if (response.success) {
			// console.log("Gd");
			navigate("/home");
			showAlert("green", "Login Successful")
		}
		else {
			showAlert("red", "Failed to login!")
		}
		setNetworkCallInProgress(false);
	}

	const ShowNetworkCallAlert = () => {
		return (
			<>
				{networkCallInProgress &&
					<Alert
						alertConfig={{
							color: "blue",
							msg: "⌛⌛ Logging you in.... Backend hosted on a free plan, so initial requests may take time due to idle spin-up. Learn more ",
							displaySomeLink: true,
							linkURL: "https://docs.render.com/free#spinning-down-on-idle"
						}}
					/>}
			</>
		);
	};

	return (
		<div className="container-lg h-100 bg-info-subtle rounded p-5">
			<ShowNetworkCallAlert />
			<h1>Login</h1>
			<form>
				<div className="mb-3">
					<label htmlFor="email" className="form-label">
						Email
					</label>
					<input
						type="email"
						className="form-control"
						id="email"
						name="email"
						value={formInput.email}
						onChange={handleInput}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="password" className="form-label">
						Password
					</label>
					<input
						type="password"
						className="form-control"
						id="password"
						name="password"
						value={formInput.password}
						onChange={handleInput}
					/>
				</div>
				<button
					type="submit"
					className="btn btn-success"
					onClick={handleSubmit}
				>
					Login
				</button>
			</form>
		</div>
	);
};

export default Login;
