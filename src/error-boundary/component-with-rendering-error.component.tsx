import {useState} from "react";

export const ComponentWithRenderingErrorComponent = () => {
    const [state, setState] = useState<any>();

    const handler = () => {
        console.log(state.cos_tam)
    }

    return <><h1>Comp {state.test}</h1><button onClick={handler}>Click me!</button></>
}
