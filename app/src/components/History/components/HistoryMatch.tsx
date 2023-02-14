import { useEffect, useState } from "react";
import "./HistoryMatch.css"

export default function HistoryMatch({id, p2, result}: any) {

	// state
	const [shortedId, setShortedId] = useState<string>(id);
	const [shortedP2, setShortedP2] = useState<string>(p2);
	const [win1, setWin1] = useState("");
	const [win2, setWin2] = useState("");

	// behavior
	useEffect(() => {
		if (id.length > 6)
			setShortedId(id.substring(0, 6) + '.');
		if (p2.length > 6)
			setShortedP2(p2.substring(0, 6) + '.');
		if (result == 1)
			setWin1("win1");
		else
			setWin2("win2");
	}, []);

	// render
	return (
		<div className="history_match">
			<div className="history_playerOne">
				<div className={`history_playerOnePfp ${win1}`}></div>
				<div className={`history_playerOneName ${win1}`}>{shortedId}</div>
			</div>
			<div className="history_vs">VS</div>
			<div className="history_playerTwo">
				<div className={`history_playerTwoName ${win2}`}>{shortedP2}</div>
				<div className={`history_playerTwoPfp ${win2}`}></div>
			</div>
		</div>
	);
}