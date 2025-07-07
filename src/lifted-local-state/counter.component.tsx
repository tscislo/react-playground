import React, {Dispatch, ReactElement, SetStateAction} from "react";

interface CounterProps {
    setCount: Dispatch<SetStateAction<number>>;
    counterDisplay: ReactElement
}

export const CounterComponent = ({setCount, counterDisplay}: CounterProps) => {
    return (
        <>
            <div>{counterDisplay}</div>
            <button onClick={() => setCount((c) => c + 1)}>Inc</button>
        </>
    )
}
