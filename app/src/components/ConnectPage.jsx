import "./css/ConnectPage.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ConnectPage() {
	
	// States

	const [userName, setUserName] = useState("");

	const navigate = useNavigate();

	let signup = document.querySelector(".signup");
	let login = document.querySelector(".signin");
	let loginBtn = document.querySelector(".loginBtn");
	let registerBtn = document.querySelector(".registerBtn");
	let slider = document.querySelector(".slider");
	let formSection = document.querySelector(".formBox");
	
	// Behavior
	
	const handleSubmit = (event) => {
		event.preventDefault();
		navigate(`/homePage/${userName}`);
	};
	
	const handleChange = (event) => {
		setUserName(event.target.value);
	};

	// const handleSlider = (bool) => {
	// 	if (bool) {
	// 		slider.classList.add("moveSlider");
	// 		formSection.classList.add("moveFormBox");
	// 	}
	// 	else {
	// 		slider.classList.remove("moveSlider");
	// 		formSection.classList.remove("moveFormBox");
	// 	}
	// };

	// signup.addEventListener("click", () => {
	// 	slider.classList.add("moveSlider");
	// 	formSection.classList.add("moveFormBox");
	// });
	
	// login.addEventListener("click", () => {
	// 	slider.classList.remove("moveSlider");
	// 	formSection.classList.remove("moveFormBox");
	// });

	// Render

	return (

		<div className="connect">
			<div className="box">

				<div className="slider"></div>

				<div className="btn">
					<button  className="signin">Sign in</button>
					<button className="signup">Sign up</button>
				</div>

				<div className="formBox">
					<form action="submit" onSubmit={handleSubmit} className="loginBox">
						<input onChange={handleChange} value={userName} type="text" placeholder="Username"></input>
						<input type="password" placeholder="Password"></input>
						<button className="connectBtn" type="submit">Login</button>
					</form>

					<form action="submit" onSubmit={handleSubmit} className="registerBox">
						<input onChange={handleChange} value={userName} type="text" placeholder="Username"></input>
						<input type="password" placeholder="Password"></input>
						<input type="password" placeholder="Confirm password"></input>
						<button className="connectBtn" type="submit">Register</button>
					</form>
				</div>
			</div>
		</div>
	);
}