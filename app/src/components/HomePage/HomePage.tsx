import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import NavBar from "../NavBar/NavBar";

export default function HomePage() {

    // States

    let { id } = useParams();

    if (!id)
        id = "error";

    return (
        <div className="HomePage">
            <NavBar id={id}/>
            <div className="title">
				<h1>Disco</h1>
				<h1>PONG</h1>
			</div>
			<div className="play">
				<Link to={`/pong`}>PLAY</Link>
			</div>
        </div>
    );
}