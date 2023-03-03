import { Routes, Route } from "react-router-dom";

import "./App.css";

import ConnectPage from "./routes/ConnectPage/ConnectPage";
import History from "./routes/History/History";
import HomePage from "./routes/HomePage/HomePage";
import Leaderbord from "./routes/Leaderboard/Leaderboard";
import Pong from "./routes/Pong/Pong";
import Profile from "./routes/Profile/Profile";
import Social from "./routes/Social/Social";
import Stats from "./routes/Stats/Stats";
import Settings from "./routes/Settings/Settings";
import Shop from "./routes/Shop/Shop";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<ConnectPage/>} />
				<Route path="/homePage/:id/history" element={<History/>} />
				<Route path="/homePage/:id" element={<HomePage/>} />
				<Route path="/homePage/:id/leaderboard" element={<Leaderbord/>} />
				<Route path="/pong" element={<Pong/>} />
				<Route path="/homePage/:id/profile" element={<Profile/>} />
				<Route path="/homePage/:id/social" element={<Social/>} />
				<Route path="/homePage/:id/stats" element={<Stats/>} />
				<Route path="/homePage/:id/settings" element={<Settings/>} />
				<Route path="/shop" element={<Shop/>} />
			</Routes>
		</div>
	);
}

export default App;