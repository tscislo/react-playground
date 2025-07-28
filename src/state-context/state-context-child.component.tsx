import {useContext} from "react";
import {StateContext} from "./state-context.context";

export const StateContextChildComponent = () => {
    const { increment, decrement, value } = useContext(StateContext);
    return <>
        <h2>StateContextChildComponent</h2>
        <div>{value}</div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </>
}
