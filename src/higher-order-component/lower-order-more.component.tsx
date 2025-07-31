import {memo} from "react";

export const LowerOrderComponentMore = memo(({date} : {date: string}) => {
    return <>This date is in UTC {date}</>
})
