import { useEffect, useState } from "react";
import "./HistoryMatch.css";

export default function HistoryMatch({p1, p2, image1, image2, result}: any) {

	// state
	const [shortedP1, setShortedP1] = useState<string>(p1);
	const [shortedP2, setShortedP2] = useState<string>(p2);
	const [win1, setWin1] = useState("");
	const [win2, setWin2] = useState("");
	const player_one_pic = require(`./images/${image1}`);
	const player_two_pic = require(`./images/${image2}`);

	// behavior
	useEffect(() => {
		if (p1.length > 6)
			setShortedP1(p1.substring(0, 6) + '.');
		if (p2.length > 6)
			setShortedP2(p2.substring(0, 6) + '.');
		if (result === 1)
			setWin1("win1");
		else
			setWin2("win2");
	}, []);

	// render
	return (
		<div className="history_match">
			<div className="history_playerOne">
				<div className={`history_playerOnePfp ${win1}`} style={{
					backgroundImage: `url(${player_one_pic})`,
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover"}}>
				</div>
				<div className={`history_playerOneName ${win1}`}>{shortedP1}</div>
			</div>
			<div className="history_vs">VS</div>
			<div className="history_playerTwo">
				<div className={`history_playerTwoName ${win2}`}>{shortedP2}</div>
				<div className={`history_playerTwoPfp ${win2}`} style={{
					backgroundImage: `url(${player_two_pic})`,
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover"}}>
				</div>
			</div>
		</div>
	);
}