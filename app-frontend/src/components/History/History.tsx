import { useParams } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import HistoryMatch from "./components/HistoryMatch";
import "./History.css"

export default function History() {

	let { id } = useParams();

	if (!id)
		id = "error";

	return (
		<div className="historyPage">
			<NavBar id={id} />
			<div className="history_box">
				<div className="history_title">
					<h2>Disco-PONG</h2>
					<h1>History</h1>
				</div>
				<HistoryMatch p1={id} p2={"JeeJ"} image1={"bread.png"} image2={"among-us-sus.gif"} result={1}/>
				<HistoryMatch p1={id} p2={"jooj"} image1={"bread.png"} image2={"amogus.jpg"} result={0}/>
				<HistoryMatch p1={id} p2={"jiij"} image1={"bread.png"} image2={"among-us-sus.gif"} result={0}/>
			</div>
		</div>
	);
}