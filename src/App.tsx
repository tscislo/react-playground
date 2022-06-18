import React from 'react';
import './App.css';
import {ParentComponent} from "./lifted-local-state/parent.component";
import {ParentColorComponent} from "./primitive-context/parent-context";

function App() {
    return (
        <div className="App">
            <ParentComponent/>
            <ParentColorComponent />
        </div>
    );
}

export default App;
