import { createContext, Dispatch, PropsWithChildren, SetStateAction, useState } from "react";
import axios, { setAuthToken } from "../utils/axios"

export function createAuth() {
	const defaultUser = {
		id: 0,
		name: "",
		password: "",
		refreshToken: "",
		pfp: "",
		score: 0,
		level: 0,
		xp: 0,
		coins: 0
	};

	
	type UpdateType = Dispatch<SetStateAction<typeof defaultUser>>;
	const defaultUpdate: UpdateType = () => defaultUser;
	
	const signup = async (name: string, password: string) => "null";   
	const signin = async (name: string, password: string) => "null";
	const signout = async (name: string, password: string) => "null";
	const profile = async (token: string) => "null";
	const leaderboard = async () => "null";
	
	interface AuthContextType {
		test: string;
		setTest: Dispatch<SetStateAction<string>>;
		user: typeof defaultUser;
		error: string;
		setUser: UpdateType;
		signup: typeof signup;
		signin: typeof signin;
		signout: typeof signout;
		profile: typeof profile;
		leaderboard: typeof leaderboard;
	}

<<<<<<< HEAD
	const authCtx = createContext<AuthContextType>({
		test: "test",
		setTest: () => {},
		user: defaultUser,
		error: "",
		setUser: defaultUpdate,
=======
	const authCtx = createContext({
		users: defaultUser,
		setUsers: defaultUpdate,
>>>>>>> b3066500343ace00be5cf0efc279558820e89645
		signup: signup,
		signin: signin,
		signout: signout,
		profile: profile,
		leaderboard: leaderboard,
		error: ""
	});

	function AuthProvider(props: PropsWithChildren<{}>) {
<<<<<<< HEAD
		const [test, setTest] = useState("test");
		const [user, setUser] = useState(defaultUser);
=======
		const [users, setUsers] = useState(defaultUser); // USERSSSSSSS PARANO
>>>>>>> b3066500343ace00be5cf0efc279558820e89645
		const [error, setError] = useState("");

		const signup =  async (name: string, password: string) => {
			const { accessToken, refreshToken } = await axios.post("auth/register", { name, password })
			.then(res => { return (res.data) })
			.catch(err => {
				setError(err.response.data.message);
				return null
			});
			
			if (!accessToken || !refreshToken)
				return "null";
			
			return await profile(accessToken);
		};
		
		const signin = async (name: string, password: string) => {
			const { accessToken, refreshToken } = await axios.post("auth/login", { name, password })
			.then(res => { return (res.data) })
			.catch(err => {
				setError(err.response.data.message);
				return null
			});
<<<<<<< HEAD
			setTest("test bis");
			console.log(test);
=======
			
>>>>>>> b3066500343ace00be5cf0efc279558820e89645
			if (!accessToken || !refreshToken)
				return "null";

			return await profile(accessToken);
		};

		const profile = async (token: string) => {
			setAuthToken(token);
			localStorage.setItem("token", token);
			const user = await axios.get("user/profile")
			.then(res => { return (res.data) })
			.catch(err => { return null })
			
			if (!user) {
				setUsers(defaultUser);
				return "null";
			}
			else {
				setUsers({
					id: user.id,
					name: user.name,
					password: user.password,
					refreshToken: user.refreshToken,
					pfp: user.pfp,
					score: user.score,
					level: user.level,
					xp: user.xp,
					coins: user.coins
				});
			}
			
			return users.name;
		};

		const signout = async () => {
			setUsers(defaultUser);
			return "null";
		};

		const leaderboard = async () => {
			const userListTmp: never[] = await axios.get("user/leaderboard")
			.then(res => { return (res.data) })
			.catch(err => { return null })
			
			if (!userListTmp)
				return 'null';
			console.log("userList: ", userListTmp);
			return ("success");
		}

		useEffect(() => {
			const token = localStorage.getItem("token");
			if (token)
				profile(token);
		}, []);

		const setup = async () => {}

		useEffect(() => {
			setup();
		}, [])
		

		return (
			<authCtx.Provider value={{
<<<<<<< HEAD
				test,
				setTest,
				user,
				error,
				setUser,
=======
				users,
				setUsers,
>>>>>>> b3066500343ace00be5cf0efc279558820e89645
				signup,
				signin,
				signout,
				profile,
				leaderboard,
				error
			}}
			{...props} />
		);
	};
	return { authCtx, AuthProvider } as const;
}