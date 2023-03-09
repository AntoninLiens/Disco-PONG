import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../..";
import NavBar from "../NavBar/NavBar";
import HistoryMatch from "./components/HistoryMatch";
import "./History.css"

export default function History() {

	const { users } = useContext(AuthContext);

	return (
		<div className="historyPage">
			<NavBar id={ users.name } />
			<div className="history_box">
				<div className="history_title">
					<h2>Disco-PONG</h2>
					<h1>History</h1>
				</div>
				<HistoryMatch p1={users.name} p2={"JeeJ"} image1={"bread.png"} image2={"among-us-sus.gif"} result={1}/>
				<HistoryMatch p1={users.name} p2={"jooj"} image1={"bread.png"} image2={"amogus.jpg"} result={0}/>
				<HistoryMatch p1={users.name} p2={"jiij"} image1={"bread.png"} image2={"among-us-sus.gif"} result={0}/>
			</div>
		</div>
	);
}