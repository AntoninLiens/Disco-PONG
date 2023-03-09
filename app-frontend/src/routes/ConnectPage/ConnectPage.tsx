import "./ConnectPage.css"
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../..";

export default function ConnectPage() {
	
	// STATES

	const [loginName, setLoginName] = useState("");
	const [registerName, setRegisterName] = useState("");
	const [loginPassword, setLoginPassword] = useState("");
	const [registerPassword, setRegisterPassword] = useState("");
	const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");

	const { users, error, signin, signup } = useContext(AuthContext);
	
	const hideOrDisplay = error ? "display" : "hide";
	const [sliderType, setSliderType] = useState("loginSlider");
	const [formBoxType, setFormBoxType] = useState("loginFormBox");
	
	const navigate = useNavigate();
	
	// COMPONENTS
	
	/*Login*/
	
	const handleLogin = async () => {
		const res = await signin(loginName, loginPassword);
		console.log("res: ", users.name);
		if (res !== "null")
			navigate(`/homePage/${users.name}`);
	};
	
	const updateLoginName = (event: any) => {
		setLoginName(event.target.value);
	};
	const updateLoginPassword = (event: any) => {
		setLoginPassword(event.target.value);
	};
	
	/*Register*/
	
	const handleRegister = async () => {
		if (registerPassword === registerConfirmPassword) {
			const res = await signup(registerName, registerPassword);
			if (res !== "null")
				navigate(`/homePage/${users.name}`);
		}
	};
	
	const updateRegisterName = (event: any) => {
		setRegisterName(event.target.value);
	};
	const updateRegisterPassword = (event: any) => {
		setRegisterPassword(event.target.value);
	};
	const updateRegisterConfirmPassword = (event: any) => {
		setRegisterConfirmPassword(event.target.value);
	};
	
	/*Style*/
	
	const handleSliderClick = (sliderType: string, formBoxType: string) => {
		setSliderType(sliderType);
		setFormBoxType(formBoxType);
	};
	
	// RENDER

	return (
		<div>
			<div className="connect">
				<div className="box">
					<div className={`slider ${sliderType}`}></div>
					
					<div className="btn">
						<button className="signin" onClick={() => handleSliderClick("loginSlider", "loginFormBox")}>Sign in</button>
						<button className="signup" onClick={() => handleSliderClick("registerSlider", "registerFormBox")}>Sign up</button>
					</div>

					<div className={`formBox ${formBoxType}`}>
						<div className="loginBox">
							<input onChange={updateLoginName} type="text" placeholder="Username"></input>
							<input onChange={updateLoginPassword} type="password" placeholder="Password"></input>
							<div className={`loginError ${hideOrDisplay}`}>{ error }</div>
							<button className="connectBtn" onClick={handleLogin} type="submit">Login</button>
						</div>

						<div className="registerBox">
							<input onChange={updateRegisterName} type="text" placeholder="Username"></input>
							<input onChange={updateRegisterPassword} type="password" placeholder="Password"></input>
							<input onChange={updateRegisterConfirmPassword} type="password" placeholder="Confirm password"></input>
							<div className={`registerError ${hideOrDisplay}`}>{ error }</div>
			 				<button className="connectBtn" onClick={handleRegister} type="submit">Register</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
