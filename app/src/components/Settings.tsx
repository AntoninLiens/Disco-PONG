import { useParams } from "react-router-dom";

export default function Settings() {

    const id = useParams();

    console.log(id.id);

    return (
        <div className="settings">
            <p>This is settings</p>
        </div>
    );
}