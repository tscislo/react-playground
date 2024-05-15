import React from 'react';
import './App.css';
import {ParentComponent} from "./lifted-local-state/parent.component";
import {ParentColorComponent} from "./primitive-context/parent-context";
import {BasicHookComponent} from "./basic-hook-component/basic-hook.component";

function App() {
    return (
        <div className="App">
            <BasicHookComponent/>
            <ParentComponent/>
            <ParentColorComponent />
        </div>
    );
}

export default App;
