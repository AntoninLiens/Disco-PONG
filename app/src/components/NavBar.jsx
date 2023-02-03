import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar({id}) {
    // States

    const customHomePage = `/homePage/${id}`
    const customSettingsPage = `/homePage/${id}/settings`

    return (
        <div className="NavBar">
            <ul>
                <li><Link to={customHomePage}>Home page</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to={customSettingsPage}>Settings</Link></li>
            </ul>
        </div>
    );
}