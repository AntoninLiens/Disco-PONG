import "./Profile.css"

export default function Profile() {
	return (
		<div className="profile">
			<div className="profile_box">
				<div className="profile_pfp"></div>
				<div className="profile_name">name !</div>
				<div className="profile_wins">Wins: </div>
				<div className="profile_lvl">Level: </div>
				<div className="profile_xpBar">
					<div className="profile_xp"></div>
				</div>
			</div>
		</div>
	);
}