import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

const Login = () => {
	const [formInput, setformInput] = useState({ email: "", password: "" });

	const { loginUser } = useContext(AuthContext);

	const navigate = useNavigate();

	function handleInput(event) {
		setformInput({ ...formInput, [event.target.name]: event.target.value });
	}

	async function handleSubmit(event) {
		event.preventDefault();
		let response = await loginUser(formInput.email, formInput.password);
		if (response.success) {
			console.log("Gd");
			navigate("/home");
		}
	}

	return (
		<div className="container-lg h-100 bg-info-subtle rounded p-5">
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
