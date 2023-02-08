// import React, { useState } from "react";
import { useState } from "react";
import "./Pong.css"


export default function Pong() {

	const [incr, setIncr] = useState(0);
	
	const p1 = document.getElementById("p1");
	// const p2 = document.getElementById("p2");

	const test1 = () => {
		console.log("UP");
		let tmp = incr - 10;
		if (p1) {
			setIncr(tmp);
			p1.style.top = `${incr}px`;
		}
		console.log(incr);
	}

	const test2 = () => {
		console.log("DOWN");
		let tmp = incr + 10;
		if (p1) {
			setIncr(tmp);
			p1.style.top = `${incr}px`;
		}
		console.log(incr);
	}

	window.addEventListener("keypress", (e) => {
		console.log("coucou");
		if (e.key === "s")
			return test1;
		else if (e.key === "w")
			return test2;
	})

	return (
		<div className="page">
			<div className="pong">
				<div id="plate">
					<canvas width={600} height={300} ></canvas>
					<canvas id="p1" width={10} height={55}></canvas>
					<canvas id="p2" width={10} height={55}></canvas>
				</div>
			</div>
		</div>
	);
}
