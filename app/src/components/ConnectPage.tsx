import "./stylesheets/ConnectPage.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ConnectPage() {
	
	// States

	const [userName, setUserName] = useState("");
	const [sliderType, setSliderType] = useState("loginSlider");
	const [formBoxType, setFormBoxType] = useState("loginFormBox");

	const navigate = useNavigate();
	
	// Behavior
	
	const handleSubmit = (event: any) => {
		event.preventDefault();
		navigate(`/homePage/${userName}`);
	};
	
	const handleChange = (event: any) => {
		setUserName(event.target.value);
	};

	const handleSliderClick = (sliderType: string, formBoxType: string) => {
		setSliderType(sliderType);
		setFormBoxType(formBoxType);
	}

	// Render

	return (

		<div className="connect">
			<div className="box">

				<div className={`slider ${sliderType}`}></div>

				<div className="btn">
					<button className="signin" onClick={() => handleSliderClick("loginSlider", "loginFormBox")}>Sign in</button>
					<button className="signup" onClick={() => handleSliderClick("registerSlider", "registerFormBox")}>Sign up</button>
				</div>

				<div className={`formBox ${formBoxType}`}>
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