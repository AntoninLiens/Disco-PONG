import { useParams } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

export default function Social() {

	let {id} = useParams();
	if (!id)
		id = "error";

	return (
		<div className="socialPage">
			<NavBar id={id}/>
			Social
		</div>
	)
}