import React from "react";
import {ColorContext} from "./color.context";
import {ColorComponent} from "./color-component";

export const ParentColorComponent = () => {

    return (
        <>
            <ColorComponent/>
            <ColorContext.Provider value={'blue'}>
                <ColorContext.Provider value={'red'}>
                    <ColorComponent/>
                </ColorContext.Provider>
            </ColorContext.Provider>
            <ColorContext.Provider value={'green'}>
                <ColorComponent/>
            </ColorContext.Provider>
        </>
    )
}