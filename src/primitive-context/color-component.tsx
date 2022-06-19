import React, {memo, useContext, useEffect, useRef} from "react";
import {ColorContext} from "./color.context";

export const ColorComponent = ({count}: { count: number }) => {
    const colorContext = useContext(ColorContext);
    const renderCount = useRef(1);
    useEffect(() => {
        renderCount.current += 1;
    })
    return (
        <div style={{
            height: '50px',
            width: '50vh',
            backgroundColor: colorContext
        }}>Count: {count}, render count {renderCount.current}</div>
    )
}

export const ColorMemo = memo(ColorComponent);