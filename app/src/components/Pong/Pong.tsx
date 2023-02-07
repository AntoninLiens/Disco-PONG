// import React, { useState } from "react";
import { useState } from "react";
import "./Pong.css"


export default function Pong() {

	// const [incr, setIncr] = useState(0);
	
	const p1 = document.getElementById("p1");
	// const p2 = document.getElementById("p2");

	const test = () => {
		// if (event.key === "s") {
		// 	let tmp = incr + 10;
		// 	if (p1)
		// 		setIncr(tmp);
		// }
		console.log("coucou");
	}

	return (
		<div className="page">
			<div className="pong">
				<div id="plate" onKeyPress={test}>
					<canvas width={600} height={300} ></canvas>
					<canvas id="p1" width={10} height={55}></canvas>
					<canvas id="p2" width={10} height={55}></canvas>
				</div>
			</div>
		</div>
	);
}
