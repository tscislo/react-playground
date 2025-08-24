import {useState} from "react";
import {CustomWrapperComponent} from "./custom-wrapper.component";
import {MemoizedComponent} from "./memoized-component";
import {RegularComponent} from "./regular-component";
import {RegularComponentNoProps} from "./regular-component-no-props";
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
                <MemoizedComponent user={user} NotWrapper="strong"/>
                <MemoizedComponent user={user} NotWrapper={CustomWrapperComponent}/>
                <RegularComponent user={user}/>
                <RegularComponentNoProps />
            </div>
    )
}

export default SampleComponent;
