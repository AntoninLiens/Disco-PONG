import { useEffect, useState } from "react";
import { BiMessageDetail } from "react-icons/bi";
import { GrClose } from "react-icons/gr"
import "./Friend.css";

export default function Friend({name, status, image, message, remove}: any) {

	// state
	const [pseudo, setPseudo] = useState(name);
	const [online, setOnline] = useState("");
	const profile_pic = require(`./images/${image}`);
	const [aff, setAff] = useState("");

	// behavior
	useEffect(() => {
		if (status === 1)
			setOnline("online");
	}, []);

	const handleDeleteFriend = () => {
		// setPseudo("Prouted");
		setAff("affOff");
	}

	// render
	return (
		<div className={`social_friend ${aff}`}>
			<div className="social_friendPfp" style={{backgroundImage: `url(${profile_pic})`,
													backgroundRepeat: "no-repeat",
													backgroundSize: "cover"}}>
				<div className={`social_friendStatus ${online}`}></div>
			</div>
			<div className="social_friendName">{pseudo}</div>
			<button className={`social_msgButton ${remove}`}><BiMessageDetail size={30}/></button>
			<button className={`social_removeButton ${message}`} onClick={handleDeleteFriend}><GrClose size={30}/></button>
		</div>
		);
}