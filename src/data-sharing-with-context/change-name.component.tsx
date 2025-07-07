import {useCallback, useContext, useEffect, useState} from "react";
import {UserContext} from "./user.context";

export const ChangeNameComponent = () => {
    const [name, setName] = useState('');
    const userContext = useContext(UserContext);

    useEffect(() => {
        userContext.modifyUser({
            ...userContext.user,
            name,
        })
    }, [name])

    return <div>
        <input value={userContext.user.name} onChange={(e) => setName(e.target.value)}/>
    </div>
}
