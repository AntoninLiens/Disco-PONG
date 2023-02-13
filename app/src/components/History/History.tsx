import { useParams } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import "./History.css"

export default function History() {

	let { id } = useParams();

	if (!id)
		id = "error";

	return (
		<div className="historyPage">
			<NavBar id={id} />
			<div className="history_box">
				<h1>History:</h1>
				<div className="history_match">
					<div className="history_playerOne">
						<div className="history_playerOnePfp"></div>
						<div className="history_playerOneName">{id}</div>
					</div>
					<div className="history_vs">VS</div>
					<div className="history_playerTwo">
						<div className="history_playerTwoName">JeeJ</div>
						<div className="history_playerTwoPfp"></div>
					</div>
				</div>
			</div>
		</div>
	);
}