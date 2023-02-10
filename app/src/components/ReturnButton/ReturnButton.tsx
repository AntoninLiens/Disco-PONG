import "./ReturnButton.css"

import { Link } from "react-router-dom";

export default function ReturnButton({id}: any) {
    return (
		<div className="returnHome"><Link to={`/homePage/${id}`}>return</Link></div>
    );
}