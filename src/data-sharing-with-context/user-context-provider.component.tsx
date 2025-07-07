import {PropsWithChildren, useCallback, useState} from "react";
import {User, UserContext} from "./user.context";

export const UserContextProviderComponent = (props: PropsWithChildren) => {
    const [user, setUser] = useState<User>({
        name: '',
        password: '',
        email: ''
    });

    const setUserProp = useCallback((propName: keyof User, propValue: string) => {
        setUser((currUser) => {
            return {
                ...currUser,
                [propName]: propValue
            }
        })
    }, [setUser]);

    return <>
        <div>Name:<input value={user?.name} onChange={(e) => setUserProp('name', e.target.value)}/></div>
        <div>Email:<input value={user?.email} onChange={(e) => setUserProp('email', e.target.value)}/></div>
        <div>Password:<input value={user?.password} onChange={(e) => setUserProp('password', e.target.value)}/></div>
        <div>
            <UserContext.Provider value={{user, modifyUser: setUser}}>
                {props.children}
            </UserContext.Provider>
        </div>
    </>
}
