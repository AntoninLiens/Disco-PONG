import "./Profile.css"
import NavBar from "../NavBar/NavBar";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../..";
import axios from "../../utils/axios";


export default function Profile() {

	const { users } = useContext(AuthContext);
	const profilePicture = require(`${users.pfp}`);
	const [victories, setVictories] = useState<any[]>([]);
	const [defeats, setDefeats] = useState<any[]>([]);

	const getVictories = async () => {
		const res = await axios.get("game/victories")
		.then(res => { return res.data })
		.catch(err => { return null });
		if (res)
			setVictories(res);
	}

	const getDefeats = async () => {
		const res = await axios.get("game/defeats")
		.then(res => { return res.data })
		.catch(err => { return null });
		if (res)
			setDefeats(res);
	}

	useEffect(() => {
		getVictories();
		getDefeats();
	}, [])
	
	return (
		<div className="profilePage">
			<NavBar id={users.name} />
			<div className="profile_box">
				<div className="profile_pfp" style={{
					backgroundImage: `url(${profilePicture})`,
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover"}}>
				</div>
				<div className="profile_name">{users.name}</div>
				<div className="profile_wins">Victories: {victories.length}</div>
				<div className="profile_loose">Defeats: {defeats.length}</div>
				<div className="profile_score">Score: {users.score}</div>
				<div className="profile_lvl">Level: {users.level}</div>
				<div className="profile_xpBar">
					<div className="profile_xp" style={{ width: `${users.xp}%` }}></div>
				</div>
			</div>
		</div>
	);
}