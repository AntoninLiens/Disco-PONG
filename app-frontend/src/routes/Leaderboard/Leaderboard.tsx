import "./Leaderboard.css"
import NavBar from "../NavBar/NavBar";

import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../..";

export interface User {
	name: string;
	id: number;
	refreshtoken: string;
	password: string;
	pfp: string;
	coins: number;
	level: number;
	xp: number;
	defeats: [];
	victories: [];
}

const profileDefault: User = {
	name: "",
	id: 0,
	refreshtoken: "",
	password: "",
	pfp: "",
	coins: 0,
	level: 0,
	xp: 1,
	defeats: [],
	victories: []
}


const Leaderboard = () => {

	// States

	// const [ profileList, setProfileList ] = useState<User[]>();

	const { id } = useParams();
	
	// Behavior
	
	// Render

	return (
		<div className="leaderboardPage">
			<NavBar id={id}/>
			<div className="topPlayers">
				<div className="top3">
					<div className="top3Box">
						<div className="name-2"></div>
						<div className="podiumItem podiumItem-2">2</div>
					</div>
					<div className="top3Box">
						<div className="name-1"></div>
						<div className="podiumItem podiumItem-1">1</div>
					</div>
					<div className="top3Box">
					<div className="name-3"></div>
						<div className="podiumItem podiumItem-3">3</div>
					</div>
				</div>
				<ul className="top10">
					<li className="top10Item">4</li>
					<li className="top10Item">5 </li>
					<li className="top10Item">6</li>
					<li className="top10Item">7</li>
					<li className="top10Item">8</li>
					<li className="top10Item">9</li>
					<li className="top10Item">10</li>
				</ul>
			</div>
		</div>
	);
}

export default Leaderboard;