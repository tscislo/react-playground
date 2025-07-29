import {PropsWithChildren, useContext, useState} from "react";
import {Theme, ThemeContext} from "./theme-context";

export const ThemeContextProvider = (props: PropsWithChildren) => {
    const [theme, setTheme] = useState(useContext(ThemeContext));

    return (
        <ThemeContext value={theme}>
            <div data-testid={'someText'}>Some text</div>
            <div style={{'border': '2px blue solid'}}>
                <select data-testId="theme-selector" value={theme} onChange={(e) => setTheme(e.target.value as Theme)}>
                    <option value={Theme.LIGHT}>Light</option>
                    <option value={Theme.DARK} data-testId="dark-theme">Dark</option>
                </select>
                {props.children}
            </div>
        </ThemeContext>
    );
}
