import { Link } from "react-router-dom";

export default function NavBar({id}: any) {
    // States

    return (
        <div className="NavBar">
            <ul>
                <li><Link to={`/homePage/${id}`}>Profile</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to={`/homePage/${id}/leaderbords`}>Leaderboards</Link></li>
                <li><Link to={`/homePage/${id}/stats`}>Stats</Link></li>
                <li><Link to={`/homePage/${id}/history`}>History</Link></li>
                <li><Link to={`/homePage/${id}/social`}>Social</Link></li>
                <li><Link to={`/homePage/${id}/settings`}>Settings</Link></li>
            </ul>
        </div>
    );
}