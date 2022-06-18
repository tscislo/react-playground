import React, {useState} from "react";
import {CounterComponent} from "./counter.component";

export const ParentComponent = () => {
    const [count, setCount] = useState<number>(0);
    return (
        <>
            <CounterComponent count={count} setCount={setCount}/>
            <CounterComponent count={count} setCount={setCount}/>
        </>
    )
}