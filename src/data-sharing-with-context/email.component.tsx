import {useContext} from "react";
import {User, UserContext} from "./user.context";

export const EmailComponent = () => {
    const {user} = useContext<UserContext>(UserContext);

    return <>
        <div>{user.email}</div>
    </>
}
