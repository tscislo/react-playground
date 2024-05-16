import React from 'react';
import './App.css';
import {ParentComponent} from "./lifted-local-state/parent.component";
import {ParentColorComponent} from "./primitive-context/parent-context";
import {BasicStateHooksComponent} from "./basic-state-hooks-component/basic-state-hooks.component";
import {EffectHookComponent} from "./effect-hook-component/effect-hook.component"

function App() {
    return (
        <div className="App">
            <EffectHookComponent/>
            <BasicStateHooksComponent/>
            <ParentComponent/>
            <ParentColorComponent />
        </div>
    );
}

export default App;
