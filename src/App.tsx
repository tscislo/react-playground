import React from 'react';
import logo from './logo.svg';
import './App.css';
import {CounterComponent} from "./components/counter.component";
import {ParentComponent} from "./components/parent.component";

function App() {
    return (
        <div className="App">
            <ParentComponent/>
        </div>
    );
}

export default App;
