import {useState} from "react";
import {MemoizedComponent} from "./memoized-component";
import {RegularComponent} from "./regular-component";
import {WithUseMemoHookComponent} from "./withUseMemoHookComponent";

const user = {
    name: "John",
}

export const SampleComponent = () => {
    console.log('SampleComponent')
    const [tick, setTick] = useState(0);

    return (
            <div style={{'border': '2px orange solid'}}>
                <button onClick={() => setTick(tick + 1)}>Increment ({tick})</button>
                <WithUseMemoHookComponent param={tick}/>
                <MemoizedComponent user={user}/>
                <RegularComponent user={user}/>
            </div>
    )
}
