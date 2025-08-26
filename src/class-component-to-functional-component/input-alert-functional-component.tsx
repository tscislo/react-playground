import {ChangeEvent, FC, useCallback, useState} from "react";
import {InputAlertState} from "./input-alert-class-component";

export const InputAlertFunctionalComponent: FC<{name: string}> = ({name}) => {
    const [state, setState] = useState<InputAlertState>({
        inputValue: ""
    })

    const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setState({
            inputValue: event.target.value
        })
    }, []);

    const handleClick = useCallback(() => {
        alert(state.inputValue)
    }, []);

    return <div>
        <h2>{name}</h2>
        <input
                type="text"
                value={state.inputValue}
                onChange={handleChange}
                placeholder="Type something..."
        />
        <button
                onClick={handleClick}
        >
            Show Alert
        </button>
    </div>
}
