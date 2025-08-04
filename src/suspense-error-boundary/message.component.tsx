import {Suspense, use} from "react";
import {ErrorBoundary} from "react-error-boundary";

export function MessageContainer({ messagePromise }: {messagePromise: Promise<any> | null}) {
    return (
            <ErrorBoundary fallback={<p>⚠️Something went wrong</p>}>
                <Suspense fallback={<p>⌛Downloading message...</p>}>
                    <Message messagePromise={messagePromise} />
                </Suspense>
            </ErrorBoundary>
    );
}

export const Message = ({ messagePromise }: {messagePromise: Promise<any> | null})=> {
    const content = use<Promise<any> | null>(messagePromise as Promise<any>);
    return <p>Here is the message: {content}</p>;
}
