import React, { useState, useRef } from "react";
import AuthContext from "../contexts/AuthContext";

const LoginStateComponent = ({ children }) => {
	const [authToken, setauthToken] = useState("no auth token"); //Get auth token from the server
	//"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJJRCI6IjY2OGY5NTBjMWI1MWRhODk4NWIxNGIyOCJ9LCJpYXQiOjE3MjA2ODU4NjJ9.xZ0EAh_nP6nFQohdwfAnxaxRWvNuv_bW21shbBi1AlU"

	const rootUrl = import.meta.env.VITE_ROOT_URL;

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
			setauthToken(json.authToken);
		} catch (error) {
			console.error(error.message);
		}
	};

	return (
		<AuthContext.Provider value={{ loginUser, authToken: authToken }}>
			{children}
		</AuthContext.Provider>
	);
};

export default LoginStateComponent;
