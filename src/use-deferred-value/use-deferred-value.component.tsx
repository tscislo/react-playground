import {useDeferredValue, useState} from "react";

export const DeferredValue = ({input}: { input: string }) => {
    const deferredInput = useDeferredValue(input);

    const items = Array(10000)
            .fill(0)
            .map((_, i) => <div key={i}>{deferredInput}</div>);

    return <div>{items}</div>;
}

export const DeferredValueConsumer = () => {
    const [value, setValue] = useState("");

    return <>
        <input type={'text'} value={value} onChange={(e) => setValue(e.target.value)}/>
        <DeferredValue input={value} />
    </>
}
