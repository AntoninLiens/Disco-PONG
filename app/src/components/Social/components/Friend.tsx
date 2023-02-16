import { useEffect, useState } from "react";
import { BiMessageDetail } from "react-icons/bi"
import "./Friend.css";

export default function Friend({name, status}: any) {

	// state
	const [online, setOnline] = useState("");

	// behavior
	useEffect(() => {
		if (status == 1)
			setOnline("online");
	}, []);

	// render
	return (
		<div className="social_friend">
			<div className="social_friendPfp"></div>
			<div className={`social_friendStatus ${online}`}></div>
			<div className="social_friendName">{name}</div>
			<button><BiMessageDetail size={30}/></button>
		</div>
		);
}