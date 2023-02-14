import { useEffect, useState } from "react";
import "./HistoryMatch.css"

export default function HistoryMatch({id, p2}: any) {

	// state
	const [shortedId, setShortedId] = useState<string>(id);
	const [shortedP2, setShortedP2] = useState<string>(p2);

	// behavior
	useEffect(() => {
		if (id.length > 6)
			setShortedId(id.substring(0, 6) + '.');
		if (p2.length > 6)
			setShortedP2(p2.substring(0, 6) + '.');
	}, []);

	// render
	return (
		<div className="history_match">
			<div className="history_playerOne">
				<div className="history_playerOnePfp"></div>
				<div className="history_playerOneName">{shortedId}</div>
			</div>
			<div className="history_vs">VS</div>
			<div className="history_playerTwo">
				<div className="history_playerTwoName">{shortedP2}</div>
				<div className="history_playerTwoPfp"></div>
			</div>
		</div>
	);
}