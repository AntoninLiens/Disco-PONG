import "./ConnectPage.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";

const register = gql`
	mutation register($username: String!, $password: String!, $image: String!, $score: Int!, $level: Int!, $coins: Int!, $statut: Boolean!) {
		userCreate(data: {username: $username, password: $password, image: $image, score: $score, level: $level, coins: $coins, statut: $statut}) {
			id
		}
	}
`;

export default function ConnectPage() {
	
	// States
	const [user, { data, loading, error }] = useMutation(register);

	const [userName, setUserName] = useState("");

	const [sliderType, setSliderType] = useState("loginSlider");
	const [formBoxType, setFormBoxType] = useState("loginFormBox");

	const navigate = useNavigate();
	
	// Behavior
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error : {error.message}</p>;
	
	const handleSubmit = (event: any) => {
		event.preventDefault();
		console.log(event);
		user({ variables: {
			username: "aliens",
			password: "salut",
			image: "photo de profil",
			score: 0,
			level: 0,
			coins: 0,
			statut: true
		}});
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