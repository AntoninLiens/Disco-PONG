import { ChangeEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import NavBar from "../NavBar/NavBar";
import "./Settings.css";

export default function Settings() {

	let {id} = useParams();
	if (!id)
		id = "error";

	const [ controlToggle, setControlToggle ] = useState("isHide");
	const [ HUDToggle, setHUDToggle ] = useState("isHide");
	const [ PSWToggle, setPSWToggle ] = useState("isHide");

	const [upKeyValue, setUpKeyValue] = useState<string>(intToChar(87));
	const [downKeyValue, setDownKeyValue] = useState<string>(intToChar(83));
	const [passwordVal, setPasswordVal] = useState<string>("");

	const showHideSettingItems = (type: string) => {
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
		else if (type === "PSW") {
			if (PSWToggle === "isHide")
				setPSWToggle("isShow");
			else
				setPSWToggle("isHide");
		}
	}

	function intToChar(nbr: number) {
		return String.fromCharCode(nbr);
	  }

	const handleButtonClick = (type: string) => {
		if (type === "moveUp")
			document.addEventListener("keydown", handleMoveUpKeyPress);
		else if (type === "moveDown")
			document.addEventListener("keydown", handleMoveDownKeyPress);
	};
	const handleMoveUpKeyPress = (event: KeyboardEvent) => {
		setUpKeyValue(intToChar(event.keyCode));
		document.removeEventListener("keydown", handleMoveUpKeyPress)
	}

	const handleMoveDownKeyPress = (event: KeyboardEvent) => {
		setDownKeyValue(intToChar(event.keyCode));
		document.removeEventListener("keydown", handleMoveDownKeyPress)
	}

	const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
		if (event.target.value.length > 12)
			alert("Password must be under 12 chars")
		else if (event.target.value.length < 6)
			alert("Password must be upper 6 chars")
		else
			setPasswordVal(event.target.value)
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
					<button onClick={() => showHideSettingItems("controls")} className="controlsButton settingsButton">Controls</button>
					<div className={`mainSettingsItems ${controlToggle}`}>
						<div className="moveUp settingsPair">
							<div className="settingsKey">Move up</div>
							<button onClick={() => handleButtonClick("moveUp")} className="settingsVal">{upKeyValue}</button>
						</div>
						<div className="moveDown settingsPair">
							<div className="settingsKey">Move down</div>
							<button onClick={() => handleButtonClick("moveDown")} className="settingsVal">{downKeyValue}</button>
						</div>
					</div>
				</div>

				<div className="HUD settingsItem">
					<button onClick={() => showHideSettingItems("HUD")} className="HUDButton settingsButton">HUD</button>
					<div className={`mainSettingsItems ${HUDToggle}`}>
						<div className="moveUp">up = w</div>
						<div className="moveDown">down = s</div>
					</div>
				</div>

				<div className="PSW settingsItem">
					<button onClick={() => showHideSettingItems("PSW")} className="PSWButton settingsButton">Password</button>
					<div className={`mainSettingsItems ${PSWToggle}`}>
						<div className="password settingsPair">
							<div className="settingsKey">Password</div>
							<input onChange={handleChangePassword} type="password" className="settingsVal" value={passwordVal}/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

// reset settings by default
// alert msg when exit settings without saving

// modifying controls
// Hide / show HUD elements
// change password