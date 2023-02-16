import "./Leaderboard.css"
import NavBar from "../NavBar/NavBar";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Leaderboard() {

	// States

	const [ profileList, setProfileList ] = useState([
		{
			id: 1,
			name: "ctirions",
			score: 42
		},
		{
			id: 2,
			name: "aliens",
			score: 19
		},
		{
			id: 3,
			name: "zminhas",
			score: 20
		},
		{
			id: 4,
			name: "tpetit",
			score: 1
		},
		{
			id: 5,
			name: "rcamaro",
			score: 10
		},
		{
			id: 6,
			name: "ablondel",
			score: 16
		},
		{
			id: 7,
			name: "dbanzizi",
			score: 12
		},
		{
			id: 8,
			name: "jdartoi",
			score: 8
		},
		{
			id: 9,
			name: "dgutin",
			score: 11
		},
		{
			id: 10,
			name: "mykman",
			score: 18
		},
	]);
	let profileListCopy = [];
	const { id } = useParams();
	
	// Behavior
	
	const sortProfileList = () => {
		profileListCopy = profileList.sort((a, b) => {
			if (a.score < b.score)
			return (1);
			else if (a.score > b.score)
			return (-1);
			return (0);
		});
		setProfileList(profileListCopy);
	};

	useEffect(() => {
		sortProfileList();
	}, []);

	// Render

	return (
		<div className="leaderboardPage">
			<NavBar id={id}/>
			<div className="leaderboardTitle">
				<h2>Disco-PONG</h2>
				<h1>Leaderboard</h1>
			</div>
			<div className="topPlayers">
				<div className="top3">
					<div className="top3Box">
						<div className="podiumName name-2">{profileList[1].name}</div>
						<div className="podiumItem podiumItem-2">2<div>score : {profileList[1].score}</div></div>
					</div>

					<div className="top3Box">
						<div className="podiumName name-1">{profileList[0].name}</div>
						<div className="podiumItem podiumItem-1">1<div>score : {profileList[0].score}</div></div>
					</div>
					<div className="top3Box">
						<div className="podiumName name-3">{profileList[2].name}</div>
						<div className="podiumItem podiumItem-3">3<div>score : {profileList[2].score}</div></div>
					</div>
				</div>
				<ul className="top10">
					<li className="top10Item">4 {profileList[3].name}<div>score : {profileList[3].score}</div></li>
					<li className="top10Item">5 {profileList[4].name}<div>score : {profileList[4].score}</div></li>
					<li className="top10Item">6 {profileList[5].name}<div>score : {profileList[5].score}</div></li>
					<li className="top10Item">7 {profileList[6].name}<div>score : {profileList[6].score}</div></li>
					<li className="top10Item">8 {profileList[7].name}<div>score : {profileList[7].score}</div></li>
					<li className="top10Item">9 {profileList[8].name}<div>score : {profileList[8].score}</div></li>
					<li className="top10Item">10 {profileList[9].name}<div>score : {profileList[9].score}</div></li>
				</ul>
			</div>
		</div>
	);
}