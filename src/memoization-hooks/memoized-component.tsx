import {ElementType, memo} from "react";

export const MemoizedComponent = memo((
        {user, NotWrapper}: {
            user: { name: string },
            NotWrapper: ElementType
        }) => {
    console.log('MemoizedComponent rendered')
    return (
            <div>
                I will <NotWrapper>NOT</NotWrapper> re-render unless my props change
                {user.name}
            </div>
    )
});
