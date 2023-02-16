import { url } from "inspector";
import { useEffect, useState } from "react";
import { BiMessageDetail } from "react-icons/bi";
import "./Friend.css";

export default function Friend({name, status, image}: any) {

	// state
	const [online, setOnline] = useState("");
	const profile_pic = require(`./images/${image}`);


	// behavior
	useEffect(() => {
		console.log(`${profile_pic}`)
		if (status == 1)
			setOnline("online");
	}, []);

	// render
	return (
		<div className="social_friend">
			<div className="social_friendPfp" style={{backgroundImage: `url(${profile_pic})`,
													backgroundRepeat: "no-repeat",
													backgroundSize: "cover"}}>
				<div className={`social_friendStatus ${online}`}></div>
			</div>
			<div className="social_friendName">{name}</div>
			<button><BiMessageDetail size={30}/></button>
		</div>
		);
}