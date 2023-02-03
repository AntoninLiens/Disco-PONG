import { useParams } from "react-router-dom";

import NavBar from "./NavBar";

export default function HomePage() {

    // States

    const id = useParams();

    return (
        <div className="HomePage">
			<NavBar id={id.id}/>
            <h1>This is home page</h1>
            <p>Welcome {id.id}</p>
            <p>what a awesome home page</p>
        </div>
    );
}