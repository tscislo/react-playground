import {useState} from "react";

export const ComponentWithRenderingErrorPromiseNoBoundaryComponent = () => {
    const [state, setState] = useState<any>({test: 'aaa'});

    const prom = async () => {
        await new Promise<void>((resolve, reject) => {
            setTimeout(() => {
                reject('rejected')
            }, 1000)
        })
    }

    return <><h1>Promise {state.test}</h1><button onClick={prom}>Click me!</button></>
}
