import { useParams } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Friend from "./components/Friend";
import { AiOutlineUserAdd, AiOutlineUserDelete } from "react-icons/ai"
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
				<Friend name={"JeeJ"} status={1} image={"among-us-sus.gif"}/>
				<Friend name={"Le POT"} status={1} image={"bread.png"}/>
				<Friend name={"Marton"} status={0} image={"amogus.jpg"}/>
				<div className="social_menu">
					<div className="social_footer">
						<button className="social_add"><AiOutlineUserAdd size={30}/></button>
						<button className="social_remove"><AiOutlineUserDelete size={30}/></button>
					</div>
				</div>
			</div>
		</div>
	);
}