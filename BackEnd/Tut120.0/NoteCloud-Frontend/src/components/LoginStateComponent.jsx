import React, { useState, useEffect } from "react";
import AuthContext from "../contexts/AuthContext";

const LoginStateComponent = ({ children }) => {
	const [authToken, setauthToken] = useState("no auth token"); //Get auth token from the server
	//"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJJRCI6IjY2OGY5NTBjMWI1MWRhODk4NWIxNGIyOCJ9LCJpYXQiOjE3MjA2ODU4NjJ9.xZ0EAh_nP6nFQohdwfAnxaxRWvNuv_bW21shbBi1AlU"

	useEffect(() => {
		if (localStorage.authToken) {
			setauthToken(localStorage.authToken);
		}
	}, []);

	const rootUrl = import.meta.env.VITE_ROOT_URL;

	// Sign Up User
	const signupUser = async (name, email, password) => {
		//API Call
		const url = `${rootUrl}/api/auth/createuser`;
		try {
			console.log("Api call");
			const response = await fetch(url, {
				method: "POST",
				headers: {
					"content-type": "application/json",
				},
				body: JSON.stringify({
					name: name,
					email: email,
					password: password,
				}),
			});

			if (!response.ok) {
				throw new Error(`Response status: ${response.status}`);
			}

			const json = await response.json();
			console.log(response);
			return { success: true, reason: "SignUp Successful!" };
		} catch (error) {
			console.error(error.message);
			return { success: false, reason: "Failed to signUp!" };
		}
	};

	// Login User
	const loginUser = async (email, password) => {
		//API Call
		const url = `${rootUrl}/api/auth/login`;
		try {
			console.log("Api call");
			const response = await fetch(url, {
				method: "POST",
				headers: {
					"content-type": "application/json",
				},
				body: JSON.stringify({
					email: email,
					password: password,
				}),
			});

			if (!response.ok) {
				throw new Error(`Response status: ${response.status}`);
			}

			const json = await response.json();
			localStorage.setItem("authToken", json.authToken);
			setauthToken(json.authToken);
			return { success: true, reason: "auth token obtained" };
		} catch (error) {
			console.error(error.message);
			return { success: false, reason: "auth token not obtained" };
		}
	};

	return (
		<AuthContext.Provider value={{ loginUser, authToken: authToken, setauthToken, signupUser }}>
			{children}
		</AuthContext.Provider>
	);
};

export default LoginStateComponent;
