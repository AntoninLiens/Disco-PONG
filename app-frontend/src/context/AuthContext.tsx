import { createContext, Dispatch, SetStateAction, useState } from "react";

const defaultUser = {
    name: "Martin",
    token: ""
};

type UpdateType = Dispatch<SetStateAction<typeof defaultUser>>;
const defaultUpdate: UpdateType = () => defaultUser;

export const AuthContext = createContext({
    user: defaultUser,
    setUser: defaultUpdate
});

const AuthContextProvider = (props: any) => {

    const [user, setUser] = useState(defaultUser);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {...props}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;