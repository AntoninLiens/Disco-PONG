import { createContext, Dispatch, PropsWithChildren, SetStateAction, useState, useEffect } from "react";
import axios, { setAuthToken } from "../utils/axios"

export function createAuth() {
	const defaultUser = {
		name: "",
		token: "",
		pfp: "",
		victories: "",
		deafeats: "",
		score: 0,
		level: 0
	};

	type UpdateType = Dispatch<SetStateAction<typeof defaultUser>>;
	const defaultUpdate: UpdateType = () => defaultUser;

	const signup = async (name: string, password: string) => "null";   
	const signin = async (name: string, password: string) => "null";
	const signout = async (name: string, password: string) => "null";
	const profile = async (token: string) => "null";
	const leaderboard = async () => 0;

	const authCtx = createContext({
		user: defaultUser,
		setUser: defaultUpdate,
		signup: signup,
		signin: signin,
		signout: signout,
		profile: profile,
		leaderboard: leaderboard
	});

	function AuthProvider(props: PropsWithChildren<{}>) {
		const [user, setUser] = useState(defaultUser);

		const signup =  async (name: string, password: string) => {
			const { accessToken, refreshToken } = await axios.post("auth/register", { name, password })
			.then(res => { return (res.data) })
			.catch(err => { return null });

			if (!accessToken || !refreshToken)
				return "null";

			return await profile(accessToken);
		};

		const signin = async (name: string, password: string) => {
			const { accessToken, refreshToken } = await axios.post("auth/login", { name, password })
			.then(res => { return (res.data) })
			.catch(err => { return null });

			if (!accessToken || !refreshToken)
				return "null";

			return await profile(accessToken);
		};

		const profile = async (token: string) => {
			setAuthToken(token);
			const userTmp = await axios.get("user/profile")
			.then(res => { return (res.data) })
			.catch(err => { return null })

			if (!userTmp)
				setUser(defaultUser);
			else
				setUser(userTmp);

			return user.name;
		};

		const signout = async () => {
			setUser(defaultUser);
			return "null";
		};

		const leaderboard = async () => {
			const userList = await axios.get("user/leaderboard")
			.then(res => { return (res.data) })
			.catch(err => { return null })

			if (!userList)
				return 0;
			return (userList);
		}

		return (
			<authCtx.Provider value={{
				user,
				setUser,
				signup,
				signin,
				signout,
				profile,
				leaderboard
			}}
			{...props} />
		);
	};
	return { authCtx, AuthProvider } as const;
}