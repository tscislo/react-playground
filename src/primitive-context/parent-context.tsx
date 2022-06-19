import React, {useState} from "react";
import {ColorContext} from "./color.context";
import {ColorComponent, ColorMemo} from "./color-component";

export const ParentColorComponent = () => {
    const [color, setColor] = useState<string>('green');
    const [count, setCount] = useState<number>(0);
    return (
        <div style={{'border': '1px red solid'}}>
            <button onClick={() => setCount((c) => c + 1)}>Inc count</button>
            <ColorComponent count={count}/>
            <ColorContext.Provider value={'blue'}>
                <ColorContext.Provider value={'red'}>
                    <ColorComponent count={count}/>
                    <ColorMemo count={count} />
                </ColorContext.Provider>
            </ColorContext.Provider>
            <ColorContext.Provider value={color}>
                <button onClick={() => setColor('red')}>Make me red</button>
                <button onClick={() => setColor('yellow')}>Make me yellow</button>
                <ColorComponent count={count}/>
                <ColorComponent count={count}/>
                <ColorMemo count={count} />
            </ColorContext.Provider>
        </div>
    )
}