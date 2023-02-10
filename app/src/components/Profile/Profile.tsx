import { useParams } from "react-router-dom";

import "./Profile.css"
import ReturnButton from "../ReturnButton/ReturnButton";

export default function Profile() {

	let { id } = useParams();

	if (!id)
		id = "error";

	return (
		<div className="profilePage">
			<div className="profile_box">
				<div className="profile_pfp"></div>
				<div className="profile_name">{id}</div>
				<div className="profile_wins">Victories: 111</div>
				<div className="profile_loose">Defeats: 22</div>
				<div className="profile_score">Score: 1000</div>
				<div className="profile_lvl">Level: 1</div>
				<div className="profile_xpBar">
					<div className="profile_xp"></div>
				</div>
			</div>
			<ReturnButton id={id}/>
		</div>
	);
}