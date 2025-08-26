import React, {FC} from "react";
import {Props, State} from "./name-alert";

export const NameAlertFunc: FC<Props> = ({prefix}) => {
    const [state, setState] = React.useState<State>()


    const alertName = () => {
        alert(`${prefix}, ${state?.name}`);
    };

    const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({name: e.target.value});
    };

    return (
            <div>
                <h3>Enter Name And Alert</h3>
                <input
                        type="text"
                        onChange={handleNameInput}
                        value={state?.name}
                        placeholder="Enter Your Name"
                />
                <button onClick={alertName}>Alert Me!</button>
            </div>
    );
}
