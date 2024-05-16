import {MemoizedComponent} from "./memoized.component";
import {useState} from "react";

export const MemoizationHooks = () => {
    console.log('MemoizationHooks')
    const [tick, setTick] = useState(0);

    return (
        <div style={{'border': '2px orange solid'}}>
            <button onClick={() => setTick(tick + 1)}>Increment</button>
            <MemoizedComponent param={tick}/>
        </div>
    )
}
