import { createContext, Dispatch, PropsWithChildren, SetStateAction, useState, useEffect } from "react";
import axios, { setAuthToken, removeAuthToken } from "../utils/axios"

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
	
	type AuthContextType = {
		users: typeof defaultUser;
		error: string;
		setUsers: UpdateType;
		signup: typeof signup;
		signin: typeof signin;
		signout: typeof signout;
		profile: typeof profile;
	}

	const authCtx = createContext<AuthContextType>({
		users: defaultUser,
		setUsers: defaultUpdate,
		signup: signup,
		signin: signin,
		signout: signout,
		profile: profile,
		error: ""
	});

	function AuthProvider(props: PropsWithChildren<{}>) {
		const [users, setUsers] = useState(defaultUser); // USERSSSSSSS PARANO
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
			
			if (!accessToken || !refreshToken)
				return "null";

			return await profile(accessToken);
		};

		const profile = async (token: string) => {
			removeAuthToken();
			localStorage.clear();
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
			localStorage.removeItem("token");
			return "null";
		};

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
				users,
				setUsers,
				signup,
				signin,
				signout,
				profile,
				error
			}}
			{...props} />
		);
	};
	return { authCtx, AuthProvider } as const;
}