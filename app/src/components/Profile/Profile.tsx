import "./Profile.css"

export default function Profile() {
	return (
		<div className="profile">
			<div className="profile_box">
				<div className="profile_pfp"></div>
				<div className="profile_name">ToTo</div>
				<div className="profile_wins">Wins: 11</div>
				<div className="profile_loose">Looses: 22</div>
				<div className="profile_score">Score: 1000</div>
				<div className="profile_lvl">Level: 1</div>
				<div className="profile_xpBar">
					<div className="profile_xp"></div>
				</div>
			</div>
			<div className="profile_return">return</div>
		</div>
	);
}