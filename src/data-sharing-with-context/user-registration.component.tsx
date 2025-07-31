import {lazy} from "react";
import {ChangeNameComponent} from "./change-name.component";
import {EmailComponent} from "./email.component";
import {UserContextProviderComponent} from "./user-context-provider.component";
const UserComponent =  lazy(() => import('./user.component'));

const UserRegistrationComponent = () => {
    return <div style={{'border': '2px orange solid'}}>
        <UserContextProviderComponent>
            <UserComponent/>
            <UserComponent/>
            <EmailComponent/>
            <ChangeNameComponent />
        </UserContextProviderComponent>
    </div>
}

export default UserRegistrationComponent
