import "./Profile.css"
import NavBar from "../NavBar/NavBar";
import { useContext } from "react";
import { AuthContext } from "../..";


export default function Profile() {

	const { user } = useContext(AuthContext);
	
	return (
		<div className="profilePage">
			<NavBar id={user.name} />
			<div className="profile_box">
				<div className="profile_pfp" style={{
					backgroundImage: `url(${user.pfp})`,
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover"}}>
				</div>
				<div className="profile_name">{user.name}</div>
				<div className="profile_wins">Victories: {user.victories}</div>
				<div className="profile_loose">Defeats: {user.deafeats}</div>
				<div className="profile_score">Score: {user.score}</div>
				<div className="profile_lvl">Level: {user.level}</div>
				<div className="profile_xpBar">
					<div className="profile_xp"></div>
				</div>
			</div>
		</div>
	);
}