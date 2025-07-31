import React, {useState} from "react";
import {CounterComponent} from "./counter.component";
import {CounterDisplayComponent} from "./counter-display.component";

export const ParentComponent = () => {
    const [count, setCount] = useState<number>(0);
    return (
        <div style={{'border': '2px green solid'}}>
            <CounterComponent setCount={setCount} counterDisplay={<CounterDisplayComponent count={count}/>}/>
            <CounterComponent setCount={setCount} counterDisplay={<CounterDisplayComponent count={count}/>}/>
        </div>
    )
}

export default ParentComponent
