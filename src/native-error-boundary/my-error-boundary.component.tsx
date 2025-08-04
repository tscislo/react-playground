import {ComponentWithRenderingErrorComponent} from "./component-with-rendering-error.component";
import ErrorBoundaryComponent from "./error-boundary.component";

export const MyErrorBoundaryComponent = () => {
    return <>
        <ErrorBoundaryComponent fallback={<div>Something went wrong!</div>}>
            <ComponentWithRenderingErrorComponent />
        </ErrorBoundaryComponent>
    </>
}
