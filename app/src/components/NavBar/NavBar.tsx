import { Link } from "react-router-dom";
import { FaUser, FaShoppingCart } from "react-icons/fa"
import { MdLeaderboard, MdSettingsSuggest, MdMenu } from "react-icons/md"
import { ImStatsBars } from "react-icons/im"
import { BsClockHistory, BsPeopleFill } from "react-icons/bs"
import { GrClose } from "react-icons/gr"
import "./NavBar.css";
import { useState } from "react";

export default function NavBar({id}: any) {
	// States
	const [aff, setAff] = useState("unfold");
	const [fold, setFold] = useState("hide");
	const [unfold, setUnfold] = useState("");


	function affNavBar() {
		if (aff === "unfold") {
			setAff("fold");
			setUnfold("hide");
			setFold("");
		}
		else {
			setAff("unfold");
			setFold("hide");
			setUnfold("");
		}
	}

	return (
		<div className={`NavBar ${aff}`}>
			<a id="isHere" className={`affNavBar ${fold}`} onClick={affNavBar}><GrClose size={24} /></a>
			<a id="isHide" className={`affNavBar ${unfold}`} onClick={affNavBar}><MdMenu size={24}/></a>
			<ul>
				<li><Link to={`/homePage/${id}/profile`}><FaUser size={24}/></Link></li>
				<li><Link to="/shop"><FaShoppingCart size={24}/></Link></li>
				<li><Link to={`/homePage/${id}/leaderbords`}><MdLeaderboard size={24}/></Link></li>
				<li><Link to={`/homePage/${id}/stats`}><ImStatsBars size={24}/></Link></li>
				<li><Link to={`/homePage/${id}/history`}><BsClockHistory size={24}/></Link></li>
				<li><Link to={`/homePage/${id}/social`}><BsPeopleFill size={24}/></Link></li>
				<li id="settings"><Link to={`/homePage/${id}/settings`}><MdSettingsSuggest size={24}/></Link></li>
			</ul>
		</div>
	);
}