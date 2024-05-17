import {useContext} from "react";
import {ThemeContext} from "./theme-context";

export const ThemeCharacterComponent = () => {
    const theme = useContext(ThemeContext);
    return (
        <div style={{'border': '2px red solid', 'backgroundColor': (theme === "DARK") ? 'gray' : 'white'}}>
            {theme}
        </div>
    );
}
