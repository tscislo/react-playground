import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router";
import {ListContainerComponent} from "./basic-parent-child-communication/list-container.component";
import {BasicStateHooksComponent} from "./basic-state-hooks-component/basic-state-hooks.component";
import {EffectHookComponent} from "./effect-hook-component/effect-hook.component"
import {EffectsHookStarWarsComponent} from "./effect-hook-star-wars-component/effects-hook-star-wars.component";
import {IndexComponent} from "./index/index.component";
import {ParentComponent} from "./lifted-local-state/parent.component";
import {MainComponent} from "./main/main.component";
import {SampleComponent} from "./memoization-hooks/memoization-hooks.component";
import {ParentColorComponent} from "./primitive-context/parent-context";
import {ThemeCharacterComponent} from "./theme-context/theme-character.component";
import {ThemeContextProvider} from "./theme-context/theme-context.provider";

function App() {
    return (
            <BrowserRouter>
                <div className="App">
                    <Routes>
                        <Route path={'/'} element={<MainComponent/>}>
                            <Route index element={<IndexComponent/>}/>
                            <Route path="basic-parent-child-communication" element={<ListContainerComponent/>}/>
                            <Route path="effects-hook-star-wars/:movieId?" element={<EffectsHookStarWarsComponent/>}/>
                            <Route path="lifted-local-state" element={<ParentComponent/>}/>
                            <Route path="primitive-context" element={<ParentColorComponent/>}/>
                            <Route path="basic-state-hooks" element={<BasicStateHooksComponent/>}/>
                            <Route path="effect-hook-component" element={<EffectHookComponent/>}/>
                            <Route path="memoization-hooks" element={<SampleComponent/>}/>
                            <Route path="theme-context" element={
                                <ThemeContextProvider>
                                    <ThemeCharacterComponent/>
                                    <ThemeCharacterComponent/>
                                    <ThemeCharacterComponent/>
                                </ThemeContextProvider>
                            }/>
                        </Route>
                    </Routes>
                </div>
            </BrowserRouter>
    );
}

export default App;
