import {PropsWithChildren, useContext, useState} from "react";
import {Theme, ThemeContext} from "./theme-context";

export const ThemeContextProvider = (props: PropsWithChildren) => {
    const [theme, setTheme] = useState(useContext(ThemeContext));

    return (
        <ThemeContext.Provider value={theme}>
            <div style={{'border': '2px blue solid'}}>
                <select value={theme} onChange={(e) => setTheme(e.target.value as Theme)}>
                    <option value={Theme.LIGHT}>Light</option>
                    <option value={Theme.DARK}>Dark</option>
                </select>
                {props.children}
            </div>
        </ThemeContext.Provider>
    );
}
