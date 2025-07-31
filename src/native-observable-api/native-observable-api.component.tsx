import {useEffect, useRef} from "react";

export const NativeObservableApiComponent = () => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const checkboxRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const abortController = new AbortController();
        if (buttonRef.current && checkboxRef?.current) {
            buttonRef.current
                    .when('click')
                    .filter(() => checkboxRef?.current?.checked ?? false)
                    .subscribe({
                        next() {
                            alert('clicked');
                        },
                    }, {
                        signal: abortController.signal
                    });
        }
        return () => {
            abortController.abort("abort");
        }
    }, [buttonRef, checkboxRef]);

    return <div style={{'border': '1px solid red'}}>
        <button ref={buttonRef}>Click me</button>
        <input id={'enabled'} type={'checkbox'} ref={checkboxRef}/> <label htmlFor={'enabled'}>Enabled?</label>
    </div>
}

export default NativeObservableApiComponent;
