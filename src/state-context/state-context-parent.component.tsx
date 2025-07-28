import {useCallback, useState} from "react";
import {StateContextChildComponent} from "./state-context-child.component";
import {StateContext} from "./state-context.context";

export const StateContextParentComponent = () => {
    const [value, setValue] = useState(0);

    const increment = useCallback(() => setValue((v) => v + 1), [setValue]);
    const decrement =  useCallback(() => setValue((v) => v - 1), [setValue]);

    return <>
        <h1>StateContextParentComponent</h1>
        <StateContext.Provider value={{
            increment,
            decrement,
            value
        }}>
            <StateContextChildComponent/>
        </StateContext.Provider>
    </>
}
