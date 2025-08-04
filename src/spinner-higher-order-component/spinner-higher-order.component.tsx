import {ComponentType} from "react";

export const withSpinner = (Component: ComponentType) => {
    return ({data}: {data: any}) => {
        if (!data) {
            return <div className="spinner">Loading...</div>;
        }
        return <><Component /></>
    }
}
