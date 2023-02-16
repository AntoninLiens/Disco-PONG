import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import NavBar from "../NavBar/NavBar";
import "./Settings.css";

export default function Settings() {

	let {id} = useParams();
	if (!id)
		id = "error";

	const [ controlToggle, setControlToggle ] = useState("isHide");
	const [ HUDToggle, setHUDToggle ] = useState("isHide");
	const [firstKeyPressed, setFirstKeyPressed] = useState<string>(intToChar(97));

	const handleClick = (type: string) => {
		if (type === "controls") {
			if (controlToggle === "isHide")
				setControlToggle("isShow");
			else
				setControlToggle("isHide");
		}
		else if (type === "HUD") {
			if (HUDToggle === "isHide")
				setHUDToggle("isShow");
			else
				setHUDToggle("isHide");
		}
	}

	function intToChar(nbr: number) {
		return String.fromCharCode(nbr);
	  }

	const handleButtonClick = () => {
		document.addEventListener("keydown", handleKeyPress);
	};
	const handleKeyPress = (event: KeyboardEvent) => {
		setFirstKeyPressed(intToChar(event.keyCode));
		document.removeEventListener("keydown", handleKeyPress)
	}

	return (
		<div className="settingsPage">
			<NavBar id={id}/>
			<div className="settingsTitle">
				<h2>Disco-PONG</h2>
				<h1>Settings</h1>
			</div>
			<div className="mySettings">
				<div className="controls settingsItem">
					<button onClick={() => handleClick("controls")} className="controlsButton settingsButton">Controls</button>
					<div className={`mainSettingsItems ${controlToggle}`}>
						<div className="moveUp settingsPair">
							<div className="settingsKey">Move up</div>
							<div className="settingsVal">w</div>
						</div>
						<div className="moveDown settingsPair">
							<div className="settingsKey">Move down</div>
							<button onClick={handleButtonClick} className="settingsVal">{firstKeyPressed}</button>
						</div>
					</div>
				</div>


				<div className="HUD settingsItem">
					<button onClick={() => handleClick("HUD")} className="HUDButton settingsButton">HUD</button>
					<div className={`mainSettingsItems ${HUDToggle}`}>
						<div className="moveUp">up = w</div>
						<div className="moveDown">down = s</div>
					</div>
				</div>


				<div className="password isHide settingsItem">Password</div>
			</div>
		</div>
	);
}

// reset settings by default
// alert msg when exit settings without saving

// modifying controls
// Hide / show HUD elements
// change password