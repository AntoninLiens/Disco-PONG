import { createContext, Dispatch, PropsWithChildren, SetStateAction, useState, useEffect } from "react";
import axios, { setAuthToken, removeAuthToken } from "../utils/axios"

export function createAuth() {
	const defaultUser = {
		id: 0,
		name: "",
		password: "",
		refreshToken: "",
		pfp: "./images/bread.png",
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
		setUsers: UpdateType;
		signup: typeof signup;
		signin: typeof signin;
		signout: typeof signout;
		profile: typeof profile;
		errorLogin: string;
		errorRegister: string;
		setErrorRegister: Dispatch<SetStateAction<string>>;
	}

	const authCtx = createContext<AuthContextType>({
		users: defaultUser,
		setUsers: defaultUpdate,
		signup: signup,
		signin: signin,
		signout: signout,
		profile: profile,
		errorLogin: "",
		errorRegister: "",
		setErrorRegister: () => {}
	});

	function AuthProvider(props: PropsWithChildren<{}>) {
		const [users, setUsers] = useState(defaultUser); // USERSSSSSSS PARANO
		const [errorLogin, setErrorLogin] = useState("");
		const [errorRegister, setErrorRegister] = useState("");

		const signup =  async (name: string, password: string) => {
			const { accessToken, refreshToken } = await axios.post("auth/register", { name, password, pfp: "./images/bread.png" })
			.then(res => { return (res.data) })
			.catch(err => {
				if (err.response.data.message === "User already exists")
					setErrorRegister("User already exists");
				else if (err.response.data.message[0] === "name should not be empty")
					setErrorRegister("name should not be empty");
				else if (err.response.data.message[1] === "password should not be empty")
					setErrorRegister("password should not be empty");
				else if (err.response.data.message[0] === "password must be longer than or equal to 7 characters")
					setErrorRegister("password must be longer than or equal to 7 characters");
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
				setErrorLogin(err.response.data.message);
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
				errorLogin,
				errorRegister,
				setErrorRegister
			}}
			{...props} />
		);
	};
	return { authCtx, AuthProvider } as const;
}