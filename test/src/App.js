import './App.css';
import { useState } from "react";

function App() {
	// state
	const [objets, setObjet] = useState([
		{ id: 1, name: "objet 1" },
		{ id: 2, name: "objet 2" },
		{ id: 3, name: "objet 3" }
	]);

	const [newObj, setNewobj] = useState("");

	// behavior
	const handleDelete = (id) => {
		const objetCopy = [...objets];
		const objetCopyupdated = objetCopy.filter(objet => objet.id !== id);
		setObjet(objetCopyupdated);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const objetCopy = [...objets];
		const id = new Date().getTime();
		const name = newObj;
		const toAdd = { id, name };
		objetCopy.push(toAdd);
		setObjet(objetCopy);
		setNewobj("");
	};

	const handleChange = (event) => {
		setNewobj(event.target.value);
	};

	// render
	return (
		<div className="App">
			<h1>Les objets</h1>
			<ul>
				{objets.map((objet) => (
				<li key={objet.id}>
					{objet.name} <button onClick={() => handleDelete(objet.id)}>X</button>
				</li>
			))}
			</ul>
			<form action="submit" onSubmit={handleSubmit} >
				<input value={newObj} type="text" placeholder="ajouter un objet" onChange={handleChange}></input>
				<button>add</button>
			</form>
		</div>
	);
}

export default App;
