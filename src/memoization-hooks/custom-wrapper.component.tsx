import {PropsWithChildren} from "react";

export const CustomWrapperComponent = ({children}: PropsWithChildren) => {
    return (
            <i>
                {children}
            </i>
    )
}
