import axios from "../../utils/axios";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../..";

import NavBar from "../NavBar/NavBar";
import "./HomePage.css"

export default function HomePage() {

	// States
	const { users } = useContext(AuthContext);

	// Functions
	const handlePlay = async () => {
		const game = await axios.post("game/create")
		.then(res => { return (res.data) })
		.catch(err => { return null });
		console.log("game: ", game);
	}

	return (
		<div className="HomePage">
			<NavBar id={users.name}/>
			<div className="centerBox">
				<div className="title">
					<h1>Disco</h1>
					<h1>PONG</h1>
				</div>
				<div className="play">
					<Link to={`/pong`} onClick={handlePlay}>PLAY</Link>
				</div>
			</div>
		</div>
	);
}