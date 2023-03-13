import "./Leaderboard.css"
import NavBar from "../NavBar/NavBar";

import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../..";
import axios from "../../utils/axios";

const Leaderboard = () => {

	// States

	const { users } = useContext(AuthContext);
	const [ leaderboard, setLeaderboard ] = useState<any[]>([]);

	// Behavior

	const getLeaderboard = async () => {
		const res = await axios.get("user/leaderboard")
		.then(res => { return res.data })
		.catch(err => { return null });
		console.log("res : ", res);
		if (res)
			setLeaderboard(res);
	}

	const switchFirstTwo = () => {
		if (leaderboard.length > 1) {
			setLeaderboard([leaderboard[1], leaderboard[0], ...leaderboard.slice(2)]);
			console.log("leaderboard : ", leaderboard);
		}
	}

	useEffect(() => {
		getLeaderboard();
		switchFirstTwo();
	}, [])
	
	// Render

	return (
		<div className="leaderboardPage">
			<NavBar id={users.name}/>
			<div className="topPlayers">
				<div className="top3">
				{
					leaderboard.map((user: any, index: number) => {
						if (index < 3) {
							return (
									<div key={index} className="top3Box">
										<div className={`name name-${index + 1}`}>{user.name}</div>
										<div className={`podiumItem  podiumItem-${index + 1}`}>{index + 1}</div>
									</div>
							)
						}
					})}
				</div>
				<ul className="top10">
					{
						leaderboard.map((user: any, index: number) => {
							if (index >= 3 && index < 10) {
								return (
									<li key={index} className="top10Item">{index + 1} | {user.name}</li>
								)
							}
						})
					}
				</ul>
			</div>
		</div>
	);
}

export default Leaderboard;