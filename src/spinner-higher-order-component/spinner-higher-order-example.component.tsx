import {withSpinner} from "./spinner-higher-order.component";
import {UserComponent} from "./user.component";

const EnhancedUserComponent = withSpinner(UserComponent);

export const SpinnerHigherOrderExampleComponent = () => {
    return (
        <div>
            <EnhancedUserComponent data={undefined}/>
            <EnhancedUserComponent data={{}}/>
        </div>
    );
}
