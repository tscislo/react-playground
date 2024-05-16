import {useCallback, useMemo, useState} from "react";

export const MemoizedComponent = ({param}: {param: number}) => {
    console.log('MemoizedComponent');
    const [state, setState] = useState(0);

    const someFn = useCallback(() => {
        console.log('Current state:', state);
    }, [state]);

    const betterState = useMemo(() => ({
        state,
        test: 1
    }), [state]);


    return (
        <div>
            <button onClick={someFn}>Check state value!</button>
            {JSON.stringify(betterState)}
        </div>
    )
}
