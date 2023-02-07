import { Routes, Route } from "react-router-dom";

import ConnectPage from "./components/ConnectPage/ConnectPage";
import History from "./components/History/History";
import HomePage from "./components/HomePage/HomePage";
import Leaderbord from "./components/Leaderboard/Leaderboard";
import Pong from "./components/Pong/Pong";
import Profile from "./components/Profile/Profile";
import Social from "./components/Social/Social";
import Stats from "./components/Stats/Stats";
import Settings from "./components/Settings/Settings";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<ConnectPage/>} />
				<Route path="/homePage/:id/history" element={<History/>} />
				<Route path="/homePage/:id" element={<HomePage/>} />
				<Route path="/homePage/:id/leaderboard" element={<Leaderbord/>} />
				<Route path="/homePage/:id/pong" element={<Pong/>} />
				<Route path="/homePage/:id/profile" element={<Profile/>} />
				<Route path="/homePage/:id/social" element={<Social/>} />
				<Route path="/homePage/:id/stats" element={<Stats/>} />
				<Route path="/homePage/:id/settings" element={<Settings/>} />
			</Routes>
		</div>
	);
}

export default App;