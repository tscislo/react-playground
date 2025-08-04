import {ErrorBoundary} from "react-error-boundary";
import {ErrorBoundaryCustom} from "../native-error-boundary/error-boundary.component";
import {ComponentWithRenderingErrorHandlerComponent} from "./component-with-rendering-error-handler.component";
import {
    ComponentWithRenderingErrorPromiseNoBoundaryComponent
} from "./component-with-rendering-error-promise-no-boundary.component";
import {
    ComponentWithRenderingErrorPromiseComponent
} from "./component-with-rendering-error-promise.component";
import {ComponentWithRenderingErrorComponent} from "./component-with-rendering-error.component";

function FallbackRender({ error, resetErrorBoundary }: {error: Error, resetErrorBoundary: () => void}) {
    return (
            <div role="alert">
                <p>Something went wrong:</p>
                <pre style={{ color: "red" }}>{error.message}</pre>
                <button onClick={resetErrorBoundary}>Reset</button>
            </div>
    );
}

export const ErrorBoundaryComponent = () => {
    return <>
        <ErrorBoundary fallback={<div>Something went wrong A</div>}>
            <ComponentWithRenderingErrorComponent />
        </ErrorBoundary>
        <ErrorBoundary fallback={<div>Something went wrong B</div>}>
            <ComponentWithRenderingErrorComponent />
        </ErrorBoundary>
        <ErrorBoundary
                onReset={(details) => {
                    console.log("RESET")
                }}
                FallbackComponent={FallbackRender}>
            <ComponentWithRenderingErrorComponent />
        </ErrorBoundary>
        <ErrorBoundary
                onReset={(details) => {
                    console.log("RESET")
                }}
                FallbackComponent={FallbackRender}>
            <ComponentWithRenderingErrorHandlerComponent />
        </ErrorBoundary>
        <ErrorBoundary
                onReset={(details) => {
                    console.log("RESET")
                }}
                FallbackComponent={FallbackRender}>
            <ComponentWithRenderingErrorPromiseComponent />
        </ErrorBoundary>
        <ErrorBoundaryCustom fallback={<div>Sth went wrong</div>}>
            <ComponentWithRenderingErrorPromiseNoBoundaryComponent />
        </ErrorBoundaryCustom>
    </>
}
