import React, {Ref} from "react";


export const FancyButton = ({ref}: {ref: Ref<HTMLButtonElement>}) => (
        <button ref={ref} className="FancyButton">
            FancyButton
        </button>
);
