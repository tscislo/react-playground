import React, {lazy, Suspense} from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router";

// Lazy imports
const ListContainerComponent = lazy(() => import('./basic-parent-child-communication/list-container.component'));
const BasicStateHooksComponent = lazy(() => import('./basic-state-hooks-component/basic-state-hooks.component'));
const UserRegistrationComponent = lazy(() => import('./data-sharing-with-context/user-registration.component'));
const EffectHookComponent = lazy(() => import('./effect-hook-component/effect-hook.component'));
const EffectsHookStarWarsComponent = lazy(() => import('./effect-hook-star-wars-component/effects-hook-star-wars.component'));
const ForwardRefComponent = lazy(() => import('./forward-ref/forward-ref.component'));
const IndexComponent = lazy(() => import('./index/index.component'));
const ParentComponent = lazy(() => import('./lifted-local-state/parent.component'));
const MainComponent = lazy(() => import('./main/main.component'));
const SampleComponent = lazy(() => import('./memoization-hooks/memoization-hooks.component'));
const NativeObservableApiComponent = lazy(() => import('./native-observable-api/native-observable-api.component'));
const ParentColorComponent = lazy(() => import('./primitive-context/parent-context'));
const StateContextParentComponent = lazy(() => import('./state-context/state-context-parent.component'));
const MySuspenseConsumerComponent = lazy(() => import('./suspense/my-suspense-consumer.component'));
const ThemeCharacterComponent = lazy(() => import('./theme-context/theme-character.component'));
const ThemeContextProvider = lazy(() => import('./theme-context/theme-context.provider'));
const DeferredValueConsumer = lazy(() => import('./use-deferred-value/use-deferred-value.component'));

const withSuspense = (Component: React.ComponentType) => (
        <Suspense fallback={<div>Loading...</div>}>
            <Component />
        </Suspense>
);

function App() {
    return (
            <BrowserRouter>
                <div className="App">
                    <Suspense fallback={<div>Loading...</div>}>
                        <Routes>
                            <Route path="/" element={<MainComponent/>}>
                                <Route index element={<IndexComponent/>}/>
                                <Route
                                        path="basic-parent-child-communication" element={withSuspense(ListContainerComponent)}/>
                                <Route path="effects-hook-star-wars/:movieId?"
                                       element={<EffectsHookStarWarsComponent/>}/>
                                <Route path="lifted-local-state" element={<ParentComponent/>}/>
                                <Route path="primitive-context" element={<ParentColorComponent/>}/>
                                <Route path="basic-state-hooks" element={<BasicStateHooksComponent/>}/>
                                <Route path="effect-hook-component" element={<EffectHookComponent/>}/>
                                <Route path="memoization-hooks" element={<SampleComponent/>}/>
                                <Route
                                        path="theme-context"
                                        element={
                                            <ThemeContextProvider>
                                                <ThemeCharacterComponent/>
                                                <ThemeCharacterComponent/>
                                                <ThemeCharacterComponent/>
                                            </ThemeContextProvider>
                                        }
                                />
                                <Route path="state-context" element={<StateContextParentComponent/>}/>
                                <Route path="native-observable-api" element={<NativeObservableApiComponent/>}/>
                                <Route path="my-supspence" element={<MySuspenseConsumerComponent/>}/>
                                <Route path="user-registration" element={<UserRegistrationComponent/>}/>
                                <Route path="forward-ref" element={<ForwardRefComponent/>}/>
                                <Route path="deferred-value" element={<DeferredValueConsumer/>}/>
                                <Route path="*" element={<h1>Page not found</h1>}/>
                            </Route>
                        </Routes>
                    </Suspense>
                </div>
            </BrowserRouter>
    );
}

export default App;

