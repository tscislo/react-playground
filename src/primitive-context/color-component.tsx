import React, {useContext} from "react";
import {ColorContext} from "./color.context";

export const ColorComponent = () => {
    const colorContext = useContext(ColorContext);
    return (
        <div style={{
            width: '50px',
            height: '50px',
            backgroundColor: colorContext
        }}/>
    )
}