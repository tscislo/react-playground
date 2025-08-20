import {ComponentType, useMemo} from "react";

export const withDateInUtc = (Component: ComponentType<{date : string}>)=> {
    return () => {
        const nowInUtc = useMemo(() => new Date().toISOString(), []);
        return <Component date={nowInUtc} />;
    };
}
