import {useState} from "react";
import {MessageContainer} from "./message.component";

function fetchMessage() {
    return new Promise((resolve, reject) => setTimeout(reject, 1000));
}

export const SuspenseErrorBoundaryExampleComponent   = () => {
    const [messagePromise, setMessagePromise] = useState<Promise<any> | null>(null);
    const [show, setShow] = useState(false);
    function download() {
        setMessagePromise(fetchMessage());
        setShow(true);
    }

    if (show) {
        return <MessageContainer messagePromise={messagePromise} />;
    } else {
        return <button onClick={download}>Download message</button>;
    }
}
