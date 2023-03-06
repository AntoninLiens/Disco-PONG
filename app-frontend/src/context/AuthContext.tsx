import { createContext, Dispatch, PropsWithChildren, SetStateAction, useState, useEffect } from "react";
import axios, { setAuthToken } from "../utils/axios"

export function createAuth() {
    const defaultUser = {
        name: "Martin",
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
    const profile = async (name: string) => "null";

    const authCtx = createContext({
        user: defaultUser,
        setUser: defaultUpdate,
        signup: signup,
        signin: signin,
        signout: signout,
        profile: profile
    });

    function AuthProvider(props: PropsWithChildren<{}>) {
        const [user, setUser] = useState(defaultUser);

        const signup =  async (name: string, password: string) => {
            const token = await axios.post("auth/register", { name, password })
            .then(res => { return (res.data) })
            .catch(err => { return null });

            if (!token) {
                return "null";
            }
            return await profile(token);
        };

        const signin = async (name: string, password: string) => {
            const token = await axios.post("auth/login", { name, password })
            .then(res => { return (res.data) })
            .catch(err => { return null });

            if (!token) {
                return "null";
            }
            return await profile(token);
        };

        const profile = async (token: string) => {
            setAuthToken(token);
            const user = await axios.get("user/profile")
            .then(res => { return (res.data) })
            .catch(err => { return null })

            if (!user)
                setUser(defaultUser);
            else
                setUser(user);

            return user.name;
        };

        const signout = async () => {
            setUser(defaultUser);
            return "null";
        };

        return (
            <authCtx.Provider value={{
                user,
                setUser,
                signup,
                signin,
                signout,
                profile
            }}
            {...props} />
        );
    };
    return { authCtx, AuthProvider } as const;
}