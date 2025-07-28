import React, {ForwardedRef, forwardRef, Ref} from "react";


export const FancyButtonWithForwardRefComponent = forwardRef((props, ref:ForwardedRef<any>) => (
        <button ref={ref} className="FancyButton">
            FancyButton
        </button>
));
