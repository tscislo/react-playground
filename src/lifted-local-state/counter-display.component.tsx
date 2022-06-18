import React from "react";

export interface CounterDisplayProps {
    count: number
}

export const CounterDisplayComponent = ({count}: CounterDisplayProps) => {
    return (
        <>
            <div>Counter {count}</div>
        </>
    )
}