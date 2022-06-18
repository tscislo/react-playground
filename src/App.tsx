import React from 'react';
import logo from './logo.svg';
import './App.css';
import {CounterComponent} from "./lifted-local-state/counter.component";
import {ParentComponent} from "./lifted-local-state/parent.component";

function App() {
    return (
        <div className="App">
            <ParentComponent/>
        </div>
    );
}

export default App;
