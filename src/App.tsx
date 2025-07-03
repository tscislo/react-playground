import React from 'react';
import './App.css';
import {ListContainerComponent} from "./basic-parent-child-communication/list-container.component";
import {EffectsHookStarWarsComponent} from "./effect-hook-star-wars-component/effects-hook-star-wars.component";
import {ParentComponent} from "./lifted-local-state/parent.component";
import {ParentColorComponent} from "./primitive-context/parent-context";
import {BasicStateHooksComponent} from "./basic-state-hooks-component/basic-state-hooks.component";
import {EffectHookComponent} from "./effect-hook-component/effect-hook.component"
import {SampleComponent} from "./memoization-hooks/memoization-hooks.component";
import {ThemeContextProvider} from "./theme-context/theme-context.provider";
import {ThemeCharacterComponent} from "./theme-context/theme-character.component";

function App() {
    return (
        <div className="App">
            <EffectsHookStarWarsComponent />
            <ThemeContextProvider>
                <ThemeCharacterComponent />
                <ThemeCharacterComponent />
                <ThemeCharacterComponent />
            </ThemeContextProvider>
            <SampleComponent/>
            <EffectHookComponent/>
            <BasicStateHooksComponent/>
            <ParentComponent/>
            <ParentColorComponent />
            <ListContainerComponent />
        </div>
    );
}

export default App;
