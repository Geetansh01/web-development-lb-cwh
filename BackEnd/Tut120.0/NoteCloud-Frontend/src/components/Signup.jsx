import React, { useState, useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { useOutletContext } from "react-router-dom";
import Alert from "./Alert";

const Signup = () => {
    const [formInput, setformInput] = useState({ name: "", email: "", password: "" });
    const [networkCallInProgress, setNetworkCallInProgress] = useState(false);

    const { signupUser } = useContext(AuthContext);
    const [showAlert] = useOutletContext();

    function handleInput(event) {
        setformInput({ ...formInput, [event.target.name]: event.target.value });
    }

    async function handleSubmit(event) {
        event.preventDefault();
        setNetworkCallInProgress(true);
        let response = await signupUser(formInput.name, formInput.email, formInput.password);
        if (response.success) {
			// console.log("Gd");
            showAlert("green", "SignUp Successful! Now Login")
		}
		else{
			showAlert("red", "Failed to signUp!")
		}
        setNetworkCallInProgress(false);
    }

    const ShowNetworkCallAlert = () => {
		return (
			<>
				{networkCallInProgress &&
					<Alert
						alertConfig={{
							color: "yellow",
							msg: "⌛⌛ Signing you up.... Backend hosted on a free plan, so initial requests may take time due to idle spin-up. Learn more ",
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
            <h1>Sign Up</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        What would you like us to call you?
                    </label>
                    <input
                        type="name"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formInput.name}
                        onChange={handleInput}
                    />
                </div>
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
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default Signup;
