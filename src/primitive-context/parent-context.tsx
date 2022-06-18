import React, {useState} from "react";
import {ColorContext} from "./color.context";
import {ColorComponent} from "./color-component";

export const ParentColorComponent = () => {
    const [color, setColor] = useState<string>('green');
    return (
        <>
            <ColorComponent/>
            <ColorContext.Provider value={'blue'}>
                <ColorContext.Provider value={'red'}>
                    <ColorComponent/>
                </ColorContext.Provider>
            </ColorContext.Provider>
            <ColorContext.Provider value={color}>
                <button onClick={() => setColor('red')}>Make me red</button>
                <button onClick={() => setColor('yellow')}>Make me yellow</button>
                <ColorComponent/>
                <ColorComponent/>
            </ColorContext.Provider>
        </>
    )
}