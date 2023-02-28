import "./ConnectPage.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";
import Loading from "../Loading/Loading";

/*GraphQL - Mutations*/

const register = gql`
	mutation register($name: String!, $password: String!, $image: String!, $score: Float!, $level: Float!, $coins: Float!, $statut: Boolean!) {
	  userCreate(input: {
	    name: $name
	    password: $password
	    image: $image
	    score: $score
	    level: $level
	    coins: $coins
	    statut: $statut
	  }) {
	    user {
	      id
	    }
	  }
	}
`;

const login = gql`
	mutation login($name: String!, $password: String!) {
	  authLogin(username: $name, password: $password) {
	    accessToken
	  }
	}
`;

/*Component*/

export default function ConnectPage() {
	/*States*/

	const [loginUser, { data: loginData, loading: loginLoading, error: loginError, reset: loginReset }] = useMutation(login);
	const [registerUser, { loading: registerLoading, error: registerError, reset: registerReset }] = useMutation(register);	
	
	const [loginName, setLoginName] = useState("");
	const [registerName, setRegisterName] = useState("");
	
	const [loginPassword, setLoginPassword] = useState("");
	const [registerPassword, setRegisterPassword] = useState("");
	const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");
	
	const [sliderType, setSliderType] = useState("loginSlider");
	const [formBoxType, setFormBoxType] = useState("loginFormBox");
	
	const navigate = useNavigate();
	
	/*Login*/
	
	const handleLogin = (event: any) => {
		event.preventDefault();

		loginUser({ variables: {
			name: loginName,
			password: loginPassword
		} });
		
		// console.log(loginData.authLogin.accessToken);
		
		if (!loginError)
			navigate(`/homePage/${loginName}`);
	};
	
	const updateLoginName = (event: any) => {
		setLoginName(event.target.value);
	};
	
	const updateLoginPassword = (event: any) => {
		setLoginPassword(event.target.value);
	};
	
	/*Register*/
	
	const handleRegister = (event: any) => {
		event.preventDefault();
		
		if (registerPassword !== registerConfirmPassword) {
			setRegisterConfirmPassword("");
			setRegisterPassword("");
			console.log(registerPassword);
			console.log(registerConfirmPassword);
			alert("Passwords don't match");
			return;
		}
		
		registerUser({ variables: {
			name: registerName,
			password: registerPassword,
			image: "ProfilePic.png",
			score: 0,
			level: 0,
			coins: 0,
			statut: true
		}});

		// loginUser({ variables: {
		// 	name: loginName,
		// 	password: loginPassword
		// } });
		
		// console.log(loginData.authLogin.accessToken);

		if (!registerError)
			navigate(`/homePage/${registerName}`);
		
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
	
	/*Render*/
	
	if (registerError) {
		alert(registerError.message);
		registerReset();
	}
	if (loginLoading) return (<Loading />);
	if (loginError) {
		alert(loginError.message);
		loginReset();
	}
	if (registerLoading) return (<Loading />);
	
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
