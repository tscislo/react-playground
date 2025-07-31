import {useEffect, useRef} from "react";
import {FancyButtonWithForwardRefComponent} from "./fancy-button-with-forwardRef.component";
import {FancyButton} from "./fancy-button.component";

const ForwardRefComponent = () => {
    const h2Ref = useRef(null);
    const ref = useRef<HTMLButtonElement | null>(null);
    const ref2 = useRef<HTMLElement | null>(null);

    useEffect(() => {
        console.log("element from child component", ref.current);
        console.log("element from child component 2", ref2.current);
        console.log("element from this component", h2Ref.current)
    }, [])

    return <>
        <h2 ref={h2Ref}>ForwardRefComponent</h2>
        <FancyButton ref={ref} />
        <FancyButtonWithForwardRefComponent ref={ref2} />
    </>
}

export default ForwardRefComponent;
