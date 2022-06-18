import React, {Dispatch, SetStateAction} from "react";

interface CounterProps {
    setCount: Dispatch<SetStateAction<number>>;
    counterDisplay: JSX.Element
}

export const CounterComponent = ({setCount, counterDisplay}: CounterProps) => {
    return (
        <>
            <div>{counterDisplay}</div>
            <button onClick={() => setCount((c) => c + 1)}>Inc</button>
        </>
    )
}