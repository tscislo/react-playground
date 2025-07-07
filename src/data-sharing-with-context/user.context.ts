import {createContext} from "react";

export interface User {
    name: string;
    email: string;
    password: string;
}

export interface UserContext {
    user: User;
    modifyUser: (user: User) => void;
}

export const UserContext = createContext<UserContext>({
    user: {
        name: '',
        password: '',
        email: ''
    },
    modifyUser: () => {}
});
