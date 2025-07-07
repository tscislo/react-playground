import {Suspense} from "react";
import {MySuspenseComponent} from "./my-suspense.component";


export const MySuspenseConsumerComponent = () => {

    return <div style={{border: '1px green solid'}}><Suspense fallback={<p>LOADING</p>}>
        <MySuspenseComponent/>
    </Suspense></div>
}
