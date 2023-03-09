import "./Profile.css"
import NavBar from "../NavBar/NavBar";
import { useContext } from "react";
import { AuthContext } from "../..";


export default function Profile() {

	const { users } = useContext(AuthContext);
	
	return (
		<div className="profilePage">
			<NavBar id={users.name} />
			<div className="profile_box">
				<div className="profile_pfp" style={{
					backgroundImage: `url(${users.pfp})`,
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover"}}>
				</div>
				<div className="profile_name">{users.name}</div>
				<div className="profile_wins">Victories: </div>
				<div className="profile_loose">Defeats: </div>
				<div className="profile_score">Score: {users.score}</div>
				<div className="profile_lvl">Level: {users.level}</div>
				<div className="profile_xpBar">
					<div className="profile_xp" style={{ width: `${users.xp}%` }}></div>
				</div>
			</div>
		</div>
	);
}