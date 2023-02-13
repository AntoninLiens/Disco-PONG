import NavBar from "../NavBar/NavBar";
import { useParams } from "react-router-dom";
import "./Leaderboard.css"

export default function Leaderboard() {

	const { id } = useParams();

	return (
		<div className="leaderboardPage">
			<NavBar id={id}/>
			<div className="topPlayers">
				<div className="top3">
					<div className="podiumItem second"></div>
					<div className="podiumItem first"></div>
					<div className="podiumItem third"></div>
				</div>
				<ul className="top10">
				
				</ul>
			</div>
		</div>
	);
}