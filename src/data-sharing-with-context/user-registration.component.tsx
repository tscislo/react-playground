import {ChangeNameComponent} from "./change-name.component";
import {EmailComponent} from "./email.component";
import {UserContextProviderComponent} from "./user-context-provider.component";
import {UserComponent} from "./user.component";

export const UserRegistrationComponent = () => {
    return <div style={{'border': '2px orange solid'}}>
        <UserContextProviderComponent>
            <UserComponent/>
            <UserComponent/>
            <EmailComponent/>
            <ChangeNameComponent />
        </UserContextProviderComponent>
    </div>
}
