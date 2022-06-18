import React, {Dispatch, SetStateAction} from "react";

interface CounterProps {
    count: number;
    setCount: Dispatch<SetStateAction<number>>;
}

export const CounterComponent = ({count, setCount}: CounterProps) => {
    return (
        <>
            <div>Counter {count}</div>
            <button onClick={() => setCount((c) => c + 1)}>Inc</button>
        </>
    )
}