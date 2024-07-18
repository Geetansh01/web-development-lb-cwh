import React, { useState, useContext } from "react";
import AuthContext from "../contexts/AuthContext";

const Login = () => {
	const [formInput, setformInput] = useState({ email: "", password: "" });

    const { loginUser } = useContext(AuthContext);

    function handleInput(event){
        setformInput({...formInput, [event.target.name] : event.target.value});
    }

    function handleSubmit(event) {
        event.preventDefault();
        loginUser(formInput.email, formInput.password);
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
