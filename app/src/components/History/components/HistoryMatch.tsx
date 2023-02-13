import "./HistoryMatch.css"

export default function HistoryMatch({id}: any) {
	return (
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
	);
}