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
	const [ firstProfile, setFirstProfile ] = useState("");
	const [ secondProfile, setSecondProfile ] = useState("");
	const [ thirdProfile, setThirdProfile ] = useState("");
	const [ fourthProfile, setFourthProfile ] = useState("");
	const [ fiveProfile, setFiveProfile ] = useState("");
	const [ sixProfile, setSixProfile ] = useState("");
	const [ sevenProfile, setSevenProfile ] = useState("");
	const [ eightProfile, setEightProfile ] = useState("");
	const [ nineProfile, setNineProfile ] = useState("");
	const [ tenProfile, setTenProfile ] = useState("");
	const { id } = useParams();
	
	// Behavior
	
	const sortProfileList = () => {
		const profileListCopy = profileList.sort((a, b) => {
			if (a.score < b.score)
				return (1);
			else if (a.score > b.score)
				return (-1);
			return (0);
		});
		setProfileList(profileListCopy);
		console.log(profileList);
	};
	
	useEffect(() => {
		sortProfileList();
		setFirstProfile(profileList[0].name);
		setSecondProfile(profileList[1].name);
		setThirdProfile(profileList[2].name);
		setFourthProfile(profileList[3].name);
		setFiveProfile(profileList[4].name);
		setSixProfile(profileList[5].name);
		setSevenProfile(profileList[6].name);
		setEightProfile(profileList[7].name);
		setNineProfile(profileList[8].name);
		setTenProfile(profileList[9].name);
	}, []);

	// Render

	return (
		<div className="leaderboardPage">
			<NavBar id={id}/>
			<div className="topPlayers">
				<div className="top3">
					<div className="top3Box">
						<div className="name-2">{secondProfile}</div>
						<div className="podiumItem podiumItem-2">2</div>
					</div>
					<div className="top3Box">
						<div className="name-1">{firstProfile}</div>
						<div className="podiumItem podiumItem-1">1</div>
					</div>
					<div className="top3Box">
					<div className="name-3">{thirdProfile}</div>
						<div className="podiumItem podiumItem-3">3</div>
					</div>
				</div>
				<ul className="top10">
					<li className="top10Item">4 {fourthProfile}</li>
					<li className="top10Item">5 {fiveProfile}</li>
					<li className="top10Item">6 {sixProfile}</li>
					<li className="top10Item">7 {sevenProfile}</li>
					<li className="top10Item">8 {eightProfile}</li>
					<li className="top10Item">9 {nineProfile}</li>
					<li className="top10Item">10 {tenProfile}</li>
				</ul>
			</div>
		</div>
	);
}