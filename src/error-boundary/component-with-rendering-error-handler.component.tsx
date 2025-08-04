import {useState} from "react";

export const ComponentWithRenderingErrorHandlerComponent = () => {
    const [state, setState] = useState<any>();

    const handler = () => {
        console.log(state.cos_tam)
    }

    return <><h1>Comp</h1><button onClick={handler}>Click me!</button></>
}
