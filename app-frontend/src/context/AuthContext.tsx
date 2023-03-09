import { createContext, Dispatch, PropsWithChildren, SetStateAction, useState } from "react";
import axios, { setAuthToken } from "../utils/axios"

export function createAuth() {
	const defaultUser = {
		name: "",
		token: "",
		pfp: "",
		victories: [],
		deafeats: [],
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

	const authCtx = createContext<AuthContextType>({
		test: "test",
		setTest: () => {},
		user: defaultUser,
		error: "",
		setUser: defaultUpdate,
		signup: signup,
		signin: signin,
		signout: signout,
		profile: profile,
		leaderboard: leaderboard
	});

	function AuthProvider(props: PropsWithChildren<{}>) {
		const [test, setTest] = useState("test");
		const [user, setUser] = useState(defaultUser);
		const [error, setError] = useState("");

		const signup =  async (name: string, password: string) => {
			const { accessToken, refreshToken } = await axios.post("auth/register", { name, password })
			.then(res => { return (res.data) })
			.catch(err => {
				setError(err.response.data.message);
				return null
			});

			console.log("accessToken: ", accessToken);
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
			setTest("test bis");
			console.log(test);
			if (!accessToken || !refreshToken)
				return "null";
			return await profile(accessToken);
		};

		const profile = async (token: string) => {
			setAuthToken(token);
			const userTmp = await axios.get("user/profile")
			.then(res => { return (res.data) })
			.catch(err => { return null })

			if (!userTmp) {
				setUser(defaultUser);
				return "null";
			}
			else
				setUser(userTmp);

			return user.name;
		};

		const signout = async () => {
			setUser(defaultUser);
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

		return (
			<authCtx.Provider value={{
				test,
				setTest,
				user,
				error,
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