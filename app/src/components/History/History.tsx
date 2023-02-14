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
				<h1>History</h1>
				<HistoryMatch id={id} p2={"JeeJ"} result={1}/>
				<HistoryMatch id={id} p2={"jooj"} result={0}/>
				<HistoryMatch id={id} p2={"jiij"} result={0}/>
			</div>
		</div>
	);
}