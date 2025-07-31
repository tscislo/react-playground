import {memo} from "react";
import {NavLink} from "react-router";
import "./menu.component.css";

export const MenuComponent = memo(() => {
    return <ul>
        <li><NavLink to={'/basic-parent-child-communication'}>basic-parent-child-communication</NavLink></li>
        <li><NavLink to={'/effects-hook-star-wars'}>effects-hook-star-wars</NavLink></li>
        <li><NavLink to={'/lifted-local-state'}>lifted-local-state</NavLink></li>
        <li><NavLink to={'/primitive-context'}>primitive-context</NavLink></li>
        <li><NavLink to={'/basic-state-hooks'}>basic-state-hooks</NavLink></li>
        <li><NavLink to={'/effect-hook-component'}>effect-hook-component</NavLink></li>
        <li><NavLink to={'/memoization-hooks'}>memoization-hooks</NavLink></li>
        <li><NavLink to={'/theme-context'}>theme-context</NavLink></li>
        <li><NavLink to={'/state-context'}>state-context</NavLink></li>
        <li><NavLink to={'native-observable-api'}>native-observable-api</NavLink></li>
        <li><NavLink to={'my-supspence'}>my-supspence</NavLink></li>
        <li><NavLink to={'user-registration'}>user-registration</NavLink></li>
        <li><NavLink to={'forward-ref'}>forward-ref</NavLink></li>
        <li><NavLink to={'deferred-value'}>deferred-value</NavLink></li>
        <li><NavLink to={'higher-order-component'}>higher-order-component</NavLink></li>
        <li><NavLink to={'spinner-higher-order-component'}>spinner-higher-order-component</NavLink></li>
    </ul>
})
