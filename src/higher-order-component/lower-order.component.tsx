import {memo} from "react";

export const LowerOrderComponent = memo(({date} : {date: string}) => {
    return <>Lower {date}</>
})
