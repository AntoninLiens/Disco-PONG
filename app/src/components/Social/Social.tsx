import { useParams } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Friend from "./components/Friend";
import { AiOutlineUserAdd, AiOutlineUserDelete } from "react-icons/ai"
import { GrClose } from "react-icons/gr"
import { GoSearch } from "react-icons/go"
import "./Social.css"
import { useState } from "react";

export default function Social() {

	// state
	let { id } = useParams();
	if (!id)
		id = "error";
	const [affMain, setAffMain] = useState("");
	const [affSecond, setAffSecond] = useState("affOff");

	// behavior
	const handleAddFriend = () => {
		setAffMain("affOff");
		setAffSecond("");
	}

	const handleCancel = () => {
		setAffMain("");
		setAffSecond("affOff");
	}

	// render
	return (
		<div className="SocialPage">
			<NavBar id={id} />
			<div className={`social_box ${affMain}`}>
				<div className="social_title">
					<h2>Disco-PONG</h2>
					<h1>Chat</h1>
				</div>
				<Friend name={"JeeJ"} status={1} image={"among-us-sus.gif"}/>
				<Friend name={"Le POT"} status={1} image={"bread.png"}/>
				<Friend name={"Marton"} status={0} image={"amogus.jpg"}/>
				<div className="social_menu">
					<div className="social_footer">
						<button onClick={handleAddFriend} className="social_add"><AiOutlineUserAdd size={30}/></button>
						<button className="social_remove"><AiOutlineUserDelete size={30}/></button>
					</div>
				</div>
			</div>
			<div className={`social_secondBox ${affSecond}`}>
				<button className="social_cancelButton" onClick={handleCancel}><GrClose size={24}/></button>
				<div className="social_friendSearch">
					<h2>Add a Friend</h2>
					<form className="social_form" action="submit">
						<input className="social_searchBar" type="text" placeholder="Friend name"></input>
						<button className="social_SearchButton" ><GoSearch size={24}/></button>
					</form>
				</div>
			</div>
		</div>
	);
}