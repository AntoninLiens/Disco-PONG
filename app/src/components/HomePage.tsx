import { useParams, useSearchParams } from "react-router-dom";

import NavBar from "./NavBar";

export default function HomePage() {

    // States

    const { id } = useParams(); 
    console.log(id);

    return (
        <div className="HomePage">
            <NavBar id={id}/>
            <h1>This is home page</h1>
            <p>Welcome {id}</p>
            <p>what a awesome home page</p>
        </div>
    );
}