import { useParams } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

export default function Stats() {
	let {id} = useParams();
	if (!id)
		id = "error";

	return (
		<div className="statsPage">
			<NavBar id={id}/>
			Stats
		</div>
	)
}