import {Link, Outlet} from "react-router";
import {MenuComponent} from "../menu/menu.component";

export const MainComponent = () => {
    return <>
        <h1><Link to={'/'}>React Recap App</Link></h1>
        <MenuComponent />
        <Outlet />
    </>
}

export default MainComponent;
