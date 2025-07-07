import {useContext} from "react";
import {EmailComponent} from "./email.component";
import {UserPasswordComponent} from "./user-password.component";
import {UserContext} from "./user.context";

export const UserComponent = () => {
    const {user} = useContext(UserContext);
    return <div>
        {user && <div style={{'border': '1px violet solid'}}>
            <div>{user.name}</div>
            <EmailComponent />
            <UserPasswordComponent />
        </div>}
    </div>
}
