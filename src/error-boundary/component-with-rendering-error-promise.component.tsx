import {useState} from "react";
import {useErrorBoundary} from "react-error-boundary";

export const ComponentWithRenderingErrorPromiseComponent = () => {
    const [state, setState] = useState<any>({test: 'aaa'});
    const { showBoundary } = useErrorBoundary();

    const prom = async () => {
        await new Promise<void>((resolve, reject) => {
            setTimeout(() => {
                reject('rejected')
            }, 1000)
        }).catch((e) => {
            showBoundary(e)
        })
    }

    return <><h1>Promise {state.test}</h1><button onClick={prom}>Click me!</button></>
}
