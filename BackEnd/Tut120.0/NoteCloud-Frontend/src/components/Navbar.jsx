import React from "react";
import { Link, useLocation, NavLink } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";

const Navbar = () => {
	let locationObj = useLocation();
	let currPath = locationObj.pathname;
	// console.log(locationObj.pathname);

	const { authToken, setauthToken } = useContext(AuthContext);

	const handleLogout = () => {
		localStorage.removeItem("authToken");
		setauthToken("no auth token");
	}

	return (
		<nav data-bs-theme="dark" className="navbar navbar-expand-lg bg-black ">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/home">
					NoteCloud
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link
								className={`nav-link ${currPath === "/about" ? "active" : ""}`}
								aria-current="page"
								to="/about"
							>
								About
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className={`nav-link ${currPath === "/home" ? "active" : ""}`}
								to="/home"
							>
								Home
							</Link>
						</li>

						{/* Show logout button if user already logged in! */}
						{authToken == "no auth token" ?
							<>
								<li>
									<Link
										className={`nav-link ${currPath === "/login" ? "active" : ""}`}
										to="/login"
									>
										Login
									</Link>
								</li>
								<li>
									<Link
										className={`nav-link ${currPath === "/signup" ? "active" : ""}`}
										to="/signup"
									>
										Signup
									</Link>
								</li>
							</>
							:
							<li>
								<button
									className="btn btn-dark"
									onClick={handleLogout}
								>
									Logout
								</button>
							</li>
						}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
