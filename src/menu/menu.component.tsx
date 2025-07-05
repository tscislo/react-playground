import {memo} from "react";
import {Link} from "react-router";

export const MenuComponent = memo(() => {
    return <ul>
        <li><Link to={'/basic-parent-child-communication'}>basic-parent-child-communication</Link></li>
        <li><Link to={'/effects-hook-star-wars'}>effects-hook-star-wars</Link></li>
        <li><Link to={'/lifted-local-state'}>lifted-local-state</Link></li>
        <li><Link to={'/primitive-context'}>primitive-context</Link></li>
        <li><Link to={'/basic-state-hooks'}>basic-state-hooks</Link></li>
        <li><Link to={'/effect-hook-component'}>effect-hook-component</Link></li>
        <li><Link to={'/memoization-hooks'}>memoization-hooks</Link></li>
        <li><Link to={'/theme-context'}>theme-context</Link></li>
    </ul>
})
