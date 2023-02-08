import { Link } from "react-router-dom";
import "./NavBar.css"

export default function NavBar({id}: any) {
    // States

    return (
        <div className="NavBar">
            <ul>
                <li><Link to={`/homePage/${id}/profile`}>Profile</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to={`/homePage/${id}/leaderboard`}>Leaderboards</Link></li>
                <li><Link to={`/homePage/${id}/stats`}>Stats</Link></li>
                <li><Link to={`/homePage/${id}/history`}>History</Link></li>
                <li><Link to={`/homePage/${id}/social`}>Social</Link></li>
                <li id="settings"><Link to={`/homePage/${id}/settings`}>Settings</Link></li>
            </ul>
        </div>
    );
}