import { Link } from "react-router-dom";
import { FaUser, FaShoppingCart } from "react-icons/fa"
import { MdLeaderboard, MdSettingsSuggest } from "react-icons/md"
import { ImStatsBars } from "react-icons/im"
import { BsClockHistory, BsPeopleFill } from "react-icons/bs"
import "./NavBar.css";

export default function NavBar({id}: any) {
    // States

    return (
        <div className="NavBar">
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