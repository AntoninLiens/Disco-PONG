import { ChangeEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import NavBar from "../NavBar/NavBar";
import CheckBox from "./components/CheckBox";
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
	const [scoreChecked, setScoreChecked] = useState<boolean>(true);
	const [profileChecked, setProfileChecked] = useState<boolean>(true);

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
		// a => 65 | z => 90 | <- => 37 | ^ => 38 | -> => 39 | V => 40
		if (type === "moveUp")
			document.addEventListener("keydown", handleMoveUpKeyPress);
		else if (type === "moveDown")
			document.addEventListener("keydown", handleMoveDownKeyPress);
	};

	const handleMoveUpKeyPress = (event: KeyboardEvent) => {
		if ((event.keyCode < 65 || event.keyCode > 90) && (event.keyCode < 37 || event.keyCode > 40))
			alert("You must chose an alphabetic key or an arrow key");
		else {
			if (event.keyCode >= 37 && event.keyCode <= 40) {
				if (event.keyCode == 37) 
					setUpKeyValue("Left arrow");
				else if (event.keyCode == 38) 
					setUpKeyValue("Up arrow");
				else if (event.keyCode == 39) 
					setUpKeyValue("Rigth arrow");
				else
					setUpKeyValue("Down arrow");
			}
			else
				setUpKeyValue(intToChar(event.keyCode));
		}
		document.removeEventListener("keydown", handleMoveUpKeyPress)
	}

	const handleMoveDownKeyPress = (event: KeyboardEvent) => {
		if ((event.keyCode < 65 || event.keyCode > 90) && (event.keyCode < 37 || event.keyCode > 40))
			alert("You must chose an alphabetic key or an arrow key");
		else {
			if (event.keyCode >= 37 && event.keyCode <= 40) {
				if (event.keyCode == 37) 
					setDownKeyValue("Left arrow");
				else if (event.keyCode == 38) 
					setDownKeyValue("Up arrow");
				else if (event.keyCode == 39) 
					setDownKeyValue("Rigth arrow");
				else
					setDownKeyValue("Down arrow");
			}
			else
				setDownKeyValue(intToChar(event.keyCode));
		}
		document.removeEventListener("keydown", handleMoveDownKeyPress)
	}

	const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
		setPasswordVal(event.target.value)
	}

	const handleSubmitSettings = () => {
		if (passwordVal.length > 16)
			alert("Password length must be under 17 chars!");
		else if (passwordVal.length < 8)
			alert("Password length must be upper 7 chars!");
		else
			alert("Settings are well saved.")
	}

	const handleCheckBox = (type: string) => {
		if (type === "score") {
			if (scoreChecked)
				setScoreChecked(false);
			else
				setScoreChecked(true);
		}
		else if (type === "profile") {
			if (profileChecked)
				setProfileChecked(false);
				else
					setProfileChecked(true);
		}
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
						<div className="showScore settingsPair">
							<div className="settingsKey">Show score</div>
							<CheckBox label="" ischecked={scoreChecked} />
						</div>
						<div className="showProfiles settingsPair">
							<div className="settingsKey">Show profiles</div>
							<CheckBox label="" ischecked={profileChecked} />
						</div>
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
				<button className="submitButton" onClick={handleSubmitSettings}>Save</button>
			</div>
		</div>
	);
}

// reset settings by default
// alert msg when exit settings without saving

// modifying controls
// Hide / show HUD elements
// change password