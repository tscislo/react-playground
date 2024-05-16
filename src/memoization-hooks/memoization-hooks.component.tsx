import {MemoizedComponent} from "./memoized.component";
import {useEffect, useState} from "react";

export const MemoizationHooks = () => {
    console.log('MemoizationHooks')
    const [tick, setTick] = useState(0);

    return (
        <div>
            <button onClick={() => setTick(tick + 1)}>Increment</button>
            <MemoizedComponent param={tick}/>
        </div>
    )
}
