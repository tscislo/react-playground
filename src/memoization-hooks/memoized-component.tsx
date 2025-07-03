import {memo} from "react";

export const MemoizedComponent = memo(({user}: {user: {name: string}}) => {
    console.log('MemoizedComponent rendered')
    return (
            <div>
                I will not re-render unless my props change
                {user.name}
            </div>
    )
});
