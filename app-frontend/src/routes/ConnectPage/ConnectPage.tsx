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

	const {user, signin, signup} = useContext(AuthContext);
	
	const [sliderType, setSliderType] = useState("loginSlider");
	const [formBoxType, setFormBoxType] = useState("loginFormBox");
	
	const navigate = useNavigate();
	
	// COMPONENTS
	
	/*Login*/
	
	const handleLogin = async (event: any) => {
		event.preventDefault();
		navigate(`/homePage/${loginName}`);
	};
	
	const updateLoginName = (event: any) => {
		setLoginName(event.target.value);
	};
	const updateLoginPassword = (event: any) => {
		setLoginPassword(event.target.value);
	};
	
	/*Register*/
	
	const handleRegister = async (event: any) => {
		event.preventDefault();
		const res = await signup(registerName, registerPassword);
		console.log(res);
		if (res !== "null") {
			navigate(`/homePage/${registerName}`);
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
						<form action="submit" onSubmit={handleLogin} className="loginBox">
							<input onChange={updateLoginName} type="text" placeholder="Username"></input>
							<input onChange={updateLoginPassword} type="password" placeholder="Password"></input>
							<button className="connectBtn" type="submit">Login</button>
						</form>

						<form action="submit" onSubmit={handleRegister} className="registerBox">
							<input onChange={updateRegisterName} type="text" placeholder="Username"></input>
							<input onChange={updateRegisterPassword} type="password" placeholder="Password"></input>
							<input onChange={updateRegisterConfirmPassword} type="password" placeholder="Confirm password"></input>
							<button className="connectBtn" type="submit">Register</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
