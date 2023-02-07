import { useParams } from "react-router-dom";

import NavBar from "./NavBar";

export default function HomePage() {

    // States

    let { id } = useParams();

    if (!id)
        id = "error";

    return (
        <div className="HomePage">
            <NavBar id={id}/>
            <h1>This is home page</h1>
            <p>Welcome {id}</p>
            <p>what a awesome home page</p>
        </div>
    );
}