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
					<li className="top10Item">4</li>
					<li className="top10Item">5</li>
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