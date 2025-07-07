import React from 'react';
import './App.css';
import {ListContainerComponent} from "./basic-parent-child-communication/list-container.component";
import {BasicStateHooksComponent} from "./basic-state-hooks-component/basic-state-hooks.component";
import {UserRegistrationComponent} from "./data-sharing-with-context/user-registration.component";
import {EffectHookComponent} from "./effect-hook-component/effect-hook.component"
import {EffectsHookStarWarsComponent} from "./effect-hook-star-wars-component/effects-hook-star-wars.component";
import {ParentComponent} from "./lifted-local-state/parent.component";
import {SampleComponent} from "./memoization-hooks/memoization-hooks.component";
import {ParentColorComponent} from "./primitive-context/parent-context";
import {MySuspenseConsumerComponent} from "./suspense/my-suspense-consumer.component";
import {ThemeCharacterComponent} from "./theme-context/theme-character.component";
import {ThemeContextProvider} from "./theme-context/theme-context.provider";

function App() {
    return (
        <div className="App">
            <MySuspenseConsumerComponent />
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
            <UserRegistrationComponent />
        </div>
    );
}

export default App;
