import { Routes, Route, Link } from "react-router-dom";

import ConnectPage from "./components/ConnectPage";
import HomePage from "./components/HomePage";
import Settings from "./components/Settings";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<ConnectPage/>} />
				<Route path="/homePage/:id" element={<HomePage/>} />
				<Route path="/settings" element={<Settings/>} />
			</Routes>
		</div>
	);
}

export default App;
