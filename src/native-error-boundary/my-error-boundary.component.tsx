import {ComponentWithRenderingErrorComponent} from "./component-with-rendering-error.component";
import {ErrorBoundaryCustom} from "./error-boundary.component";

export const MyErrorBoundaryComponent = () => {
    return <>
        <ErrorBoundaryCustom fallback={<div>Something went wrong!</div>}>
            <ComponentWithRenderingErrorComponent />
        </ErrorBoundaryCustom>
    </>
}
