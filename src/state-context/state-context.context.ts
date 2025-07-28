import {createContext} from "react";

export interface StateContextProps {
    increment: () => void;
    decrement: () => void;
    value: number;
}

export const StateContext = createContext<StateContextProps>({
    increment: () => {},
    decrement: () => {},
    value: 0
});
