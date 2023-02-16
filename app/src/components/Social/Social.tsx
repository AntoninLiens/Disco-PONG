import { useParams } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Friend from "./components/Friend";
import "./Social.css"

export default function Social() {

	let { id } = useParams();

	if (!id)
		id = "error";

	return (
		<div className="SocialPage">
			<NavBar id={id} />
			<div className="social_box">
				<div className="social_title">
					<h2>Disco-PONG</h2>
					<h1>Chat</h1>
				</div>
				<div className="social_menu"></div>
				<Friend name={"JeeJ"} status={1}/>
				<Friend name={"Le POT"} status={1}/>
				<Friend name={"Marton"} status={0}/>
			</div>
		</div>
	);
}