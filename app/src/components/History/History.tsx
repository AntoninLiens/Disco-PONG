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
				<h1>History:</h1>
				<HistoryMatch id={id}/>
				<HistoryMatch id={id}/>
				<HistoryMatch id={id}/>

			</div>
		</div>
	);
}