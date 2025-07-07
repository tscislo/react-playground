import {useContext} from "react";
import {UserContext} from "./user.context";

export const UserPasswordComponent = () => {
    const {user} = useContext(UserContext) ?? {password : ''};

    return <div>
        {user.password.split('').map(() => '*')}
    </div>
}
