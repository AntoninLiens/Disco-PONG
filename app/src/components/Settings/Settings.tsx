import { useParams } from "react-router-dom";

export default function Settings() {

	const {id} = useParams();


	return (
		<div className="settings">
			<p>This is settings</p>
			<p>Hello {id}</p>
		</div>
	);
}